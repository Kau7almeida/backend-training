import { neon } from "@neondatabase/serverless";

const sql = neon('postgresql://neondb_owner:npg_4ZvPYWcslix7@ep-hidden-butterfly-a8q3skzg-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require')

const authRepositoryUsers = {

    // SELECT
    async getAllUsers() {
        try {
            return await sql`SELECT * FROM users`
        } catch (e) {
            console.error(e)
        }
    },

    async getPasswordById(id) {
        try {
            return await sql`SELECT password FROM users WHERE id = ${id}`;
        } catch (e) {
            console.error(e)
        }
    },

    async getUserById(id) {
        try {
            return await sql`SELECT * FROM users WHERE id = ${id}`;
        } catch (e) {
            console.error(e)
        }
    },

    // INSERT
    async createUser(id, first_name, last_name, email, password, cpf, username) {
        try {
            return await sql`INSERT INTO users(id, first_name, last_name, email, password, cpf, username)
            VALUES (${id}, ${first_name}, ${last_name}, ${email}, ${password}, ${cpf}, ${username})`
        } catch (e) {
            console.error(e)
        }
    },

    // UPDATE
    async updateUser(id, first_name, last_name, email, password, cpf, username) {
        try {
            return await sql`UPDATE users
                SET first_name = ${first_name},
                    last_name = ${last_name},
                    email = ${email},
                    password = ${password},
                    cpf = ${cpf},
                    username = ${username},
                    updated_at = CURRENT_TIMESTAMP
                WHERE id = ${id}`
        } catch (e) {
            console.error(e)
        }
    },

    // DELETE
    async deleteUser(id){
        try{
            return await sql`DELETE FROM users WHERE id = ${id}`
        }catch(e){
            console.error(e)
        }
    }

}

export default authRepositoryUsers