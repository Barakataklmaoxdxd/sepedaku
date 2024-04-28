import Navigasi from "../layout/Navbar.jsx";
import Footer from "../layout/Footer.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navigasi />
      <Outlet />
    </>
  );
}

export default Layout;
