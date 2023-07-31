import { FastifyReply, FastifyRequest } from 'fastify'

import {
  CreateListItemInput,
  UpdateListItemInput,
  DeleteListItemInput,
  GetListItemsInput,
} from './listItem.schema'
import { createListItem, updateListItem, deleteListItem, getListItems } from './listItem.service'

export async function createListItemHandler(
  request: FastifyRequest<{
    Body: CreateListItemInput
  }>
) {
  const listItem = await createListItem(request.body)

  return listItem
}

export async function updateListItemHandler(
  request: FastifyRequest<{ Body: UpdateListItemInput }>
) {
  const listItem = await updateListItem(request.body)

  return listItem
}

export async function deleteListItemHandler(
  request: FastifyRequest<{ Body: DeleteListItemInput }>,
  reply: FastifyReply
) {
  try {
    await deleteListItem(request.body.id)
    return reply.code(200).send('Deleted!')
  } catch (error) {
    return reply.code(500).send(error)
  }
}

export async function getListItemsHandler(request: FastifyRequest<{ Body: GetListItemsInput }>) {
  const listItems = await getListItems(request.body.listId)

  return listItems
}
