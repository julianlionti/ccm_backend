import Config from '../utils/Config'
import mongoose from 'mongoose'

export const configureDb = () => {
  const dbFinalName = `${Config.DB_NAME}-${Config.NODE_ENV.substring(0, 4).toUpperCase()}`
  const finalConnString = `${Config.MONGODB}${dbFinalName}`
  mongoose.connect(finalConnString, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })

  mongoose.connection.on('connected', () => {
    console.log(`Conectado a ${finalConnString}`)
  })
}
