import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

const NavBar = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className ="d-flex justify-content-center">
     
      <Nav className='m-auto'>
        <NavItem >
          <NavLink href="/">about me</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/portfolio">portfolio</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/resume">resume</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default NavBar;