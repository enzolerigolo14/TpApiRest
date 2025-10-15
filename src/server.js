import http from  'http'
import { getEnvironmentData } from 'worker_threads'

const PORT = process.env.PORT
const server = http.createServer((req,res) => {
    res.end('yo les ptit loup !')
})

server.listen(PORT || 3000, () => {
    console.log(`serveur running on http://localhost: ${PORT}`)
}) 
