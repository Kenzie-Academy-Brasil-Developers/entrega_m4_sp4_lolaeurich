import database from "../../database/index.js"

const listByCategoryProductService = async ({category_id}) => {

    try{

        const response = await database.query("SELECT p.name,p.price,c.name category FROM products p JOIN categories c ON c.id= p.category_id WHERE c.id=$1",
            [category_id]
        )
        
        if(response.rows.length===0){
            
            throw "Product not found!"
        }

        return  response.rows

    }catch(err){
        
        throw new Error(err)
    
    }
}
export default listByCategoryProductService;