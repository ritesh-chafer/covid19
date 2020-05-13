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

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <NavbarBrand>Covid Opportunities</NavbarBrand>
        
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink><Link to="/" style={{textDecoration: 'none', color: 'black'}}>Companies</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/projects" style={{textDecoration: 'none', color: 'black'}}>Projects</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/" style={{textDecoration: 'none', color: 'black'}}>Chats</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/" style={{textDecoration: 'none', color: 'black'}}>Profile</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/" style={{textDecoration: 'none', color: 'black'}}>Logout</Link></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;