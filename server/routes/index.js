import { Router } from 'express'
import UserRouter from './UserRouter.js'
import AuthRouter from './AuthRouter.js'
import EventRouter from './EventRouter.js'
const router = Router()

router.use('/auth', AuthRouter)
router.use('/users', UserRouter)
router.use('/events', EventRouter)

export default router