import { Row, Col, Breadcrumb, BreadcrumbItem} from "reactstrap";
import monopoly from "../images/monopoly.jpg";

const AboutUs = () => {

        return (<>

        <Breadcrumb className="bg-info d-none d-md-block">
            <BreadcrumbItem>
            <a href="\">
                Home
            </a>
            </BreadcrumbItem>
            <BreadcrumbItem active>
            Library
            </BreadcrumbItem>
        </Breadcrumb>
  
        <Row>
            <Col className=" col-10 col-lg-8 mx-auto text-center">
                <h2 className="my-5 textColor">Our Story ...</h2>
            <h4 className="textColor " >In 2010 we set out with a simple purpose. We wanted to share our love of boardgames with the world. Since I was a small child board games have gave me and my family countless hours of entertainment. We set out to tak a customer friendly approach to the online market place. Since 2010 with the help of our wonderful customers we now have multiple distribution centers, an evergrowing catalog, and have won awards for customer service. We have also been able to support many board game clubs in local junior and high schools. I want to personally thank you our customer for helping us bring the joy of board games to the world. Happy Gaming Board Game Knights!!!
                </h4>
                </Col>
                <img src={monopoly}
                className="mx-auto mt-5"
                style={{maxWidth:"900px"}} />
                </Row>
                </>
        )

}
export default AboutUs;