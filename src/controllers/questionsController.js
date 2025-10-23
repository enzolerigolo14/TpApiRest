import { db } from '../db/database.js'
import { questions } from '../db/schema.js'

export const  getAllUsers = async (req,res) => {
   try {
    const result =  await db.select().from(questions).orderBy('created_at','desc')

    res.status(200).json(result)
   } catch (error) {
    res.status(500).send({
        error: 'Failed to query questions',
    })
   }
}

export const createQuestion = (req,res) => {
    const { question, answer } = req.body
    
    if(!question || !answer){
        return res(400).send({error: 'Question and answer requiered'})
    }

    res.status(201).send({message: 'bien joué ma reine'})
}


export const deleteQuestion = (req,res) => {
    const { id } = req.params
    res.status(200).send({message: `Question ${id} deleted`})
}
