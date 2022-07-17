import style from "./style.module.scss";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isMobile } from "react-device-detect";
import Image from "next/image";

import {
  faHome,
  faImages,
  faFileSignature,
  faQuestion,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const NavbarComp = () => {
  const [_isMobile, setMobile] = useState(false);
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  useEffect(() => {
    setMobile(isMobile);
  }, [setMobile]);

  return !_isMobile ? (
    <div className={style.desktopNav}>
      <div className={style.navItemsDesktop}>
        <p
          onClick={() => {
            window.location.href = "#Opening";
          }}
        >
          المقدمة
        </p>
        <p
          onClick={() => {
            window.location.href = "#Trips";
          }}
        >
          التسجيل لرحلات
        </p>
        <p
          onClick={() => {
            window.location.href = "#Gallery";
          }}
        >
          صور
        </p>
        <p
          onClick={() => {
            window.location.href = "#QandA";
          }}
        >
          اسئلة واجوبة
        </p>
      </div>
      <p className={style.phoneNumber}>054-233-8892 :SAN AJAMI</p>
      <Image src="/LOGO.svg" alt="logo" width={150} height={150} />
    </div>
  ) : (
    <div
      className={style.navbarContainer}
      style={{
        display: _isMobile ? "flex" : "none",
      }}
    >
      <FontAwesomeIcon
        icon={faHome}
        className={style.navItemsLogo}
        onClick={() => {
          window.location.href = "#Opening";
        }}
      />
      <FontAwesomeIcon
        icon={faFileSignature}
        className={style.navItemsLogo}
        onClick={() => {
          window.location.href = "#Trips";
        }}
      />
      <FontAwesomeIcon
        icon={faImages}
        className={style.navItemsLogo}
        onClick={() => {
          window.location.href = "#Gallery";
        }}
      />
      <FontAwesomeIcon
        icon={faQuestion}
        className={style.navItemsLogo}
        onClick={() => {
          window.location.href = "#QandA";
        }}
      />
      <FontAwesomeIcon
        icon={faPhone}
        className={style.navItemsLogo}
        onClick={() => {
          setShowPhoneNumber(!showPhoneNumber);
        }}
      />
      <a
        href="tel:054-233-8892"
        className={style.navPhoneNum}
        style={{
          bottom: showPhoneNumber ? "30px" : "-60px",
          animation: showPhoneNumber
            ? "style_goUp__HF7ow 1s "
            : "style_goDown__O2c33 1s",
        }}
      >
        054-233-8892
      </a>
    </div>
  );
};

export default NavbarComp;
