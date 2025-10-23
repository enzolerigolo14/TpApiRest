import { Router } from 'express'

import { getAllUsers , createQuestion,deleteQuestion} from '../controllers/questionsController.js'
import logger from '../middleware/logger.js'
import { validateBody, validateParams } from '../middleware/validation.js'
import { createQuestionSchema, questionIdSchema } from '../models/question.js'

const router = Router()

router.get('/', getAllUsers )
router.post('/',validateBody(createQuestionSchema), createQuestion)
router.delete('/:id',validateParams(questionIdSchema),deleteQuestion)


export default router 