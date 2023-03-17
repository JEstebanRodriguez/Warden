import { Router } from 'express'
import UserRouter from './UserRouter.js'
import AuthRouter from './AuthRouter.js'
const router = Router()

router.use('/users', UserRouter)
router.use('/auth', AuthRouter)

export default router