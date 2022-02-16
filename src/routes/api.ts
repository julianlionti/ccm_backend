import express, {NextFunction, Request, Response, Router} from 'express'
import {ApiError, configureRoute} from 'mc-helpers'
import {StoreErrors} from '../errors/Store.errors'
import {StoreService} from '../services/Store'

export default () => {
  const router = Router()

  const storeRoute = configureRoute({
    api: StoreService,
    errors: {post: [StoreErrors.NoName]},
  })
  router.use('/store', storeRoute)

  return router
}
