import { Card, Button} from "reactstrap"
import {Link} from "react-router-dom"




const ProductPageBuilder = ({name}) => {
  
    return(<>
    <Card   className="col-6 col-md-10 p-4 mx-auto bord">
    <Link style={{ textDecoration: "none"}} to={`productsPage/${name.name}`}>
        <img style={{ aspectRatio:"4/3"}} src={name.image} className=" card-img-top mt-4 d-block mx-auto" />
        <h3 className="text-center mt-3 a">{name.name}</h3>
        <h4  className="text-center mt-3 a">{name.price}</h4>
        </Link>
        <div className="mt-4 d-flex flex-row  justify-content-around">
        <Button className="rounded btn-sm " >add to cart </Button>
        
        </div>
        </Card>
        </>
       
    )
}
export default ProductPageBuilder