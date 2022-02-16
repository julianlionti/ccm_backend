import express, {json} from 'express'
import cors from 'cors'
import Config from '../utils/Config'
import compression from 'compression'
import path from 'path'
import api from '../routes/api'

export const createServer = () => {
  const app = express()
  console.log(Config)
  app.listen(Config.PORT, () => {
    console.log(`${Config.NAME} andando en PUERTO ${Config.PORT}`)
  })

  app.use(cors())
  app.use(compression())
  app.use(json())
  app.use('/api', api())
  app.use(express.static(path.join(__dirname, '../cliente')))
  app.get('/*', (_, res) => {
    res.sendFile(path.join(__dirname, '../cliente/index.html'), (err) => {
      if (err) res.status(500).send(err)
    })
  })
}
