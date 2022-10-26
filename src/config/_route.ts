
import { Express, Request, Response, NextFunction } from 'express'


module.exports = (app: Express) => {

  app.use((req: Request, res: Response) => {
    error: 'Not found'
  })
}
