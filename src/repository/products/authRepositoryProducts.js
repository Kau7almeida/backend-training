import { neon } from "@neondatabase/serverless";

const sql = neon('postgresql://neondb_owner:npg_4ZvPYWcslix7@ep-hidden-butterfly-a8q3skzg-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require')

const authRepositoryProducts = {

    async getAllProducts(){
        return await sql`SELECT * FROM products`
    },

    async createProduct(id, name, description, price){
        return await sql`INSERT INTO products(id, name, description, price)
        VALUES(${id}, ${name}, ${description}, ${price})`
    },

    async updateProduct(id, name, description, price){
        return await sql`UPDATE products SET name = ${name}, description = ${description}, price = ${price} WHERE id = ${id}`
    },

    async deleteProduct(id){
        return await sql`DELETE FROM products WHERE id = ${id}`
    }

}

export default authRepositoryProducts