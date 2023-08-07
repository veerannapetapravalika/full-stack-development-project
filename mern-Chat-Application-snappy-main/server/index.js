const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const messageRoute = require("./routes/messagesRoute");


const app = express();
require("dotenv").config();

// const allowedOrigins = [
//     "http://localhost:3000",
//     "https://mern-chat-application-snappy.onrender.com"
//   ];
  
//   // CORS middleware configuration
//   const corsOptions = {
//     origin: function (origin, callback) {
//       // Check if the request origin is in the list of allowed origins
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error('Not allowed by CORS'));
//       }
//     }
//   };

app.use(cors());
app.use(express.json());

app.use("/api/auth",userRoutes);
app.use("/api/messages",messageRoute);

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("DB Connection Successfull");
}).catch((err)=>{
    console.log(err.message);
});


const server = app.listen(process.env.PORT,()=>{
    console.log(`Server Started on Port ${process.env.PORT}`)
});