import database from "../../database/index.js"

const deleteCategoryService = async (categoryId) => {

    try {

        const response = await database.query(`DELETE FROM categories WHERE id = $1 RETURNING *;`,
            [categoryId]
        )

        //ROWCOUNT: É o número de linhas a serem processadas antes de interromper a consulta específica.
        if(response.rowCount === 0) {

            throw new Error('Category not found')

        }

        return response.rows[0]

    } catch (err) {

        throw new Error(err)
        
    }
}

export default deleteCategoryService