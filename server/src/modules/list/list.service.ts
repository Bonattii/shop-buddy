import { prisma } from '../../utils/prisma'
import { CreateListInput, UpdateListInput } from './list.schema'

export async function createList(data: CreateListInput & { userIDs: string[] }) {
  return await prisma.list.create({
    data,
  })
}

export async function updateList(data: UpdateListInput & { userIDs: string[] }) {
  return await prisma.list.update({
    data: {
      title: data.title,
    },
    where: {
      id: data.id,
    },
  })
}

export async function deleteList(id: string) {
  return await prisma.list.delete({
    where: {
      id,
    },
  })
}

export async function getLists(userID: string) {
  return await prisma.list.findMany({
    where: {
      userIDs: { has: userID },
    },
  })
}
