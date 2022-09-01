import { useEffect, useState} from "react"
import ProductPageBuilder from "../components/ProdcutPageBuilder"
import {Col, Row,
   Button, Modal,
    ModalHeader, 
    ModalBody, ModalFooter } from 'reactstrap';
import Carousels from "../components/Carousel"
import { Carousel } from "bootstrap"
import {useSelector, useDispatch} from "react-redux"

import {useParams} from "react-router-dom"




 const Products = () => { 

  
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
    let product = useParams()
    const color = useSelector(state => state)
    //const [inventoryObj , setInventoryObj] = useState([]);
    const categoryArray = ["lRL8hqWo", "strategy", "CardGames", "diceGames", "partyGames"];
   
 console.log(color)


  
    
return(<>
     
        <h1 className=" text-center  p-5" style={{marginTop: "200px"}}> Games</h1>
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
        <Row className="mt-5 col-10 mx-auto">
            {color.inventory.inventoryArray.map((x, index) => {
             return(<Col className="col-12 mt-4 col-md-4">
                 <ProductPageBuilder key={index} setShow={toggle()}  name={x} >
                     </ProductPageBuilder>
                 </Col>
            )})
                     }
         </Row>   
      
       
        </>

    )

                    
                    } 
    export default Products     


