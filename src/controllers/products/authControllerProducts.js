import { randomUUID } from 'node:crypto'

import authRepositoryProducts from "../../repository/products/authRepositoryProducts.js"

const authControllerProducts = {

    async getAllProducts(request, reply) {
        return await authRepositoryProducts.getAllProducts()
    },

    async createProduct(request, reply) {
        const id = randomUUID()
        const { name, description, price } = request.body

        if (name == '' || description == '' || price == '') {
            return { "message": "Não deixe nenhum campo vazio" }
        }

        await authRepositoryProducts.createProduct(id, name, description, price)

        return { "message": "success" }
    },

    async updateProduct(request, reply) {
        const { id } = request.params
        const { name, description, price } = request.body

        if (id == '' || name == '' || description == '' || price == '') {
            return { "message": "Não deixe nenhum campo vazio" }
        }

        await authRepositoryProducts.updateProduct(id, name, description, price)
        return { "message": "success" }

    },

    async deleteProduct(request) {
        const { id } = request.params

        await authRepositoryProducts.deleteProduct(id)
        return { "message": "success" }
    }

}

export default authControllerProducts