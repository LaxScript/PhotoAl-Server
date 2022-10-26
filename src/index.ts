import config from './config'
import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'

import { createServer } from 'http'

const app = express()
const httpServer = createServer(app)
const corsOptions = { origin: 'http://localhost:5173', credential: true }

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOptions))


require('./config/_cors')(app)
require('./config/_middleware')(app)
require('./config/_io')(httpServer)
require('./config/_route')(app)


mongoose
  .connect(`${config.database.url}`, config.database.options)
  .then(() => console.log('DATABASE connected'))

httpServer
  .listen(config.server.port, () => {
    console.log('Server is up')
  })



