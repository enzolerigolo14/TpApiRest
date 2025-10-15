/*import http from  'http'
import { getEnvironmentData } from 'worker_threads'

const PORT = process.env.PORT || 3000
const server = http.createServer((req,res) => {
    res.end('yo les ptit fou !')
})

server.listen(PORT, () => {
    console.log(`serveur running on http://localhost:${PORT}`)
}) 
*/

import express from 'express'

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())

app.get('/questions', (req,res) => {
    res.status(200).send([
        {
            id:"1",
            question:"Allez body count",
            answer:"15",
        },
    ])
})

app.post('/questions', (req,res) => {
    const { question, answer } = req.body
    
    if(!question || !answer){
        return res(400).send({error: 'Question and answer requiered'})
    }

    res.status(201).send({message: 'bien joué ma reine'})
})

app.listen(PORT, () =>  {
    console.log(`Server running on http://localhost:${PORT}`)
})