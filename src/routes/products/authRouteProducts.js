import authControllerProducts from "../../controllers/products/authControllerProducts.js"

export default async function authRouteProducts(fastify) {

    fastify.get('/getAllProducts', async (request, reply) => {
        return authControllerProducts.getAllProducts()
    })

    fastify.post('/createProduct', async (request, reply) => {
        return authControllerProducts.createProduct(request)
    })

    fastify.put('/updateProduct/:id', async (request, reply) => {
        return authControllerProducts.updateProduct(request)
    })

    fastify.delete('/deleteProduct/:id', async (request, reply) => {
        return authControllerProducts.deleteProduct(request)
    })
    
}