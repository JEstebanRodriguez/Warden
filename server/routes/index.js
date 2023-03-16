import { Router } from 'express'
import UserRouter from './UserRouter.js'
const router = Router()

router.use('/users', UserRouter)

export default router