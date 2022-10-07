import express from "express"

//sempre deve vir antes do database para executar na ordem certa.
import "dotenv/config"
import { startDatabase } from "../src/database/index.js"

import categorieRouter from "../src/Routes/categories.routes.js"
import productsRouter from "./Routes/products.routes.js"

const app = express()

app.use(express.json())

app.use('/categories', categorieRouter)
app.use('/products',productsRouter)


export default app.listen(3001, () => {
  console.log("Server running");
  startDatabase();
});
