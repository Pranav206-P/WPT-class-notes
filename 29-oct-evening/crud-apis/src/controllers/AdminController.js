import { compareSync, hashSync } from "bcrypt";
import { sqlConnectionPool } from "../configs/DbConfig.js";
import jwt from 'jsonwebtoken';

export async function save(request, response) {
    try {
        // step 1: get data from client {name:"", price: 6677, description:"", qty:8} 
        const { name, phone, password } = request.body;

        const encryptedPassword = hashSync(password, 10); //async 

        // step 2: create a SQL INSERT query
        // const insertQry = `INSERT into product(name, price, description, qty) VALUES('${name}', ${price}, '${description}', ${qty})`
        // this above approach (concating data directly in the SQL query) is prone to sql injection attack 

        const insertQry = `INSERT into admin(name, phone, password) VALUES(?,?,?)`;

        // step 3: run this query in the db
        const [result] = await sqlConnectionPool.query(insertQry, [name, phone, encryptedPassword]);
        console.log(result.insertId);

        response.send({ message: "admin registered", insertedId: result.insertId });

    } catch (error) {
        console.log(error);
        response.status(500).send({ message: "Something went wrong" });
    }
}

export async function login(request, response) {
    try {
        // step 1: get data from client {name:"", price: 6677, description:"", qty:8} 
        const { phone, password } = request.body;

        const loginQry = "SELECT * FROM admin WHERE phone = ?";

        const [result] = await sqlConnectionPool.query(loginQry, [phone]);

        console.log(result);
        if(result.length === 0){
            response.send({message:"Phone no. is not valid"});
        }
        else{
            const adminData = result[0];
            const isPasswordValid = compareSync(password, adminData.password);
            if(isPasswordValid){
                const token = jwt.sign({adminId: adminData.id}, "hello1234");
                response.send({message:"Login successful", token});
            }
            else{
                response.send({message:"Password is not valid"});
            }
        }
        
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: "Something went wrong" });
    }
}