import  express  from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoute from './routes/auth.route.js'

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => {console.log("sucess conection ")})
.catch((err) => {console.log("error conecting "+ err)})

const app = express()

app.use(express.json());

app.listen(3000,()=>{
    console.log("Server is running on port: 3000")
});


app.use("/api/user",userRoutes)

app.use('/api/auth',authRoute)


app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'internal server Error';

    return res.status(statusCode).json({
        success:false,
        message,
        statusCode,
    })

})