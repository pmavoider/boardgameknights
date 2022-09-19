import {
  Row,
  Col,
  Navbar,
  Nav,
  NavbarBrand,
  Container,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);
  const togglenavbar = () => setCollapsed(!collapsed);
  const cart = useSelector((state) => state.shoppingCart.cart);
  console.log(cart);
  return (
    <>
      <Navbar className="navbar-expand-md pt-3 bg-info">
        <NavbarBrand href="#">
          <h1>
            <Link to="/" className="brand display-4">
              Board Game Knights
            </Link>
          </h1>
        </NavbarBrand>
        <NavbarToggler onClick={togglenavbar} className="me-2 textColor" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <ul className="nav navbar justify-content-end ml-5 mb-lg-0">
              <li className="textColor nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle textColor"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Products
                </a>
                <div class="dropdown-menu bg-info">
                  <Link
                    class="dropdown-item textColor"
                    to={{ pathname: "products/classic" }}
                  >
                    Classic
                  </Link>
                  <Link
                    class="dropdown-item textColor"
                    to={{ pathname: "products/strategy" }}
                  >
                    Strategy
                  </Link>
                  <Link
                    class="dropdown-item textColor"
                    to={{ pathname: "products/strategy" }}
                  >
                    Dice Games
                  </Link>
                  <Link
                    class="dropdown-item textColor"
                    to={{ pathname: "products/partyGames" }}
                  >
                    Party Games
                  </Link>
                  <Link
                    class="dropdown-item textColor"
                    to={{ pathname: "products/official" }}
                  >
                    Officially Licensed Games
                  </Link>
                </div>
              </li>
              <Link className="a p-3" to={{pathname: "aboutus"}}>
                <li className="textColor nav-item">About Us</li>
              </Link>
            </ul>
          </Nav>
        </Collapse>
      </Navbar>
      <Row className="bg-info mt-0">
        <Col class="col ">
          <Link style={{ textDecoration: "none" }} to={`shoppingCart`}>
            <p className="col-11 text-end textColor">
              <i class="fa  fa-cart-shopping fa-lg"></i> {cart.length}
            </p>
          </Link>
        </Col>
      </Row>
    </>
  );
};
export default Header;
