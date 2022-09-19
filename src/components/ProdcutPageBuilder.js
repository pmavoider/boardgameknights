import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { add } from "./shoppingCart/ShoppingCartSlice";
import { useDispatch } from "react-redux";

const ProductPageBuilder = (props) => {
  const dispatch = useDispatch();
  const product = props.name;

  return (
    <>
      <Card style={{height: "80vh"}} className="col-8 col-md-10 p-4 mx-auto bord">
        <Link
          style={{ textDecoration: "none", height: "500px" }}
          to={`productsPage/${props.name.name}`}
        >
          <img
            style={{ aspectRatio: "4/3" }}
            src={props.name.image}
            className=" card-img-top mt-4 d-block mx-auto"
          />
          <h3 className="text-center mt-4 textColor">{props.name.name}</h3>
          <h4 className="text-center mt-3 textColor ">
            {props.name.price == 0 ? "$ 9.99" :"$ " + props.name.price}
          </h4>
        </Link>
        <CardBody className="d-flex mx-auto ">
          <button style={{height: "70px"}}
            className="rounded  bg-info textColor"
            onClick={() => dispatch(add({ product }))}
          >
            Add to Cart
          </button>
          <Link
            style={{ textDecoration: "none" }}
            to={`productsPage/${props.name.name}`}
          >
            <button style={{height: "70px"}} className="rounded bg-info textColor ">
              More Info
            </button>
          </Link>
        </CardBody>
      </Card>
    </>
  );
};
export default ProductPageBuilder;
