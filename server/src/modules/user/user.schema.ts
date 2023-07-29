import { z } from 'zod'
import { buildJsonSchemas } from 'fastify-zod'

// Basic user schema
const userCore = {
  email: z
    .string({ required_error: 'Email is required', invalid_type_error: 'Email must be a string' })
    .email(),
  name: z.string(),
  phone: z.number(),
}

// Schema for creating a new user
const createUserSchema = z.object({
  ...userCore,
  password: z.string({
    required_error: 'Password is required',
    invalid_type_error: 'Password must be a string',
  }),
})

// Route response for creating a new user
const createUserResponseSchema = z.object({
  id: z.string(),
  ...userCore,
})

// Schema for updating a new user
const updateUserSchema = z.object({
  ...userCore,
})

// Route response for udpdating a new user
const updateUserResponseSchema = z.object({
  accessToken: z.string(),
})

// Schema for validating the data sent on the login route
const loginSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
      invalid_type_error: 'Email must be a string',
    })
    .email(),
  password: z.string({
    required_error: 'Password is required',
    invalid_type_error: 'Password must be a string',
  }),
})

// Route response for login
const loginResponseSchema = z.object({
  accessToken: z.string(),
})

// Types to be used on the user service
export type CreateUserInput = z.infer<typeof createUserSchema>
export type LoginInput = z.infer<typeof loginSchema>
export type UpdateUserInput = z.infer<typeof updateUserSchema>

// Export the schemas and enable to use them by $ref
export const { schemas: userSchemas, $ref } = buildJsonSchemas(
  {
    createUserSchema,
    createUserResponseSchema,
    loginSchema,
    loginResponseSchema,
    updateUserSchema,
    updateUserResponseSchema,
  },
  { $id: 'UserSchema' }
)
