import User from "../models/user.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const signup = async(req,res,next) => {


    const {username,email,password} = req.body;

    const hashedpassword = bcryptjs.hashSync(password,10);

    const newUser = new User({username,email,password:hashedpassword});


    try {
    await newUser.save();
    res.status(201).json({message:"created complete"});
    } 


    catch (error) {
        next(errorHandler(300,"error"));
    }


};