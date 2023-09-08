const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//env configuration 
dotenv.config();

//router 
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");


//connect to mongodb database
connectDB();


//routes
const app = express();

//middle wares 
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


//routes


app.use("/api/v1/user" , userRoutes);
app.use("/api/v1/blog" , blogRoutes);


const PORT = process.env.PORT || 8000;



app.listen(PORT ,()=>{
    console.log(`server running  on ${process.env.DEV_MODE} port no ${PORT}`.bgCyan.white);
} );
