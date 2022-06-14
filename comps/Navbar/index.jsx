import Link from "next/link";
import style from "./style.module.scss";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className={style.navbarContainer}>
      <div>
        <Link href="/Home/#Trips">
          <a>التسجيل لرحلات</a>
        </Link>
        <Link href="/Home/#QandA">
          <a>اسئلة واجوبة</a>
        </Link>
        <Link href="/Home/#Gallery">
          <a>صور</a>
        </Link>
      </div>
      <Image width="200px" height="150px" src="/LOGO.svg" alt="logo" />
    </div>
  );
};

export default Navbar;
