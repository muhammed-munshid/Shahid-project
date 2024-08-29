import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import adminModel from "../models/adminModel.js"
import messageModel from '../models/messageModel.js';
import staffModel from '../models/staffModel.js';
import diaryModel from '../models/diaryModel.js';

export const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await adminModel.findOne({ email: email })
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
        const user = await adminModel.findOne({ email: email })
        if (user) {
            res.status(200).send({ exist: true, message: 'You are already signed' })
        } else {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)
            const newUser = new adminModel({
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

export const staffList = async (req, res) => {
    try {
        const response = await staffModel.find()
        res.status(200).send({ success: true, data: response })
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: true })
    }
}

export const staffbyId = async (req, res) => {
    try {
        const id = req.params.id
        const response = await staffModel.findById(id)
        res.status(200).send({ success: true, data: response })
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: true })
    }
}

export const addStaff = async (req, res) => {
    try {
        const { name, email, mobile, password } = req.body
        const user = await adminModel.findOne({ email: email })
        if (user) {
            res.status(200).send({ exist: true, message: 'You are already added staff' })
        } else {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)
            const newStaff = new staffModel({
                name, email, mobile, password: hashedPassword
            })
            await newStaff.save()
            res.status(200).send({ success: true, message: 'New Staff Added' })
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: true })
    }
}

export const editStaff = async (req, res) => {
    try {
        const id = req.params.id
        const { name, email, mobile, password } = req.body
        function isBcryptHash(password) {
            // Bcrypt hashes usually start with $2a$, $2b$, or $2y$ and are 60 characters long
            const bcryptHashPattern = /^\$2[aby]\$.{56}$/;

            return bcryptHashPattern.test(password);
        }
        const isBycrypt = isBcryptHash(password)
        console.log(isBycrypt);

        if (isBycrypt === true) {
            await staffModel.findByIdAndUpdate(id, {
                $set: {
                    name, email, mobile, password
                }
            })
        } else {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)
            await staffModel.findByIdAndUpdate(id, {
                $set: {
                    name, email, mobile, password: hashedPassword
                }
            })
        }
        const updatedStaff = await staffModel.findById(id)
        res.status(200).send({ success: true, message: 'Staff Updated', data: updatedStaff })
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: true })
    }
}

export const blockStaff = async (req, res) => {
    try {
        const id = req.params.id
        const staff = await staffModel.findById(id)
        staff.isBlocked = !staff.isBlocked;
        await staff.save();
        const updatedStaff = await staffModel.findById(id)
        res.status(200).send({ success: true, message: updatedStaff.isBlocked ? 'User blocked successfully' : 'User unblocked successfully', data: updatedStaff })
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: true, message: 'Error toggling block status' })
    }
}

export const getChat = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;

        const messages = await messageModel.find({
            $or: [
                { senderId: userId, recieverId: id },
                { senderId: id, recieverId: userId }
            ]
        }).sort({ timestamp: 1 });

        res.status(200).send({ success: true, data: messages });
    } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).send({ error: true });
    }
};



export const sendChat = async (req, res) => {
    try {
        const { message, userType, recieverId } = req.body;
        const senderId = req.user.id;  // From the JWT token

        // Create and save the new message
        const newMessage = new messageModel({
            senderId,
            recieverId,
            message,
            userType
        });

        await newMessage.save();

        // Emit the message to the recipient via Socket.IO
        req.io.to(recieverId.toString()).emit('chatMessage', newMessage);

        // Optionally, emit the message to the sender too
        req.io.to(senderId.toString()).emit('chatMessage', newMessage);

        res.status(201).json(newMessage);
    } catch (error) {
        console.error('Error saving message:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const staffLogin = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await staffModel.findOne({ email: email })
        console.log('user: ', user.password);
        if (user) {
            const isMatchPswrd = await bcrypt.compare(password, user.password)
            if (user.isBlocked) {
                res.status(200).send({ message: 'Admin blocked your account', isBlocked: true })
            } else {
                if (!isMatchPswrd) {
                    res.status(200).send({ message: "Incorrect Password", noUser: false })
                } else {
                    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
                        expiresIn: '1d'
                    }) //the jwt.sign() will generate the token,the expiresIn is for destory the session
                    res.status(200).send({ message: "Login Successfull", success: true, data: token })
                }
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

export const adminList = async (req, res) => {
    try {
        const response = await adminModel.find()
        res.status(200).send({ success: true, data: response })
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: true })
    }
}

export const diaryList = async (req, res) => {
    try {
        const response = await diaryModel.find()
        res.status(200).send({ success: true, data: response })
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: true })
    }
}

export const diarybyId = async (req, res) => {
    try {
        const id = req.params.id
        const response = await diaryModel.findById(id)
        res.status(200).send({ success: true, data: response })
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: true })
    }
}

export const addDiary = async (req, res) => {
    try {
        const { note1, note2, note3, note4, note5, note6, note7, note8, note9, note10, note11, note12, note13, note14, note15, note16,
            note17, note18, note19, note20, note21, note22, note23, note24, note25, note26, note27, note28, note29, note30,
            note31, note32, note33, note34, note35, note36, note37 } = req.body

        const newDiary = new diaryModel({
            note1, note2, note3, note4, note5, note6, note7, note8, note9, note10, note11, note12, note13, note14, note15, note16,
            note17, note18, note19, note20, note21, note22, note23, note24, note25, note26, note27, note28, note29, note30,
            note31, note32, note33, note34, note35, note36, note37
        })
        await newDiary.save()
        res.status(200).send({ success: true, message: 'Day Diary added' })
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: true })
    }
}

export const editDiary = async (req, res) => {
    try {
        const id = req.params.id
        const { note1, note2, note3, note4, note5, note6, note7, note8, note9, note10, note11, note12, note13, note14, note15, note16,
            note17, note18, note19, note20, note21, note22, note23, note24, note25, note26, note27, note28, note29, note30,
            note31, note32, note33, note34, note35, note36, note37 } = req.body

        await diaryModel.findByIdAndUpdate(id, {
            $set: {
                note1, note2, note3, note4, note5, note6, note7, note8, note9, note10, note11, note12, note13, note14, note15, note16,
                note17, note18, note19, note20, note21, note22, note23, note24, note25, note26, note27, note28, note29, note30,
                note31, note32, note33, note34, note35, note36, note37
            }
        })
        const updatedDiary = await diaryModel.findById(id)
        res.status(200).send({ success: true, message: 'Diary Updated', data: updatedDiary })
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: true })
    }
}

export const deleteDiary = async (req, res) => {
    try {
        const id = req.params.id
        await diaryModel.deleteOne({ _id: id })
        res.status(200).send({ success: true, message: 'Diary deleted' })
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: true })
    }
}