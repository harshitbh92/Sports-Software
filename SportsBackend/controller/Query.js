const express = require("express");
const User = require("../models/UserModel");
const Query = require("../models/QueriesModel");

const asyncHandler = require("express-async-handler");


const createQuery = asyncHandler(async(req,res)=>{
    const  {  email} = req.body;
    const user = User.findOne({email});
    if(user)
    {
        const newQuery = await Query.create(req.body);
        res.json(newQuery);
    }
    else
    {
        res.json("User Not Registered! You need to Sign Up First");
    }
})

module.exports ={
    createQuery,
}