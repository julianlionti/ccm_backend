import dotenv from 'dotenv'
import {configureEnv} from 'mc-helpers'
dotenv.config()

type ENV_TYPE = 'development' | 'production' | 'test'
type EnvProps = {
  PORT: number
  NAME: string
  NODE_ENV: ENV_TYPE
  DB_NAME: string
  MONGODB: string
}

const proccesEnv = configureEnv<EnvProps>(
  'PORT',
  'NAME',
  'NODE_ENV',
  'DB_NAME',
  'MONGODB',
)
export default proccesEnv
