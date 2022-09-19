import { Row, Col } from "reactstrap";

const OrderConfirmation =  () => {

    return(<>
        <Row>
            <Col className="col-10 mx-auto col-md-8">
        <h2 className="my-5  text-center textColor">Thank you for Your order</h2>
        <h3 className="my-5  text-center textColor">We have sent a confirmation to your email and a tracking number will follow.</h3>
        <h2 className="my-5 pb-5 text-center textColor">Happy Gaming!!</h2>
        </Col> 
        </Row>
        </>
    )
}
export default OrderConfirmation;