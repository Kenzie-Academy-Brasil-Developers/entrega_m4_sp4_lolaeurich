import updateProductService from "../../Services/products/updateProduct.service.js"

const updateProductController = async (request, response) => {

    try {

        const id = request.params.id

        const myProductData = request.body

        const myProduct = await updateProductService(id, myProductData)

        return response
            .json(myProduct)

    } catch (err) {

        return response
            .status(400)
            .json({message: err.message})
    }
}

export default updateProductController