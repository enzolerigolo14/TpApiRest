import { Router } from 'express'

import { getAllUsers , createQuestion,deleteQuestion} from '../controllers/questionsController.js'

const router = Router()

router.get('/', getAllUsers )
router.post('/', createQuestion)

router.delete('/:id',deleteQuestion)


export default router 