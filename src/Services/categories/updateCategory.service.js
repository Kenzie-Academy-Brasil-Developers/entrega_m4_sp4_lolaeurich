import database from "../../database/index.js"

const updateCategoryService = async (categoryId, categoryData) => {

    try {

        const response = await database.query(`UPDATE categories SET name = $1 WHERE id = $2 RETURNING *;`,
            [categoryData, categoryId]
        )

        //ROWCOUNT: É o número de linhas a serem processadas antes de interromper a consulta específica.
        if(response.rowCount === 0) {

            throw new Error('Category not found')

        }

        return {message: 'Category updated', category: response.rows[0]}

    } catch (err) {

        throw new Error(err)
        
    }
}

export default updateCategoryService