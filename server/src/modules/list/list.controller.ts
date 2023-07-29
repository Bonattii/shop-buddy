import { FastifyReply, FastifyRequest } from 'fastify'

import { CreateListInput, DeleteListInput, UpdateListInput } from './list.schema'
import { createList, deleteList, getLists, updateList } from './list.service'

export async function createListHandler(
  request: FastifyRequest<{
    Body: CreateListInput
  }>
) {
  const { otherUserIDs, title } = request.body
  const userIDs = [request.user.id, ...(otherUserIDs || [])]

  const list = await createList(title, userIDs)

  return list
}

export async function updateListHandler(request: FastifyRequest<{ Body: UpdateListInput }>) {
  const { id, otherUserIDs, title } = request.body
  const userIDs = [request.user.id, ...(otherUserIDs || [])]

  const list = await updateList(title, id, userIDs)

  return list
}

export async function deleteListHandler(
  request: FastifyRequest<{ Body: DeleteListInput }>,
  reply: FastifyReply
) {
  try {
    await deleteList(request.body.id)
    return reply.code(200).send('Deleted!')
  } catch (error) {
    return reply.code(500).send(error)
  }
}

export async function getListsHandler(request: FastifyRequest) {
  const lists = await getLists(request.user.id)

  return lists
}
