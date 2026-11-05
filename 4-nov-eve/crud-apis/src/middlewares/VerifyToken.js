import jwt from 'jsonwebtoken';

export function verifyToken(request, response, next){
    try {
        // request.params 
        // request.body
        const authHeader = request.get('Authorization'); // "Bearer ey..."

        if(authHeader){
            const token = authHeader.split(" ")[1];// ["Bearer","ey...."]
            jwt.verify(token, "hello1234", (error, payload)=>{
                if(error){
                    response.status(401).send({message:"Token is not valid."});
                }
                else{
                    next();
                }
            });
        }
        else{
            response.status(401).send({message:"Token is missing."});
        }
    } catch (error) {
        console.log(error);
        response.send({message:"Something went wrong"});
    }
}