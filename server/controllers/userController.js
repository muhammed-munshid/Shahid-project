import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import userModel from "../models/userModel.js"
import messageModel from '../models/messageModel.js';
import staffModel from '../models/staffModel.js';

export const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email: email })
        if (user) {
            const isMatchPswrd = await bcrypt.compare(password, user.password)

            if (!isMatchPswrd) {
                res.status(200).send({ message: "Incorrect Password", noUser: false })
            } else {
                const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
                    expiresIn: '1d'
                }) //the jwt.sign() will generate the token,the expiresIn is for destory the session
                res.status(200).send({ message: "Login Successfull", success: true, data: token })
            }
        } else {
            res.status(200).send({ message: "User Not Exist", notExist: true })
        }
    } catch (error) {
        res.status(500).send({ message: "Error in Login", success: false, error })
    }
}

export const adminSignUp = async (req, res) => {
    try {
        const { name, email, mobile, password } = req.body
        const user = await userModel.findOne({ email: email })
        if (user) {
            res.status(200).send({ exist: true, message: 'You are already signed' })
        } else {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)
            const newUser = new userModel({
                name,
                email,
                mobile,
                password: hashedPassword
            })
            await newUser.save()
            res.status(200).send({ success: true, message: 'Your signUp verificatoin successfully' })
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: true })
    }
}

export const chats = async (req, res) => {
    try {
        const { message } = req.body;  // Expect a single message in the request body
        console.log('req: ', req.body);

        const userId = req.user.id;  // Get the user ID from the decoded token
        console.log('userId: ', userId);

        // Create and save the new message
        const newMessage = new messageModel({
            user: userId,
            message: message,  // This is a string, not an array
        });
        await newMessage.save();

        res.status(201).json(newMessage);
    } catch (error) {
        console.error('Error saving message:', error);
        res.status(500).json({ message: 'Server error' });
    }
}




export const staffLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await staffModel.findOne({ email: email })
        if (user) {
            const isMatchPswrd = await bcrypt.compare(password, user.password)

            if (!isMatchPswrd) {
                res.status(200).send({ message: "Incorrect Password", noUser: false })
            } else {
                const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
                    expiresIn: '1d'
                }) //the jwt.sign() will generate the token,the expiresIn is for destory the session
                res.status(200).send({ message: "Login Successfull", success: true, data: token })
            }
        } else {
            res.status(200).send({ message: "User Not Exist", notExist: true })
        }
    } catch (error) {
        res.status(500).send({ message: "Error in Login", success: false, error })
    }
}

export const staffSignUp = async (req, res) => {
    try {
        const { name, email, mobile, password } = req.body
        const user = await staffModel.findOne({ email: email })
        if (user) {
            res.status(200).send({ exist: true, message: 'You are already signed' })
        } else {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)
            const newUser = new staffModel({
                name,
                email,
                mobile,
                password: hashedPassword
            })
            await newUser.save()
            res.status(200).send({ success: true, message: 'Your signUp verificatoin successfully' })
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: true })
    }
}