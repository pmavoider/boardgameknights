import { Row, Col, Card, CardImg, CardBody, CardTitle } from "reactstrap"
import hero from "../images/heroImg.jpg"
import {Link} from "react-router-dom"

const Catagories = () => {
    return (<>
        <Row>
            <Col>
            <h1 className="text-center bg-info p-5">Browse Our Selection</h1>
            </Col>
        </Row>
        <Row className="row-content mt-5">
            <Col  className="mt-3 col-12 col-sm-6 col-md-4">
                <Link to={{pathname: "products/classic"}}>
                <Card className="card-img-top m-auto" style={{ width: "80%"}}>
                    <CardImg  className="m-auto" src={hero} alt="boardGame" />
                   
                    <CardBody>
                    <CardTitle className="text-center"><h3>Classic Games</h3></CardTitle>
                    </CardBody>
                </Card>
                </Link>
            </Col>
            <Col  className="mt-3 col-12 col-sm-6 col-md-4">
                <Link to={{pathname: "products/diceGames"}}>
                <Card className="m-auto" style={{ width: "80%"}}>
                    <CardImg  className="m-auto" src={hero} alt="boardGame" />
                   
                    <CardBody>
                    <CardTitle className="text-center"><h3>Dice Games</h3></CardTitle>
                    </CardBody>
                </Card>
                </Link>
            </Col>
            <Col  className="mt-3 col-12 col-sm-6 col-md-4">
                <Link to={{pathname: "products/strategy"}}>
                <Card className="m-auto" style={{ width: "80%"}} >
                    <CardImg  className="m-auto" src={hero} alt="boardGame" />
                   
                    <CardBody>
                    <CardTitle className="text-center"><h3>Strategy Games</h3></CardTitle>
                    </CardBody>
                </Card>
                </Link >
            </Col>
            <Col  className="mt-3 col-12 col-sm-6 col-md-4">
                <Link to={{pathname: "products/partyGames"}}>
                <Card className="m-auto" style={{ width: "80%" }}>
                    <CardImg   src={hero} alt="boardGame" />
                   
                    <CardBody>
                    <CardTitle className="text-center"><h3>Party Games</h3></CardTitle>
                    </CardBody>
                </Card>
                </Link>
            </Col>
            <Col  className="mt-3 col-12 col-sm-6 col-md-4">
                <Link to={{pathname: "products/official"}}>
                <Card className="m-auto" style={{ width: "80%" }}>
                    <CardImg   src={hero} alt="boardGame" />
                   
                    <CardBody>
                    <CardTitle className="text-center"><h3>Officially Licensed Games</h3></CardTitle>
                    </CardBody>
                </Card>
                </Link>
            </Col>
            <Col  className="mt-3 col-12 col-sm-6 col-md-4">
                <Link to={{pathname: "products/staff"}}>
                <Card className="m-auto" style={{ width: "80%" }}>
                    <CardImg   src={hero} alt="boardGame" />
                   
                    <CardBody>
                    <CardTitle className="text-center"><h3>Staff Picks</h3></CardTitle>
                    </CardBody>
                </Card>
                </Link>
            </Col>
            
        </Row>
    </>
    )
}
export default Catagories;