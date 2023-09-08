const mongoose = require("mongoose");

const connectDB = async () =>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/blog' , {useNewUrlParser : true});
        console.log(`you are connected to mongodb database ${mongoose.connection.host}`.bgGreen.white);
    }
    catch(error){
        console.log(`mongodb database Eroor ${error}`.bgRed.white);
    }
    
    };
    
    
module.exports = connectDB;