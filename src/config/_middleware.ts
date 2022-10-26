
import { Express, Request, Response, NextFunction } from 'express'

module.exports = (app: Express) => {
  app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`URL: ${req.url} METHOD: ${req.method}`)
    next()
  })
  return
}
