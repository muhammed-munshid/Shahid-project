import express from 'express'
import { addDiary, adminLogin, adminSignUp, chats, diaryList, staffLogin, staffSignUp } from '../controllers/userController.js'
import userAuth from '../middleware/userAuth.js'
const router = express.Router()

//Admin Route
router.post('/login', adminLogin)
router.post('/signUp', adminSignUp)

//Staff Route
router.get('/get-diary', diaryList)
router.post('/staff-login', staffLogin)
router.post('/staff-signUp', staffSignUp)
router.post('/add-diary', addDiary)


//Both Route
router.post('/chat', userAuth, chats);

export default router