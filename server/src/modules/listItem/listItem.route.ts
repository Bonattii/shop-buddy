import { FastifyInstance } from 'fastify'

import {
  createListItemHandler,
  deleteListItemHandler,
  getListItemsHandler,
  updateListItemHandler,
} from './listItem.controller'
import { $ref } from './listItem.schema'

export async function listItemRoutes(fastify: FastifyInstance) {
  fastify.post(
    '/create',
    {
      preHandler: [fastify.authenticate],
      schema: {
        body: $ref('createListItemSchema'),
        response: {
          201: $ref('listItemResponseSchema'),
        },
      },
    },
    createListItemHandler
  )

  fastify.put(
    '/update',
    {
      preHandler: [fastify.authenticate],
      schema: {
        body: $ref('updateListItemSchema'),
        response: {
          201: $ref('listItemResponseSchema'),
        },
      },
    },
    updateListItemHandler
  )

  fastify.delete(
    '/delete',
    {
      preHandler: [fastify.authenticate],
      schema: {
        body: $ref('deleteListItemSchema'),
        response: {
          201: $ref('listItemResponseSchema'),
        },
      },
    },
    deleteListItemHandler
  )

  fastify.get(
    '/',
    {
      preHandler: [fastify.authenticate],
      schema: {
        body: $ref('getListItemsSchema'),
        response: {
          201: $ref('listItemsResponseSchema'),
        },
      },
    },
    getListItemsHandler
  )
}
