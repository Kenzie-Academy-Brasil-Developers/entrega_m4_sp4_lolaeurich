import deleteCategoryService from "../../Services/categories/deleteCategory.service.js"

const deleteCategoryController = async (request, response) => {

    try {

        const id = request.params.id

        await deleteCategoryService(id)

        return response
            .status(204)
            .send()

    } catch (err) {

        return response
            .status(400)
            .json({message: err.message})
    }
}

export default deleteCategoryController