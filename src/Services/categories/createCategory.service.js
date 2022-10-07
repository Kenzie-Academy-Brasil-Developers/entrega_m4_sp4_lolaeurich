import database from "../../database/index.js"

const createCategoryService = async (name) => {

    try {

        const response = await database.query(`INSERT INTO categories(name) VALUES($1) RETURNING *`,
            [name]
        )

        return {message: 'Category created', category: response.rows[0]}

    } catch (err) {

        throw new Error(err)

    }
}

export default createCategoryService