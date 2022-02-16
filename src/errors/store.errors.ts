import {ValidationChain} from 'express-validator'
import {ErrorMessage, Errors} from 'mc-helpers'
import {ErrorCodes} from '.'

interface ErrorResponse {
  NoPage: ValidationChain
  NoName: ValidationChain
  Exists: ErrorMessage
}

export const StoreErrors = Errors.generateError<ErrorResponse>(ErrorCodes.Store, {
  NoPage: Errors.addCheck('page'),
  NoName: Errors.addBody('name'),
  Exists: Errors.addMessage('The store already existis'),
})
