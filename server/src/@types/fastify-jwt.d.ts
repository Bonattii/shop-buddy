import '@fastify/jwt'

declare module '@fastify/jwt' {
  interface FastifyJWT {
    user: {
      name: string
      email: string
      id: string
    }
  }
}
