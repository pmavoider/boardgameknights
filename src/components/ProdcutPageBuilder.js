import {Col, Row, Card, CardTittle, CardBody} from "reactstrap"


const ProductPageBuilder = ({name}) => {
        console.log(name.images.small)
    
    return(<>
        <img src={name.images.medium} className="d-block mx-auto" />
        <h1 className="text-center">{name.name}</h1>
        </>
    )
}
export default ProductPageBuilder