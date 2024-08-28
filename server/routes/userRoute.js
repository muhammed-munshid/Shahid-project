import express from 'express'
import { addDiary, addStaff, adminList, adminLogin, adminSignUp, blockStaff, diaryList, editStaff, getChat, sendChat, staffbyId, staffList, staffLogin, staffSignUp } from '../controllers/userController.js'
import userAuth from '../middleware/userAuth.js'
const router = express.Router()

//Admin Route
router.get('/get-staff', staffList)
router.get('/get-staff-by-id/:id', staffbyId)
router.get('/each-chat/:id',userAuth, getChat)

router.post('/login', adminLogin)
router.post('/signUp', adminSignUp)
router.post('/add-staff', addStaff)
router.put('/edit-staff/:id', editStaff)
router.post('/block-staff/:id', blockStaff)

//Staff Route
router.get('/get-diary', diaryList)
router.get('/get-admin', adminList)

router.post('/staff-login', staffLogin)
router.post('/staff-signUp', staffSignUp)
router.post('/add-diary', addDiary)


//Both Route
router.post('/chat', userAuth, sendChat);

export default router