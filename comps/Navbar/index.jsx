import style from "./style.module.scss";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isMobile } from "react-device-detect";

import {
  faHome,
  faImages,
  faFileSignature,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";

const NavbarComp = () => {
  const [_isMobile, setMobile] = useState();

  useEffect(() => {
    setMobile(isMobile);
  }, [setMobile]);
  return (
    <Navbar
      bg="light"
      variant="light"
      fixed={_isMobile ? "bottom" : "top"}
      className={style.navbar}
    >
      <Container>
        <Navbar.Brand href="#home" className={style.logoContainer}>
          <img
            src="/LOGO.svg"
            className={style.logo}
            alt="React Bootstrap logo"
          />
          <h3>رفيق طريق</h3>
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav" className={style.nav}>
          <Nav className={[style.navItemsContainer, "me-auto"].join(" ")}>
            <div className={style.navItems}>
              <FontAwesomeIcon
                icon={faHome}
                className={style.navItemsLogo}
                onClick={() => {
                  window.location.href = "#Opening";
                }}
              />
              <Nav.Link href="#Opening" className={style.navText}>
                المقدمة
              </Nav.Link>
            </div>
            <div className={style.navItems}>
              <FontAwesomeIcon
                icon={faFileSignature}
                className={style.navItemsLogo}
                onClick={() => {
                  window.location.href = "#Trips";
                }}
              />
              <Nav.Link href="#Trips" className={style.navText}>
                التسجيل لرحلات
              </Nav.Link>
            </div>

            <div className={style.navItems}>
              <FontAwesomeIcon
                icon={faImages}
                className={style.navItemsLogo}
                onClick={() => {
                  window.location.href = "#Gallery";
                }}
              />
              <Nav.Link href="#Gallery" className={style.navText}>
                صور
              </Nav.Link>
            </div>
            <div className={style.navItems}>
              <FontAwesomeIcon
                icon={faQuestion}
                className={style.navItemsLogo}
                onClick={() => {
                  window.location.href = "#QandA";
                }}
              />
              <Nav.Link href="#QandA" className={style.navText}>
                اسئلة واجوبة
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
