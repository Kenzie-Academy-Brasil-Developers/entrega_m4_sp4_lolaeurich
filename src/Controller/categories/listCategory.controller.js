import listCategoryService from "../../Services/categories/listCategory.service.js"

const listCategoryController = async (request, response) => {

    try {

        const allCategories = await listCategoryService()

        return response
            .json(allCategories)

    } catch (err) {

        return response
            .status(400)
            .json({message: err.message})
    }
}

export default listCategoryController