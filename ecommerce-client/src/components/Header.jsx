import React, { useState } from "react";

import { CiMail, CiHeart } from "react-icons/ci";
import { TbPhoneCall } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { PiShoppingCartSimple } from "react-icons/pi";
import { BiSearch } from "react-icons/bi";
import { LuMenu } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";

export default function Header() {
  const [clicked, setClicked] = useState(false);
  const [setshowMenuItem, setSetshowMenuItem] = useState(false);
  const toogleMenu = () => {
    setClicked(!clicked);
  };
  return (
    <header>
      {/* header 1 */}
      <nav className="flex bg-primary-bg px-3  py-[14px] pt-[13px]  text-base font-semibold text-white md:px-0">
        <div className="container flex justify-between">
          <div className="flex gap-12">
            <div className="hidden md:block">
              <CiMail className="mr-[10px] inline-block" />
              <span>abc@gmail.com</span>
            </div>
            <div className="">
              <TbPhoneCall className="mr-[10px] inline-block" />
              <span>(12345)67890</span>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="hidden md:block">
              <span>English</span>
              <RiArrowDropDownLine className="inline-block size-4" />
            </div>
            <div className="hidden md:block">
              <span>USD </span>
              <RiArrowDropDownLine className="inline-block size-4" />
            </div>
            <div className="">
              <span>Login </span>
              <FiUser className="inline-block size-4" />
            </div>
            <div className="hidden md:block">
              <span>Wishist </span>
              <CiHeart className="inline-block size-4" />
            </div>
            <div className="hidden md:block">
              <PiShoppingCartSimple className="inline-block size-5" />
            </div>
          </div>
        </div>
      </nav>

      {/* header 2 */}
      <nav className="py-[18px]">
        <div className="container  relative flex items-center justify-between px-3 sm:px-0">
          <div className="flex md:items-center ">
            <span className="mr-[91px] items-center  font-josefin text-[34px]">
              Hekto
            </span>

            <div
              className={`absolute  right-0 top-11 z-10 w-1/2 lg:static ${clicked ? "transition-all transform translate-x-0" : "transition-all transform translate-x-full "} md:block md:w-auto md:top-auto`}
            >
              <ul className="gap-9 space-y-3 rounded bg-[#EEEFFB] p-3  md:flex md:p-0 md:bg-white md:items-center md:space-y-0    ">
                <li className="h-full w-full rounded p-2 hover:bg-[#E7E4F8] md:h-auto md:w-auto md:rounded-none ">
                  Home
                </li>
                <li className="h-full w-full rounded p-2 hover:bg-[#E7E4F8] md:h-auto md:w-auto md:rounded-none ">
                  Pages
                </li>
                <li className="h-full w-full rounded p-2 hover:bg-[#E7E4F8] md:h-auto md:w-auto md:rounded-none ">
                  Products
                </li>
                <li className="h-full w-full rounded p-2 hover:bg-[#E7E4F8] md:h-auto md:w-auto md:rounded-none ">
                  Blog
                </li>
                <li className="h-full w-full rounded p-2 hover:bg-[#E7E4F8] md:h-auto md:w-auto md:rounded-none ">
                  Shop
                </li>
                <li className="h-full w-full rounded p-2 hover:bg-[#E7E4F8] md:h-auto md:w-auto md:rounded-none ">
                  Contact
                </li>
              </ul>
            </div>
          </div>

          <button className="text-2xl md:hidden" onClick={toogleMenu}>
            {clicked ? <RxCross1 /> : <LuMenu />}
          </button>

          <div className="hidden h-[40px] w-[311px] border border-primary-light md:flex ">
            <input type="text" className=" h-full flex-1 px-1" />

            <button className="h-full  w-[51px] bg-secondary  px-[13px] py-[8px] ">
              <BiSearch className="inline-block text-white" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
