import retrieveCategoryService from "../../Services/categories/retrieveCategory.service.js"

const retrieveCategoryController = async (request, response) => {

    try {

        const {id} = request.params

        const myCategory = await retrieveCategoryService(id)

        return response
            .json(myCategory)

    } catch (err) {

        return response
            .status(400)
            .json({message: err.message})
    }
}

export default retrieveCategoryController