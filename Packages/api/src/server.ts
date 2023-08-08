import Express, { Router } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mainRouter from './routers/login'
dotenv.config()

const server = Express()
//configs
server.use(cors())
server.use(Express.urlencoded({ extended: true }));

//routers
server.use(mainRouter)

server.listen(process.env.PORT1 || 1000)
