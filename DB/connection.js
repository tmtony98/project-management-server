const mongoose = require("mongoose")

const connectionString = process.env.DATABASE

mongoose.connect(connectionString).then(()=>{
    console.log("mongodb atlas connected to pfserver");
}).catch((err)=>{
console.log(("mongodb connection failed"+ err));
})