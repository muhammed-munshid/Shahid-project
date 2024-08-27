import express from 'express'
import { addDiary, addStaff, adminLogin, adminSignUp, chats, diaryList, editStaff, getChat, staffbyId, staffList, staffLogin, staffSignUp } from '../controllers/userController.js'
import userAuth from '../middleware/userAuth.js'
const router = express.Router()

//Admin Route
router.get('/get-staff', staffList)
router.get('/get-staff-by-id/:id', staffbyId)
router.get('/each-chat/:id', getChat)
router.post('/login', adminLogin)
router.post('/signUp', adminSignUp)
router.post('/add-staff', addStaff)
router.put('/edit-staff/:id', editStaff)

//Staff Route
router.get('/get-diary', diaryList)
router.post('/staff-login', staffLogin)
router.post('/staff-signUp', staffSignUp)
router.post('/add-diary', addDiary)


//Both Route
router.post('/chat', userAuth, chats);

export default router