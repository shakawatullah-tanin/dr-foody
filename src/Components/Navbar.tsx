import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { TbPhoneCall } from "react-icons/tb";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { BiUser } from "react-icons/bi";
import { PiHandbagSimple } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mx-20 my-4  ">
      <div className="flex gap-5 items-center">
        <div className=" flex gap-2 items-center ">
          <IoLocationOutline color="green" size={20}></IoLocationOutline>Town
          Hall , Mymensingh
        </div>
        <div className=" flex gap-2 items-center ">
          {" "}
          <TbPhoneCall color="green" size={20}></TbPhoneCall> 01906053223{" "}
        </div>
        <div className=" flex gap-2 items-center ">
          <AiOutlineMail color="green" size={20}></AiOutlineMail>
          suppor@drfoody.bd
        </div>
      </div>
      <div>
        <div>
          <ul>
            <li className="flex gap-5  items-center ">
              <IoIosSearch size={20}></IoIosSearch>
              <BiUser size={20}></BiUser>
              <PiHandbagSimple size={20}></PiHandbagSimple>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
