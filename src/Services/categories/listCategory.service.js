import database from "../../database/index.js"

const listCategoryService = async () => {

    try {

        const response = await database.query(`SELECT * FROM categories;`,
            []
        )

        return response.rows

    } catch (err) {

        throw new Error(err)
        
    }
}

export default listCategoryService