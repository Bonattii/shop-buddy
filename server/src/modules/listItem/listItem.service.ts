import { prisma } from '../../utils/prisma'
import { CreateListItemInput, UpdateListItemInput } from './listItem.schema'

export async function createListItem(data: CreateListItemInput & { listId: string }) {
  return await prisma.listItem.create({
    data,
  })
}

export async function updateListItem(data: UpdateListItemInput & { listId: string }) {
  return await prisma.listItem.update({
    data: {
      itemName: data.itemName,
      isBought: data.isBought,
    },
    where: {
      id: data.id,
    },
  })
}

export async function deleteListItem(id: string) {
  return await prisma.listItem.delete({
    where: {
      id,
    },
  })
}

export async function getListItems(listId: string) {
  return await prisma.listItem.findMany({
    where: {
      listId,
    },
  })
}
