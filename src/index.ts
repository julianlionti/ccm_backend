import {configureDb} from './server/db'
import {createServer} from './server/express'

createServer()
configureDb()
