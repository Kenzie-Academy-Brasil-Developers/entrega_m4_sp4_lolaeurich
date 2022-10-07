import database from "../../database/index.js"

const updateProductService = async (productId, productData) => {

    try {

        if(productData.id) {
            
            delete productData['id']
        }

        let myNewQuery = 'UPDATE products SET '
        
        const keys = Object.keys(productData)
        const values = Object.values(productData)

        keys.forEach((key, index) => {myNewQuery += `${key} = \$${index+=1}, `})

        myNewQuery = myNewQuery.slice(0, -2)

        myNewQuery += `WHERE id = \$${keys.length+=1} RETURNING *`

        const response = await database.query(myNewQuery,
            [...values, productId]
        )

        //ROWCOUNT: É o número de linhas a serem processadas antes de interromper a consulta específica.
        if(response.rowCount === 0) {

            throw new Error('Product not found')
        }

        return {message: "Product updated", product: response.rows[0]}

    } catch (err) {

        throw new Error(err)
        
    }
}

export default updateProductService