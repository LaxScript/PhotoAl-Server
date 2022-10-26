
import { Express, Request, Response, NextFunction } from 'express'
module.exports = (app: Express) => {
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origun', 'http://localhost:5173')
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, token')
    res.setHeader('Access-Control-Allow-Credentials', 'true')

    next()
  })
  return
}
