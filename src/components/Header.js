import { Row, Col, Navbar,Nav, NavbarBrand, Container, NavbarToggler, Collapse  } from "reactstrap"
import {useState} from "react"
import {Link} from "react-router-dom"
import { useSelector } from "react-redux"

const Header = () => {
    const [collapsed, setCollapsed] = useState(true);
    const togglenavbar = () => setCollapsed(!collapsed)
    const cart = useSelector((state) => state.shoppingCart)
    return (
        <>
    <Navbar className="navbar-expand-md p-3 bg-info">
    <NavbarBrand  href="#"><h1 ><a href="/" >Board Game Knights</a></h1></NavbarBrand>
    <NavbarToggler onClick={togglenavbar}  className="me-2 " />
    <Collapse isOpen={!collapsed} navbar >
    <Nav navbar>
      <ul className="navbar-nav justify-content-end  ml-5 mb-lg-0">
        <Link className="a p-3" to="products/lk"><li className="nav-item">
          products
        </li></Link>
        <Link className="a p-3" to="products"><li className="nav-item">
          products
        </li></Link>Name
       
        <Link className="a p-3" to="products"><li className="nav-item">
          products
        </li></Link>
      </ul>
      </Nav>
    </Collapse>
    
  
</Navbar>
<Row className= "bg-info">
  <Col class="col ">
  <Link style={{ textDecoration: "none"}} to={`shoppingCart`}>
  <p className="col-11 text-end" >Cart: {cart.value.length}</p>
  </Link>
  </Col>
</Row>

        </>

    )
}
export default Header;