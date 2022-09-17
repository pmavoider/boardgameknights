import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Row, Col } from "reactstrap"
import ItemCarousel from "../components/Carousel"



const ShoppingCart = () => {
    const [total, setTotal] = useState(0)
    const cart = useSelector((state) => state.shoppingCart.value)
    let total1 = 0
    if (cart.length != 0){
    return(<>
            <h2 className="text-center my-4">Your Cart</h2>
            {cart.map((x) => {
                total1 = total1 += x.qty * x.product.price 
                return(
                    <Row className="col-10 mx-auto mt-3" >
                    <Col className="col-6" >
                    <img className="mx-auto d-block" src={x.product.image} style={{width:"80px"}} />
                    <h1 className="text-center mt-3">{x.product.name}</h1>
                    </Col>
                    <Col>
                    <h4 >Qty  {x.qty}</h4>
                    <button className="mr-2"> + </button>
                    <button className="mr-2"> - </button>

                    
                    </Col>
                    <Col>
                    <h4 className="text-center">{x.qty * x.product.price}</h4></Col>
                    </Row>
                )
            })} 
            <Row className="d-flex justify-content-end">
            <Col className="col-5">
            <h3 className=" text-center">Total</h3>
            <h3 className="text-center ">{total1}</h3>
            <button className="d-block mx-auto p-2 rounded bg-info text-secondary">Pay Now </button>
            </Col>
            </Row>
    </>
        
    )}else{
       return(<>
        <h1 className="text-center m-5">Your Cart is Empty</h1>
        </>


)    }
}

export default ShoppingCart;