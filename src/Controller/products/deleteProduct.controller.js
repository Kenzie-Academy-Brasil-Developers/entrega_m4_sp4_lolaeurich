import deleteProductService from "../../Services/products/deleteProduct.service.js"

const deleteProductController = async (request, response) => {

    try {

        const id = request.params.id

        await deleteProductService(id)

        return response
            .status(204)
            .send()

    } catch (err) {

        return response
            .status(400)
            .json({message: err.message})
    }
}

export default deleteProductController