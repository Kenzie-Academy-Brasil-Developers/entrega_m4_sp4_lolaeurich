import retrieveProductService from "../../Services/products/retrieveProduct.service.js"

const retrieveProductController = async (request, response) => {

    try {

        const {id} = request.params

        const myProduct = await retrieveProductService(id)

        return response
            .json(myProduct)

    } catch (err) {

        return response
            .status(400)
            .json({message: err.message})
    }
}

export default retrieveProductController