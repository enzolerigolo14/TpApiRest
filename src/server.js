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

import questionsRouteur from './routers/questionsRouter.js'
import usersRouter from './routers/usersRouter.js'

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())


app.use('/questions', questionsRouteur)
app.use('/users', usersRouter)

app.listen(PORT, () =>  {
    console.log(`Server running on http://localhost:${PORT}`)
})