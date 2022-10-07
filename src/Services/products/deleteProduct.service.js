import database from "../../database/index.js"

const deleteProductService = async (productId) => {

    try {

        const response = await database.query(`DELETE FROM products WHERE id = $1 RETURNING *`,
            [productId]
        )

        //ROWCOUNT: É o número de linhas a serem processadas antes de interromper a consulta específica.
        if(response.rowCount === 0) {

            throw new Error('Product not found')

        }

        return response.rows[0]

    } catch (err) {

        throw new Error(err)
        
    }
}

export default deleteProductService