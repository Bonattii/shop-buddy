import Fastify, { FastifyReply, FastifyRequest } from 'fastify'
import jwt from '@fastify/jwt'
import cors from '@fastify/cors'
import { userSchemas } from './modules/user/user.schema'
import { userRoutes } from './modules/user/user.route'
import { listSchemas } from './modules/list/list.schema'
import { listRoutes } from './modules/list/list.route'

export const fastify = Fastify({ logger: true })

// Route to check if the server is working fine
fastify.get('/healthcheck', async () => {
  return { status: 'ok' }
})

// Make use of cors
fastify.register(cors)

// Register jwt into the server
fastify.register(jwt, {
  secret: process.env.SECRET!,
})

// Customize the core fastify object to have the authenticate
fastify.decorate('authenticate', async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    await request.jwtVerify()
  } catch (error) {
    return reply.send(error)
  }
})

const bootstrap = async () => {
  // Register the schemas
  for (const schema of [...userSchemas, ...listSchemas]) {
    fastify.addSchema(schema)
  }

  // Register the routes
  await fastify.register(userRoutes, { prefix: '/api/users' })
  await fastify.register(listRoutes, { prefix: '/api/lists' })

  await fastify.listen({
    port: (process.env.PORT as unknown as number) || 3333,
    host: '0.0.0.0',
  })
}

bootstrap()
