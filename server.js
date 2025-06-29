import Fastify from 'fastify'
import cors from '@fastify/cors'

import authRouteProducts from './src/routes/products/authRouteProducts.js'

const fastify = Fastify({
  logger: true
})

await fastify.register(cors, {
  origin: '*',
  methods: '*'
})

await fastify.register(authRouteProducts)

try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}