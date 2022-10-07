import database from "../../database/index.js"

const retrieveProductService = async (productId) => {

    try {

        const response = await database.query(`SELECT * FROM products WHERE id = $1`,
            [productId]
        )

        if(response.rowCount === 0) {

            throw new Error('Product not found')
        }

        return response.rows[0]

    } catch (err) {

        throw new Error(err)
        
    }
}

export default retrieveProductService