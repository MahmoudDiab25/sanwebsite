// import Link from "next/link";
// import style from "./style.module.scss";
// import Image from "next/image";
import React, { Component, useState } from "react";
import Navbbar from "reactjs-navbar";

import {
  faHome,
  faImages,
  faFile,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import "reactjs-navbar/dist/index.css";

const Navbar = () => {
  return (
    <Navbbar
      logo={"/LOGO.svg"}
      menuItems={[
        {
          title: " المقدمة",
          icon: faHome,
          isAuth: true,
          onClick: () => {
            // What you want to do...

            window.location.href = "/";
          },
        },
        {
          title: "التسجيل لرحلات ",
          icon: faFile,
          isAuth: true,
          onClick: () => {
            // What you want to do...

            window.location.href = "/Home/#Trips";
          },
        },
        {
          title: "اسئلة واجوبة ",
          icon: faQuestion,
          isAuth: true,
          onClick: () => {
            // What you want to do...

            window.location.href = "/Home/#QandA";
          },
        },
        {
          title: "صور ",
          icon: faImages,
          isAuth: true,
          onClick: () => {
            // What you want to do...

            window.location.href = "/Home/#Gallery";
          },
        },
      ]}
    />
    // <div className={style.navbarContainer}>
    //   <div className={style.navButton}>
    //     <Link href="/Home/#Trips">
    //       <a>التسجيل لرحلات</a>
    //       {/* <Image src={faImages} /> */}
    //     </Link>
    //     <Link href="/Home/#QandA">
    //       <a>اسئلة واجوبة</a>
    //     </Link>
    //     <Link href="/Home/#Gallery">
    //       <a>صور</a>
    //     </Link>
    //   </div>
    //   {!isMobile && (
    //     <Image width="200px" height="150px" src="/LOGO.svg" alt="logo" />
    //   )}
    // </div>
  );
};

export default Navbar;
