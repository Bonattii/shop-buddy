import bcrypt from 'bcrypt'

import { CreateUserInput, UpdateUserInput } from './user.schema'
import { prisma } from '../../utils/prisma'

// Create a salt and hash and create a user with it
export async function createUser(input: CreateUserInput) {
  const { password, ...rest } = input

  const hash = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
    data: {
      ...rest,
      password: hash,
    },
  })

  return user
}

// Found a user by their email
export async function findUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email,
    },
  })
}

export async function updateUser(input: UpdateUserInput) {
  const { email, ...rest } = input

  const updatedUser = await prisma.user.update({
    where: {
      email,
    },
    data: rest,
  })

  return updatedUser
}

export async function getUsers() {
  return prisma.user.findMany({
    select: {
      id: true,
      name: true,
    },
  })
}
