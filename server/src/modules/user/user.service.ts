import bcrypt from 'bcrypt'

import { CreateUserInput } from './user.schema'
import { prisma } from '../../utils/prisma'

// Create a salt and hash and create a user with it
export async function createUser(input: CreateUserInput) {
  const { password, ...rest } = input

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await prisma.user.create({
    data: {
      ...rest,
      salt,
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
