// import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";
import style from "./style.module.scss";
const Layout = ({ children }) => {
  return (
    <div className={style.fronPageContaier}>
      {/* <Navbar /> */}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
