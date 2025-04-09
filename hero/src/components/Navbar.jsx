import React, { useState } from "react";
import { menu } from "../info/data";
import { CiSearch } from "react-icons/ci";
import { VscCode } from "react-icons/vsc";

import { MdMenu } from "react-icons/md";
import { PiShoppingCartThin } from "react-icons/pi";
import MenuResponsivo from "./MenuResponsivo";

const Navbar = () => {

    const [open, setOpen] = useState(false); // <--- Estado que controla el menú

  return (
    <>
      <nav>
        <div className="container flex mx-auto px-4 justify-between items-center py-8">
          {/* ACA VA EL LOGO  */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <VscCode  className="text-4xl text-[#6FCF97]"/>
            <p className="text-white">Agency</p>
            <p className="text-[#6FCF97]">Web</p>
            {/* cambiar color */}
          </div>

          {/* ACA PARTIMOS EN DOS VA OTRA SECCION  */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-white">
              {menu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      className="inline-block py-1 px-3 hover:text-[#6FCF97]"
                      href={item.link}
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* ACA VA LOS ICONOS  */}
          <div className="flex items center gap-4">
            <button className="text-white text-2xl hover:bg-[#6FCF97] hover:text-white rounded-full p-2 duration-200 cursor-pointer">
              <CiSearch />
            </button>

            <button className="text-white text-2xl hover:bg-[#6FCF97] hover:text-white rounded-full p-2 duration-200 cursor-pointer">
              <PiShoppingCartThin />
            </button>

            <button className="login hover:bg-[#6FCF97] text-white font-bold hover:text-white rounded-md border-2 border-[#6FCF97] cursor-pointer px-6 py-2 duration-200 hidden md:block">
              Login
            </button>
          </div>
          {/* ------------------------ */}
          <div className="md:hidden" onClick={()=>setOpen(!open)}> 
            {/* md:hidden lo hara invisible en pantallas desktop  */}

            <MdMenu  className="text-4xl text-white"/>
          </div>
        </div>
      </nav>

      {/* ACA VA LA VERSION MOBILE RESPONSIVA  */}
      <MenuResponsivo open={open}/>
    </>
  );
};

export default Navbar;
