import React from "react";
import { Link,NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLanguage } from "../context/language";

const AppNavbar = () => {
  const favoritesCount = useSelector((state) => state.favorites.length);
  const { language, setLanguage } = useLanguage();
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/" className="mx-2">
        Movies App
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
          <NavLink  to="/"  className={({ isActive }) => {return isActive ? "active" : "inactive";}} >
            Home
          </NavLink>
          </Nav.Link>
          <Nav.Link>
          <NavLink  to="/favorites"  className={({ isActive }) => {return isActive ? "active" : "inactive";}} >
            Favorites ({favoritesCount})
          </NavLink>
          </Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
      <Nav>
      <Nav.Link>
          <NavLink to="/signup" activeStyle={{ color: "red" }}  className={({ isActive }) => {return isActive ? "active" : "inactive";}} >
            Register
          </NavLink>
          </Nav.Link>
        <NavDropdown
          className="d-flex justify-content-between mx-3"
          title={language}
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item onClick={() => setLanguage("en-US")}>
            English
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => setLanguage("es-ES")}>
            Spanish
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => setLanguage("fr-FR")}>
            French
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => setLanguage("ar-SA")}>
            Arabic
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
};

export default AppNavbar;
