import { Router } from "express" 

import createProductController from "../Controller/products/createProduct.controller.js"
import deleteProductController from "../Controller/products/deleteProduct.controller.js"
import listProductsController from "../Controller/products/listProduct.controller.js"
import listByCategoryProductsController from "../Controller/products/listProductsCategory.controller.js"
import retrieveProductController from "../Controller/products/retrieveProduct.controller.js"
import updateProductController from "../Controller/products/updateProduct.controller.js"


const productsRouter = Router()

productsRouter.post('', createProductController)
productsRouter.get('', listProductsController)
productsRouter.get('/:id', retrieveProductController)
productsRouter.patch('/:id', updateProductController)
productsRouter.delete('/:id', deleteProductController)
productsRouter.get('/category/:category_id',listByCategoryProductsController)


export default productsRouter