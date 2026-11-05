import { sqlConnectionPool } from '../configs/DbConfig.js';

export async function save(request, response) {
    try {
        // step 1: get data from client {name:"", price: 6677, description:"", qty:8} 
        const { name, price, description, qty } = request.body;

        // step 2: create a SQL INSERT query
        // const insertQry = `INSERT into product(name, price, description, qty) VALUES('${name}', ${price}, '${description}', ${qty})`
        // this above approach (concating data directly in the SQL query) is prone to sql injection attack 

        const insertQry = `INSERT into product(name, price, description, qty) VALUES(?,?,?,?)`;

        // step 3: run this query in the db
        const [result] = await sqlConnectionPool.query(insertQry, [name, price, description, qty]);
        console.log(result.insertId);

        response.send({ message: "product inserted", insertedId: result.insertId });

    } catch (error) {
        console.log(error);
        response.status(500).send({ message: "Something went wrong" });
    }
}

export async function getAll(request, response) {
    try {

        // step 1: create a select query

        const fetchAllProductsQry = "SELECT * FROM product";

        // step 2: run this query
        const [result] = await sqlConnectionPool.query(fetchAllProductsQry);

        response.send(result);


    } catch (error) {
        console.log(error);
        response.status(500).send({ message: "Something went wrong" });
    }
}

export async function getById(request, response) {
    try {

        // step 1: read id from url parameter

        const { id } = request.params;

        // step 2: create a select query

        const fetchByIdQuery = "SELECT * FROM product WHERE id = ?";

        // step 3: run this query

        const [result] = await sqlConnectionPool.query(fetchByIdQuery, [id] );

        if(result.length > 0){
            response.send(result[0]);
        }
        else{
            response.status(404).send({message:`Product with id ${id} not found`});
        }

    } catch (error) {
        console.log(error);
        response.status(500).send({ message: "Something went wrong" });
    }
}

export async function deleteById(request, response){
    try {

        // step 1: read id from url parameter

        const { id } = request.params;

        // step 2: create a delete query

        const deleteQry = "DELETE FROM product WHERE id = ?";

        // step 3: run this query

        const [result] = await sqlConnectionPool.query(deleteQry, [id]);
        console.log(result);

        response.send({message:"Product Deleted"});


    } catch (error) {
        console.log(error);
        response.status(500).send({ message: "Something went wrong" });
    }
}