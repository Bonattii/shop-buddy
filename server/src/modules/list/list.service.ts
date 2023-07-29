import { prisma } from '../../utils/prisma'

export async function createList(title: string, userIDs: string[]) {
  const data = {
    title,
    userIDs,
  }

  return await prisma.list.create({
    data,
  })
}

export async function updateList(title: string, id: string, userIDs: string[]) {
  const data = {
    title,
    userIDs,
    id,
  }

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
