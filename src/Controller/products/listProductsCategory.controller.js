import listByCategoryProductService from "../../Services/products/listProductsCategory.service.js"

const listByCategoryProductsController = async (request, response) => {

  const {category_id} = request.params

  try {

    const myProductsList = await listByCategoryProductService({category_id})

    return response
      .status(200)
      .json(myProductsList)

  } catch (err) {

    return response
      .status(400)
      .json({status: "Error", message: err.message})
  }
}

export default listByCategoryProductsController