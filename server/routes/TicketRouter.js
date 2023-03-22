import { Router } from 'express'
import { TicketController } from '../controllers/index.js'
const router = Router()

router.post('/add', TicketController.createTicket)

export default router