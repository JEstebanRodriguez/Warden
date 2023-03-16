import { Router } from 'express'
import { UserController } from '../controllers/index.js'
const router = Router()

router.get('/', UserController.getAllUsers)
router.get('/:_id', UserController.getUserById)
router.post('/new', UserController.createUser)
router.put('/update/:_id', UserController.updateUserById)
router.delete('/delete/:_id', UserController.deleteUserById)

export default router