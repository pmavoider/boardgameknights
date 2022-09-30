import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "reactstrap";
import ItemCarousel from "../components/Carousel";
import {
  increment,
  decrement,
  remove,
} from "../components/shoppingCart/ShoppingCartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";



const ShoppingCart = () => {
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const cart = useSelector((state) => state.shoppingCart.cart);
  let total1 = 0;

 
  if (cart.length != 0) {
    return (
      <>
        <h2 className="text-center my-4">Your Cart</h2>
        {cart.map((x) => {
          total1 = total1 += x.qty * x.product.price;
          return (
            <Row className="col-10 mx-auto mt-5">
              <Col className="col-6">
                <img
                  className="mx-auto d-block"
                  src={x.product.image}
                  style={{ width: "80px" }}
                />
                <h1 className="text-center mt-3">{x.product.name}</h1>
              </Col>
              <Col>
                <h4>Qty {x.qty}</h4>
                <button onClick={() => dispatch(increment(x))} className="mr-2 rounded bg-info">
                  {" "}
                  +{" "}
                </button>
                <button onClick={() => dispatch(decrement(x))} className="m-2 rounded bg-info">
                  {" "}
                  -{" "}
                </button>
                <div>
                  <button onClick={() => dispatch(remove(x))} className="mt-2 rounded bg-info">
                    Remove
                  </button>
                </div>
              </Col>
              <Col>
                <h4 className="text-center">
                  {(x.qty * x.product.price).toFixed(2)}
                </h4>
              </Col>
            </Row>
          );
        })}
        <Row className="d-flex justify-content-end my-5">
          <Col className="col-5">
            <h3 className=" text-center">Total</h3>
            <h3 className="text-center ">{total1.toFixed(2)}</h3>
            <Link to={{pathname:"order"}}><button className="d-block mx-auto p-2 rounded bg-info text-secondary">
              Pay Now{" "}
            </button></Link>
          </Col>
        </Row>
      </>
    );
  } else {
    return (
      <>
        <h1 style={{paddingBottom: "250px", marginTop:"70px"}} className="text-center textColor">Your Cart is Empty</h1>
      </>
    );
  }
};

export default ShoppingCart;
