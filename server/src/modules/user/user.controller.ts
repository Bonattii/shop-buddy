import { FastifyReply, FastifyRequest } from 'fastify'
import bcrypt from 'bcrypt'
import { fastify } from '../../server'

import { CreateUserInput, LoginInput, UpdateUserInput } from './user.schema'
import { createUser, findUserByEmail, updateUser } from './user.service'

// Handler to create a new user
export async function registerUserHandler(
  request: FastifyRequest<{ Body: CreateUserInput }>,
  reply: FastifyReply
) {
  const body = request.body

  try {
    const user = await createUser(body)

    return reply.code(201).send(user)
  } catch (error) {
    console.log(error)
    return reply.code(500).send(error)
  }
}

// Handle user login
export async function loginUserHandler(
  request: FastifyRequest<{ Body: LoginInput }>,
  reply: FastifyReply
) {
  const body = request.body

  const user = await findUserByEmail(body.email)

  if (!user) {
    return reply.code(401).send({
      message: 'Invalid email or password',
    })
  }

  const correctPassword = await bcrypt.compare(body.password, user.password)

  if (correctPassword) {
    const { password, ...rest } = user

    return { accessToken: fastify.jwt.sign(rest) }
  }

  return reply.code(401).send({
    message: 'Invalid email or password',
  })
}

export async function updateUserHandler(
  request: FastifyRequest<{ Body: UpdateUserInput }>,
  reply: FastifyReply
) {
  const body = request.body

  const user = await findUserByEmail(body.email)

  if (!user) {
    return reply.code(404).send({
      message: 'User not found',
    })
  }

  try {
    const updatedUser = await updateUser(body)

    const { password, ...rest } = updatedUser
    const token = fastify.jwt.sign(rest)

    return reply.code(201).send({
      accessToken: token,
    })
  } catch (error) {
    console.log(error)
    return reply.code(500).send(error)
  }
}
