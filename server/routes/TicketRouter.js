import { Router } from 'express'
import { TicketController } from '../controllers/index.js'
const router = Router()

router.post('/add', TicketController.createTicket)
// router.get('/get', TicketController.getTicketState)
router.put('/use', TicketController.useTicket)

export default router