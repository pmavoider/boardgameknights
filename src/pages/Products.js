import { useEffect, useState } from "react"
import ProductPageBuilder from "../components/ProdcutPageBuilder"
import {Col, Row} from "reactstrap"

const Products = ({catagory}) => { 
    const [inventoryObj , setInventoryObj] = useState([])

   
   if(inventoryObj.length < 1){ 
fetch("https://api.boardgameatlas.com/api/search?list_id=lRL8hqWoID&client_id=JLBr5npPhV")
//fetch("https://api.boardgameatlas.com/api/lists?username=Pmavoider&client_id=JLBr5npPhV")
    .then((res) => res.json())
    .then((data) => setInventoryObj(data.games))
}
return(<>
        <h1> Make Family night fun Again</h1>
        <Row className="mt-5">
            {inventoryObj.map((x)=> {
             return(<Col className="col-12 mt-4 col-md-4">
                 <ProductPageBuilder   name={x} >
                     </ProductPageBuilder>
                 </Col>
            )})
                     }
         </Row>   
        </>

    )


}
export default Products;