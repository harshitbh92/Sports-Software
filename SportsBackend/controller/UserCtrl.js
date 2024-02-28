const express = require("express");
const User = require("../models/UserModel");

const asyncHandler = require("express-async-handler");
const { generateRefreshToken } = require("../config/refreshToken");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../config/jwtToken");

//register a user 
const createUser = asyncHandler(async (req, res) => {
    let { name, email, rollNo, phoneNumber, password, confirmPassword } = req.body;
    const finduser = await User.findOne({ email });
    if (!finduser) {
        if (password !== confirmPassword) {
            return res.send({ error: "Passwords do not match!" });
        }
        if (password.length < 8) {
            return res.send({ error: "Password must be at least 8 characters" });
        }
        if (!name || !email || !password || !phoneNumber || !rollNo) {
            return res.send({ error: "All fields are required" });
        }
        // if(phoneNumber.length !== 10) {
        //     return res.send({error : "Please enter a valid phone number"});
        // }
        const newUser = await User.create(req.body);
        res.json(newUser);
    }
    else {
        throw new Error("User already exists");
    }
});

const loginUserCtrl = asyncHandler(async (req, res) => {
    const { email, rollNo, password } = req.body;
    //console.log(email , password);
    let findUser;
    if (email) {
        findUser = await User.findOne({ email: email });
    } else if (rollNo) {
        findUser = await User.findOne({ rollNo: rollNo });
    }
    //console.log(findUser);
    if (findUser && (await findUser.isPasswordMatched(password))) {
        const refreshToken = await generateRefreshToken(findUser?.id);
        const updateUser = await User.findByIdAndUpdate(
            findUser.id,
            {
                refreshToken: refreshToken,

            },
            {
                new: true,
            }
        );
        res.cookie("refreshToken", refreshToken, {//creates cookie named refreshtoken with value "refreshtoken"
            httpOnly: true,//it means that the cookie is only accessible 
            //on the server-side and not through JavaScript on the client-side.
            maxAge: 72 * 60 * 60 * 1000,
        });
        res.json({
            _id: findUser?._id,
            name: findUser?.name,
            email: findUser?.email,
            rollNo: findUser?.rollNo,
            phoneNumber: findUser?.phoneNumber,
            token: generateToken(findUser?._id),
        });
    }
    else {
        throw new Error("Invalid Credentials");
    }
});

module.exports = {
    createUser,
    loginUserCtrl,

}