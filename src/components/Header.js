import { Row, Col, Navbar,Nav, NavbarBrand, Container, NavbarToggler, Collapse  } from "reactstrap"
import {useState} from "react"

const Header = () => {
    const [collapsed, setCollapsed] = useState(true);
    const togglenavbar = () => setCollapsed(!collapsed)
    return (
        <>
    <Navbar className="navbar-expand-sm">
  
    <NavbarBrand  href="#"><h1>Board Game Knights</h1></NavbarBrand>
    <NavbarToggler onClick={togglenavbar}  className="me-2 " />
    <Collapse isOpen={!collapsed} navbar >
    <Nav navbar>
      <ul class="navbar-nav  mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Prouducts</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item dropdown">
            <a></a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Cart</a>
        </li>
      </ul>
      </Nav>
    </Collapse>
</Navbar>
        </>

    )
}
export default Header;