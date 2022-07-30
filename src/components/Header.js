import { Row, Col, Navbar,Nav, NavbarBrand, Container, NavbarToggler, Collapse  } from "reactstrap"
import {useState} from "react"

const Header = () => {
    const [collapsed, setCollapsed] = useState(true);
    const togglenavbar = () => setCollapsed(!collapsed)
    return (
        <>
    <Navbar className="navbar-expand-sm"  >
  
    <NavbarBrand  href="#"><h1>Board Game Knights</h1></NavbarBrand>
    <NavbarToggler onClick={togglenavbar}  className="me-2" />
    <Collapse isOpen={!collapsed} navbar >
    <Nav navbar>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
            <a></a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      </Nav>
    </Collapse>
</Navbar>
        </>

    )
}
export default Header;