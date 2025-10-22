import { writeFile} from 'fs/promises'
import readTodos from '../utils/readTodos.js'
import { randomUUID } from 'crypto'


export const createTodo = async(req,res) => {

    try {
        const { text,completed = false } = req.body

        if(!text.trim() || typeof completed !== 'boolean'){
            return res.status(400).send({
                error: 'Invalid body',
            })
        }

        const todos = await readTodos()


        todos.push({
            id : randomUUID,
            text : text.trim(),
            completed
        })

        await writeFile('exercice1/todos.json',JSON.stringify(todos))
        res.status(201).send({
            message: 'todo created'
        })
    } catch (error) {
        console.error(error)
        res.status(500).send({
            error : 'Internal server error'
        })
     
    }
}