import Navbar from "../comps/Navbar";
// import Footer from "../comps/Footer";
import style from "./style.module.scss";
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className={style.fronPageContaier}>{children}</div>
    </div>
  );
};

export default Layout;
