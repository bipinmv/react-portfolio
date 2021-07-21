import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

const navItems = [{
  label: "Home",
  route: "/"
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

  return (
    <Navbar bg="" expand="md" className="nav-color nav-slide">
      <Link className="text-decoration-none bipin-signature" to="/">{"< Bipin mv />"}</Link>
      <Navbar.Toggle className="border-0" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="bg-white">
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
