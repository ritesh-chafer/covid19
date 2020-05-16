import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import "./Navbar.css";;

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <NavLink style={{fontSize: 20}}><b>Covid Opportunities</b></NavLink>
        
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink><Link to="/" style={{textDecoration: 'none', color: 'black', fontSize: 18}}>Companies</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/projects" style={{textDecoration: 'none', color: 'black', fontSize: 18}}>Projects</Link></NavLink>
            </NavItem>
            <NavItem className="hover">
              <NavLink><Link to="/" style={{textDecoration: 'none', color: 'black', fontSize: 18}}>Chats</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/" style={{textDecoration: 'none', color: 'black', fontSize: 18}}>Profile</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/" style={{textDecoration: 'none', color: 'black', fontSize: 18}}>Logout</Link></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;