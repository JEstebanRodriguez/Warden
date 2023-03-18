import { Router } from 'express'
import { EventController } from '../controllers/index.js'
import { TicketController } from '../controllers/index.js'
const router = Router()

router.get('/all', EventController.getAllEvents)
router.get('/:_id', EventController.getEventById)
router.post('/add', EventController.createEvent)
router.put('/update/:_id', EventController.updateEventById)
router.delete('/delete/:_id', EventController.deleteEventById)
// Ruta para obtener los tickets de un evento específico
router.get('/:id/tickets', EventController.getTicketsByEventId);

// Ruta para crear tickets
router.post('/tickets/add', TicketController.createTicket)
export default router