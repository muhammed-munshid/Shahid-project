import express from 'express'
import { adminLogin, adminSignUp, chats, staffLogin, staffSignUp } from '../controllers/userController.js'
import userAuth from '../middleware/userAuth.js'
const router = express.Router()

//Admin Route
router.post('/login', adminLogin)
router.post('/signUp', adminSignUp)
router.post('/chat', userAuth, chats);

//Staff Route
router.post('/staff-login', staffLogin)
router.post('/staff-signUp', staffSignUp)

export default router