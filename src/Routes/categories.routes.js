import { Router } from "express" 

import createCategoriesController from "../Controller/categories/createCategory.controller.js"
import deleteCategorieController from "../Controller/categories/deleteCategory.controller.js"
import listCategorieController from "../Controller/categories/listCategory.controller.js"
import retrieveCategorieController from "../Controller/categories/retrieveCategory.controller.js"
import updateCategorieController from "../Controller/categories/updateCategory.controller.js"

const categorieRouter = Router()

categorieRouter.post('', createCategoriesController)
categorieRouter.get('', listCategorieController)
categorieRouter.get('/:id', retrieveCategorieController)
categorieRouter.patch('/:id', updateCategorieController)
categorieRouter.delete('/:id',deleteCategorieController)

export default categorieRouter