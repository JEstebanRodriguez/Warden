import { Router } from 'express'
import { AuthController } from '../controllers/index.js'
const router = Router()

router.post('/login', AuthController.login)
router.post('/client-login', AuthController.clientLogin)

export default router
