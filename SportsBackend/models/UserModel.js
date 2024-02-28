const mongoose = require('mongoose'); // Erase if already required
const bcrypt = require('bcrypt');

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match : /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(thapar)\.edu$/,
    },
    rollNo : {
        type : Number,
        required : true,
        unique : true
    },
    phoneNumber : {
        type : Number,
        required : true,
        unique : true
        // index : {unique : true},
        // match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
    },
    password : {
        type : String,
        required : true,
    },
    itemsRented : {
        type : Array,
        default : [],
    },
    isBlocked:{
        type:Boolean,
        default:false
    },
    role:{
        type:String,
        default :"user"
    }
},
{
    timestamps : true,
});

//encrypt the password using bcrypt
userSchema.pre('save', async function(next){ //pre means that it will run before a 
    //document of the userSchema model is saved to the database
    //next(): This is a callback function that must be called at
    // the end of the middleware to signal that the middleware
    // has completed its task and the save operation can continue. 
    //It allows the document to proceed with the save operation,
    // ensuring that the hashed password is saved in the database.

    if(!this.isModified("password")){
        //for the update password if password is modified then we nwwd to encrypt it 
        //if not modified no need to encrypt hence "next()""
        next();
    }

    const salt = await bcrypt.genSaltSync(10);
    this.password = await bcrypt.hash(this.password, salt);
});

//now to ckeck the enetered password to original decrypt it
userSchema.methods.isPasswordMatched = async function(enteredPassword){ //adds method isPasswordMatched to the userSchema
    return await bcrypt.compare(enteredPassword, this.password);
};

//Export the model
module.exports = mongoose.model('User', userSchema);