import Navbar from "./Navbar";
import { Outlet } from "react-router";
import MenuBar from "./MenuBar";

const Root = () => {
  return (
    <>
      <Navbar></Navbar>

      <MenuBar></MenuBar>

      <Outlet></Outlet>
    </>
  );
};

export default Root;
