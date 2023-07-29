import { z } from 'zod'
import { buildJsonSchemas } from 'fastify-zod'

const listInput = {
  title: z.string(),
}

const listGenerated = {
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
}

const createListSchema = z.object({
  ...listInput,
})

const updateListSchema = z.object({
  ...listInput,
  id: z.string(),
})

const deleteListSchema = z.object({
  id: z.string(),
})

const listResponseSchema = z.object({
  ...listInput,
  ...listGenerated,
})

const listsResponseSchema = z.array(listResponseSchema)

export type CreateListInput = z.infer<typeof createListSchema>
export type UpdateListInput = z.infer<typeof updateListSchema>
export type DeleteListInput = z.infer<typeof deleteListSchema>

export const { schemas: listSchemas, $ref } = buildJsonSchemas(
  {
    createListSchema,
    updateListSchema,
    deleteListSchema,
    listResponseSchema,
    listsResponseSchema,
  },
  {
    $id: 'ListSchema',
  }
)
