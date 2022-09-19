import { Row, Col, Card, CardImg, CardBody, CardTitle } from "reactstrap";
import hero from "../images/heroImg.jpg";
import { Link } from "react-router-dom";
import monopoly from "../images/monopoly.jpg";
import dice from "../images/dice.jpg";
import party from "../images/party.jpg";
import strategy from "../images/strategy.jpg";
import spiderman from "../images/spiderman.jpg";

const Catagories = () => {
  return (
    <>
      <Row>
        <Col>
          <h1 className="text-center bg-info p-5 textColor">
            Browse Our Selection
          </h1>
        </Col>
      </Row>
      <Row className="row-content mt-5">
        <Col className="mt-3 col-12 col-sm-6 col-md-4">
          <Link className="brand" to={{ pathname: "products/classic" }}>
            <Card className="card-img-top m-auto" style={{ width: "80%" }}>
              <CardImg className="m-auto" src={monopoly} alt="boardGame" />

              <CardBody>
                <CardTitle className="text-center ">
                  <h3>Classic Games</h3>
                </CardTitle>
              </CardBody>
            </Card>
          </Link>
        </Col>
        <Col className="mt-3 col-12 col-sm-6 col-md-4">
          <Link className="brand" to={{ pathname: "products/diceGames" }}>
            <Card className="m-auto" style={{ width: "80%" }}>
              <CardImg className="m-auto" src={dice} alt="boardGame" />

              <CardBody>
                <CardTitle className="text-center">
                  <h3>Dice Games</h3>
                </CardTitle>
              </CardBody>
            </Card>
          </Link>
        </Col>
        <Col className="mt-3 col-12 col-sm-6 col-md-4">
          <Link className="brand" to={{ pathname: "products/strategy" }}>
            <Card className="m-auto" style={{ width: "80%" }}>
              <CardImg className="m-auto" src={strategy} alt="boardGame" />

              <CardBody>
                <CardTitle className="text-center">
                  <h3>Strategy Games</h3>
                </CardTitle>
              </CardBody>
            </Card>
          </Link>
        </Col>
        <Col className="mt-3 mx-auto col-12 col-sm-6 col-md-4">
          <Link className="brand" to={{ pathname: "products/partyGames" }}>
            <Card className="m-auto" style={{ width: "80%" }}>
              <CardImg src={party} alt="boardGame" />

              <CardBody>
                <CardTitle className="text-center">
                  <h3>Party Games</h3>
                </CardTitle>
              </CardBody>
            </Card>
          </Link>
        </Col>
        <Col className="mt-3 mx-auto col-12 col-sm-6 col-md-4">
          <Link className="brand" to={{ pathname: "products/official" }}>
            <Card className="m-auto" style={{ width: "80%" }}>
              <CardImg src={spiderman} alt="boardGame" />

              <CardBody>
                <CardTitle className="text-center">
                  <h3>Officially Licensed Games</h3>
                </CardTitle>
              </CardBody>
            </Card>
          </Link>
        </Col>
      </Row>
    </>
  );
};
export default Catagories;
