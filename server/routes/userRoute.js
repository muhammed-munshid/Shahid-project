import express from 'express'
import { userLogin, userSignUp } from '../controllers/userController.js'
const router = express.Router()

router.post('/', userLogin)
router.post('/signUp', userSignUp)

export default router