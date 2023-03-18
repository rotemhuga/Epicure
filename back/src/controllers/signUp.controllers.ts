import {getSignUp} from "../services/signUp.service"
import express, {Request, Response} from "express";
import bcrypt from "bcrypt";
import { request } from "http";
const jwt = require('jsonwebtoken');

export const getControllSignUp = async (req: Request, res: Response) => {
    console.log("users controller connected");
    try {
        const allDataUser = req.body
        const _usersCheck = await getSignUp(allDataUser);
        if (!(allDataUser.emailAddress && allDataUser.password && allDataUser.firstName && allDataUser.lastName && allDataUser.shippingAddress)) {
            res.status(400).send("All input is required");
          }

    // Validate if user exist in our database  
    const oldUser = await allDataUser.findOne({email:allDataUser.emailAddress });
    if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
    }
    //Encrypt user password
    const encryptedPassword = await bcrypt.hash(allDataUser.password!, 10);
    
    // Create user in our database
    const user = await allDataUser.create({
        firstName:allDataUser.firstName,
        lastName:allDataUser.lastName,
        emailAddress:allDataUser.emailAddress!.toLowerCase(),
        shippingAddress:allDataUser.shippingAddress,
        password: encryptedPassword,
      });

      res.status(201).json(allDataUser);
    } catch (err) {
      console.log(err);
    }
};
//     try {
//         const allDataUser = req.body
//         const _usersCheck = await getSignUp(allDataUser);
//     if (_usersCheck) {
//             return "User Already Exist. Please Login";
//         }
//     else {
//             //Encrypt user password
//             const encryptedPassword = await bcrypt.hash( allDataUser.password, 10);
//             console.log(encryptedPassword);
//             // Create user in database
//             const newUseDocument = {
//                 firstName:allDataUser.firstName,
//                 lastName:allDataUser.lastName,
//                 email:allDataUser.emailAddress.toLowerCase(),
//                 shippingAddress:allDataUser.shippingAddress,
//                 password: encryptedPassword,
//             }
//             const _user = new signUpModel(newUseDocument);
//             // Create token

//             const SECRET_KEY = process.env.SECRET_KEY!;
//             const token = jwt.sign(
//                 { newUseDocument_id: _user._id },
//                 SECRET_KEY, 
//                 {expiresIn: "2h",});
//             await _user.save();
//             return res
//             .status(200)
//             .json(_user)
//         };
      