import { NavLink } from "react-router";
import { RiMenu3Line } from "react-icons/ri";


const MenuBar = () => {
  return (
    <div >
      <div className="  flex justify-between items-center mx-4 md:mx-20">
        <div className="flex gap-2 items-center">
          <img className="w-14" src="logo.jpg" alt="" />
          <div>
            <h3 className="text-xl ">DrFoody</h3>
            <p className="text-xs text-green-500">Food Delivery</p>
          </div>
        </div>

        <div>
          <ul>
            <li className="md:flex hidden text-lg items-center gap-5">
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/"}>About us</NavLink>
              <NavLink to={"/"}>Products</NavLink>
              <NavLink to={"/"}>Blog</NavLink>
            </li>
          </ul>
        </div>
        <button className="bg-[#da2424] p-2 md:flex hidden  text-white font-bold rounded-lg shadow-sm shadow-black">
          Get Menu
        </button>
        <RiMenu3Line size={28} className="md:hidden"></RiMenu3Line>
      </div>
    </div>
  );
};

export default MenuBar;
