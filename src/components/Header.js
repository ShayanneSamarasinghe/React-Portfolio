import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

const Header = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className ="d-flex justify-content-center NavBar">
     
      <Nav className="NavigationBar">
        <NavItem className="NavItem" >
          <NavLink href="/">about me</NavLink>
        </NavItem>
        <NavItem className="NavItem">
          <NavLink href="/portfolio">portfolio</NavLink>
        </NavItem>
        <NavItem className="NavItem">
          <NavLink href="../AnotherAssets/ShayanneSamarasingheResume2020.pdf" target="_blank">resume</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Header;