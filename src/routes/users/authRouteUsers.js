import authControllerUsers from "../../controllers/users/authControllerUsers.js"

export default async function authRouteUsers(fastify){

    fastify.get('/getAllUsers', async (request, reply) => {
        return await authControllerUsers.getAllUsers()
    })

    fastify.post('/createUser', async (request, reply) => {
        return await authControllerUsers.createUser(request)
    })

    fastify.put('/updateUser/:id', async (request, reply) => {
        return await authControllerUsers.updateUser(request)
    })

    fastify.delete('/deleteUser/:id', async (request, reply) => {
        return await authControllerUsers.deleteUser(request)
    })

}