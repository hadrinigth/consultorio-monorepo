import Express, { Router } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mainRouter from './routers/login'
dotenv.config()

const server = Express()

server.use(cors())
server.use(mainRouter)

server.listen(process.env.PORT1 || 1000)
