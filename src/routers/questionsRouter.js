import { Router } from 'express'

import { getAllUsers , createQuestion,deleteQuestion} from '../controllers/questionsController.js'
import logger from '../middleware/logger.js'
import { validateBody } from '../middleware/validation.js'
import { createQuestionSchema } from '../models/question.js'

const router = Router()

router.get('/',logger, getAllUsers )
router.post('/',validateBody(createQuestionSchema), createQuestion)
router.delete('/:id',deleteQuestion)


export default router 