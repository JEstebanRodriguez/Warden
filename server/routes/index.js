import { Router } from 'express'
import UserRouter from './UserRouter.js'
import AuthRouter from './AuthRouter.js'
import EventRouter from './EventRouter.js'
import TicketRouter from './TicketRouter.js'
const router = Router()

router.use('/auth', AuthRouter)
router.use('/users', UserRouter)
router.use('/events', EventRouter)
router.use('/tickets', TicketRouter)

export default router