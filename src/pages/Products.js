import ProductPageBuilder from "../components/ProdcutPageBuilder"
import {Col, Row } from 'reactstrap';

import {useSelector} from "react-redux"





 const Products = () => { 
  
  const print = useSelector(state => state)
  const color = print.inventory.inventoryArray
    
    //const [inventoryObj , setInventoryObj] = useState([]);
    //const categoryArray = ["lRL8hqWo", "strategy", "CardGames", "diceGames", "partyGames"];
   
 console.log(print)


  
    
return(<>
     
        <h1 className=" text-center  p-5" style={{marginTop: "200px"}}> Games</h1>
       
        <Row className="mt-5 col-10 mx-auto">
            {color.map((x) => {
             return(<Col className="col-12 mt-4 col-md-4">
                 <ProductPageBuilder key={x.name}   name={x} >
                     </ProductPageBuilder>
                 </Col>
            )})
                     }
         </Row>   
      
       
        </>

    )

                    
                    } 
    export default Products     


