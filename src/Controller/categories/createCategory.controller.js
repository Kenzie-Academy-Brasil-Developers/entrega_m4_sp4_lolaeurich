import createCategoryService from "../../Services/categories/createCategory.service.js"

const createCategoryController = async (request, response) => {

    try {

        const {name} = request.body

        const newCategory = await createCategoryService(name)

        return response
            .status(201)
            .json(newCategory)

    } catch (err) {

        return response
            .status(400)
            .json({message: err.message})
    }
}

export default createCategoryController