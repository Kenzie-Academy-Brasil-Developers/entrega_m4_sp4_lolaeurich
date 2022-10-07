import updateCategoryService from "../../Services/categories/updateCategory.service.js"

const updateCategoryController = async (request, response) => {

    try {

        const id = request.params.id

        const {name} = request.body

        const updatedACategory = await updateCategoryService(id, name)

        return response
            .json(updatedACategory)

    } catch (err) {

        return response
            .status(400)
            .json({message: err.message})
    }
}

export default updateCategoryController