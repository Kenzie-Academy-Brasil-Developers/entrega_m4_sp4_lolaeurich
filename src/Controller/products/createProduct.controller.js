import createProductService from "../../Services/products/createProduct.service.js"

const createProductController = async (request, response) => {

    try {

        const {name, price, category_id} = request.body

        const myNewProduct = await createProductService(name, price, category_id)

        return response
            .status(201)
            .json(myNewProduct)

    } catch (err) {

        return response
            .status(400)
            .json({message: err.message})
    }
}

export default createProductController