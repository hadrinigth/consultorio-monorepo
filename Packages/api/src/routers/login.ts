import { Router } from 'express'
import * as loginController from '../controllers/login'

const router = Router()

router.get('/', loginController.ping)

export default router
