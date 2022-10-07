import listProductService from "../../Services/products/listProduct.service.js"

const listProductController = async (request, response) => {

    try {

        const myProducts = await listProductService()

        return response
            .json(myProducts)

    } catch (err) {

        return response
            .status(400)
            .json({message: err.message})
    }
}

export default listProductController