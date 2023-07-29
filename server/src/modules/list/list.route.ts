import { FastifyInstance } from 'fastify'

import {
  createListHandler,
  deleteListHandler,
  getListsHandler,
  updateListHandler,
} from './list.controller'
import { $ref } from './list.schema'

export async function listRoutes(fastify: FastifyInstance) {
  fastify.post(
    '/create',
    {
      preHandler: [fastify.authenticate],
      schema: {
        body: $ref('createListSchema'),
        response: {
          201: $ref('listResponseSchema'),
        },
      },
    },
    createListHandler
  )

  fastify.put(
    '/update',
    {
      preHandler: [fastify.authenticate],
      schema: {
        body: $ref('updateListSchema'),
        response: {
          201: $ref('listResponseSchema'),
        },
      },
    },
    updateListHandler
  )

  fastify.delete(
    '/delete',
    {
      preHandler: [fastify.authenticate],
      schema: {
        body: $ref('deleteListSchema'),
        response: {
          201: $ref('listResponseSchema'),
        },
      },
    },
    deleteListHandler
  )

  fastify.get(
    '/',
    {
      preHandler: [fastify.authenticate],
      schema: {
        response: {
          201: $ref('listsResponseSchema'),
        },
      },
    },
    getListsHandler
  )
}
