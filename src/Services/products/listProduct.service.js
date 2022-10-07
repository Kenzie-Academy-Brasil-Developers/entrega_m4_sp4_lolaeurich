import database from "../../database/index.js"

const listProductService = async () => {

    try {

        const response = await database.query(`SELECT * FROM products;`,
            []
        )

        return response.rows

    } catch (err) {

        throw new Error(err)
        
    }
}

export default listProductService