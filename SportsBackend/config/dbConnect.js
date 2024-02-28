const { default: mongoose } = require("mongoose");

const dbConnect = ()=>{
    try {
        const conn=  mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connected Successfully");
    } catch (error) {
        console.log("Some error occured at the backend!!");
        
    }
}

module.exports = dbConnect;