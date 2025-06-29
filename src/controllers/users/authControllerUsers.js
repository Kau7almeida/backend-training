import { randomUUID } from 'node:crypto'
import bcrypt from 'bcrypt'

import authRepositoryUsers from "../../repository/users/authRepositoryUsers.js"

const authControllerUsers = {

    async getAllUsers(request, reply) {
        try {

            let response = await authRepositoryUsers.getAllUsers()

            if (response.length == 0) {
                return 'Nenhum usuário registrado'
            }

            return response

        } catch (e) {
            console.error(e)
        }
    },

    async createUser(request, reply) {
        try {
            const id = randomUUID()
            const { first_name, last_name, email, password, cpf, username } = request.body

            if (first_name === '' || last_name === '' || email === '' || password === '' || cpf === '' || username === '') {
                return { message: "Não deixe nenhum campo obrigatório vazio" };
            }

            const senhaCriptografada = await bcrypt.hash(password, 10)

            await authRepositoryUsers.createUser(id, first_name, last_name, email, senhaCriptografada, cpf, username)
            return { "message": "success" }

        } catch (e) {
            console.error(e)
        }
    },

    async updateUser(request, reply) {
        try {
            const { id } = request.params
            const { first_name, last_name, email, password, cpf, username } = request.body

            if (first_name === '' || last_name === '' || email === '' || password === '' || cpf === '' || username === '') {
                return { message: "Não deixe nenhum campo obrigatório vazio" };
            }

            let newPassword = password
            let result = await authRepositoryUsers.getPasswordById(id)
            let passwordDatabase = result[0].password

            if (!passwordDatabase) {
                return { message: "Usuário não encontrado" }
            }

            let endPassword

            let comparePassword = await bcrypt.compare(newPassword, passwordDatabase)

            if (comparePassword) {
                endPassword = passwordDatabase
            } else {
                endPassword = await bcrypt.hash(password, 10)
            }

            await authRepositoryUsers.updateUser(id, first_name, last_name, email, endPassword, cpf, username)

            return { "message": "success" }
        } catch (e) {
            console.error(e)
        }
    },

    async deleteUser(request, reply) {
        try {

            const { id } = request.params

            let userDatabase = await authRepositoryUsers.getUserById(id)

            if (userDatabase.length < 1) {
                return { message: "Usuário não encontrado" }
            }

            await authRepositoryUsers.deleteUser(id)

            return { "message": "success" }

        } catch (e) {
            console.error(e)
        }
    }

}

export default authControllerUsers