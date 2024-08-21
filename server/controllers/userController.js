import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import userModel from "../models/userModel.js"

export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email: email })
        
        if (user) {
            const isMatchPswrd = await bcrypt.compare(password, user.password)
            
            if (!isMatchPswrd) {
                res.status(200).send({ message: "Incorrect Password", noUser: false })
            } else {
                const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
                    expiresIn: '1m'
                }) //the jwt.sign() will generate the token,the expiresIn is for destory the session
                res.status(200).send({ message: "Login Successfull", success: true, data: token })
            }
        }
    } catch (error) {
        res.status(500).send({ message: "Error in Login", success: false, error })
    }
}

export const userSignUp = async (req, res) => {
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