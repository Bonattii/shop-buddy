import { FastifyInstance } from 'fastify'
import {
  loginUserHandler,
  registerUserHandler,
  updateUserHandler,
  getUsersHandler,
} from './user.controller'
import { $ref } from './user.schema'

// User routes to login and register
export async function userRoutes(fastify: FastifyInstance) {
  fastify.post(
    '/register',
    {
      schema: {
        body: $ref('createUserSchema'),
        response: {
          201: $ref('createUserResponseSchema'),
        },
      },
    },
    registerUserHandler
  )

  fastify.post(
    '/login',
    {
      schema: {
        body: $ref('loginSchema'),
        response: {
          200: $ref('loginResponseSchema'),
        },
      },
    },
    loginUserHandler
  )

  fastify.put(
    '/update',
    {
      preHandler: [fastify.authenticate],
      schema: {
        body: $ref('updateUserSchema'),
        response: { 201: $ref('updateUserResponseSchema') },
      },
    },
    updateUserHandler
  )

  fastify.get(
    '/',
    {
      preHandler: [fastify.authenticate],
      schema: {
        response: { 200: $ref('usersResponseSchema') },
      },
    },
    getUsersHandler
  )
}
