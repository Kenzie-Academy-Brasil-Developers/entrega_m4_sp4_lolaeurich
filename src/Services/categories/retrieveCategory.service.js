import database from "../../database/index.js"

const retrieveCategoryService = async (categoryId) => {

    try {

        const response = await database.query(`SELECT * FROM categories WHERE id = $1;`,
            [categoryId]
        )

        //ROWCOUNT: é o número de linhas a serem processadas antes de interromper a consulta específica.
        if(response.rowCount === 0) {

            throw new Error('Category not found')

        }

        return response.rows[0]

    } catch (err) {

        throw new Error(err)
        
    }
}

export default retrieveCategoryService