import Fastify from 'fastify'
import cors from '@fastify/cors'

import authRouteUsers from './src/routes/users/authRouteUsers.js'
import authRouteProducts from './src/routes/products/authRouteProducts.js'

const fastify = Fastify({
  logger: true
})

await fastify.register(cors, {
  origin: '*',
  methods: '*'
})

await fastify.register(authRouteUsers, authRouteProducts)

try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}