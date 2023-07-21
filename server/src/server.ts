import Fastify from 'fastify'
import cors from '@fastify/cors'

export const fastify = Fastify({ logger: true })

// Route to check if the server is working fine
fastify.get('/healthcheck', async () => {
  return { status: 'ok' }
})

// Make use of cors
fastify.register(cors)

const bootstrap = async () => {
  await fastify.listen({
    port: (process.env.PORT as unknown as number) || 3333,
    host: '0.0.0.0',
  })
}

bootstrap()
