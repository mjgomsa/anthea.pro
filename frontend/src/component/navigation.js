import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState, useEffect } from "react";
import "../App.css";
import logoImage from "../assets/brand/logo2.png";

export function Navigation() {
  const [isAuth, setIsAuth] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("access_token") !== null) {
      setIsAuth(true);
    }
  }, [isAuth]);

  return (
    <div>
      <Navbar
        bg="transparent"
        data-bs-theme="light"
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
          fontSize: "20px",
        }}
        expand="lg"
        expanded={expanded}
      >
        <Navbar.Brand href="/">
          <img
            src={logoImage}
            height="30"
            className="d-inline-block align-top"
            alt="Anthea logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isAuth ? <Nav.Link href="/">Home</Nav.Link> : null}
            {isAuth ? <Nav.Link href="/profile">Profile</Nav.Link> : null}
          </Nav>
          <Nav>
            {isAuth ? (
              <Nav.Link href="/logout">Logout</Nav.Link>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
