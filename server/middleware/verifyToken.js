import jwt from "jsonwebtoken";
import createError from "../error.js"
export const verifyToken=async(req,res,next)=>{
    try{

        if(!req.headers.authorization)
            {
                return next(createError(401,"you are not Authenticated!"));
            }
            const token=req.headers.authorization.split(" ")[1];
            if (!token)
                {
                    return next(createError(401,"you are not authenticated"))
                }
                const decode=jwt.verify(token,process.env.JWT);
                req.user= decode
                console.log("token",token)
                console.log(decode)
                return next()
            }
            catch(err)
            {
                next(err)
            }
        }
        export default verifyToken