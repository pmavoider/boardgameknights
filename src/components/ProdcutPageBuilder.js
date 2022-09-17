import { Card, CardBody} from "reactstrap"
import {Link} from "react-router-dom"
import { add } from "./shoppingCart/ShoppingCartSlice"
import { useDispatch } from "react-redux"




const ProductPageBuilder = (props) => {

    const dispatch = useDispatch();
    const product = props.name
  
    return(<>
    <Card   className="col-6 col-md-10 p-4 mx-auto bord">
    <Link style={{ textDecoration: "none"}} to={`productsPage/${props.name.name}`} >
        <img style={{ aspectRatio:"4/3"}} src={props.name.image} className=" card-img-top mt-4 d-block mx-auto" />
        <h3 className="text-center mt-3 a">{props.name.name}</h3>
        <h4  className="text-center mt-3 a">{props.name.price == 0 ? "$9.99" : props.name.price}</h4>
        </Link>
        <CardBody className="d-flex justify-content-center" >
        <button className="Rounded p-2" onClick={() => dispatch(add({product}))}>Add to Cart</button>
        
       
        </CardBody>
       
       
        </Card>
       
        
        </>
       
    )
}
export default ProductPageBuilder