import { z } from 'zod'
import { buildJsonSchemas } from 'fastify-zod'

const listItemInput = {
  itemName: z.string(),
  isBought: z.boolean(),
}

const listItemGenerated = {
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
}

const createListItemSchema = z.object({
  ...listItemInput,
})

const updateListItemSchema = z.object({
  ...listItemInput,
  id: z.string(),
})

const deleteListItemSchema = z.object({
  id: z.string(),
})

const listItemResponseSchema = z.object({
  ...listItemInput,
  ...listItemGenerated,
})

const listItemsResponseSchema = z.array(listItemResponseSchema)

export type CreateListItemInput = z.infer<typeof createListItemSchema>
export type UpdateListItemInput = z.infer<typeof updateListItemSchema>
export type DeleteListItemInput = z.infer<typeof deleteListItemSchema>

export const { schemas: listItemSchemas, $ref } = buildJsonSchemas(
  {
    createListItemSchema,
    updateListItemSchema,
    deleteListItemSchema,
    listItemResponseSchema,
    listItemsResponseSchema,
  },
  {
    $id: 'ListItemSchema',
  }
)
