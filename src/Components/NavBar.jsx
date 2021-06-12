import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import useWindowDimensions from '../utils/dimensionHelper';

const navItems = [{
  label: "Home",
  route: "/"
  // }, {
  //   label: "About",
  //   route: "/about"
}, {
  label: "Skills",
  route: "/skills"
}, {
  label: "Projects",
  route: "/projects"
}, {
  label: "Contact",
  route: "/contact"
}]

const CustomNav = () => {
  const { width } = useWindowDimensions();
  const navbarBgColor = width < 768 ? 'white' : 'transparent';
  return (
    <Navbar bg="" expand="md" className="nav-color">
      <Link className="font-weight-bold b-logo text-white text-decoration-none" to="/">B</Link>
      <Navbar.Toggle className="border-0" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className={`bg-${navbarBgColor}`}>
        <Nav className="mx-auto">
          {navItems.map(item =>
            <NavLink
              exact
              key={item.label}
              className="color-customBlue w-100 text-decoration-none text-center navLink mt-2"
              activeClassName="font-weight-bold"
              to={item.route}
            >
              {item.label}
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default CustomNav;
