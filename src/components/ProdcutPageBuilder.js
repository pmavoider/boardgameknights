import { Card, Button} from "reactstrap"
import {Link} from "react-router-dom"




const ProductPageBuilder = (props) => {
    console.log(props)
  
    return(<>
    <Card   className="col-6 col-md-10 p-4 mx-auto bord">
    <Link style={{ textDecoration: "none"}} to={`productsPage/${props.name.name}`}>
        <img style={{ aspectRatio:"4/3"}} src={props.name.image} className=" card-img-top mt-4 d-block mx-auto" />
        <h3 className="text-center mt-3 a">{props.name.name}</h3>
        <h4  className="text-center mt-3 a">{props.name.price}</h4>
        </Link>
        <div className="mt-4 d-flex flex-row  justify-content-around">
        
        
        </div>
        </Card>
        </>
       
    )
}
export default ProductPageBuilder