import React, { useState } from "react";
import { Link } from "react-router-dom";

import { CiMail, CiHeart } from "react-icons/ci";
import { TbPhoneCall } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { PiShoppingCartSimple } from "react-icons/pi";
import { BiSearch } from "react-icons/bi";
import { LuMenu } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";

import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slice/userSlice";


export default function Header() {
  const [clicked, setClicked] = useState(false);
  const [setshowMenuItem, setSetshowMenuItem] = useState(false);

  let user = useSelector((store) => store.user.value);
  let userName = user?.name
  console.log(user)
  const dispatch = useDispatch()

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
              <div>
                {user ? (
                  <div className="flex space-x-2">
                    <span>{userName}</span>
                    <span className="cursor-pointer" onClick={()=>{dispatch(logout())}}>Logout</span>
                  </div>
                ) : (
                  <div>
                    <Link to={"login"}>
                      <span>Login </span>
                    </Link>

                    <FiUser className="inline-block size-4" />
                  </div>
                )}
              </div>
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
            <Link to={""}>
              <span className="mr-[91px] items-center font-josefin text-[34px]">
                Hekto
              </span>
            </Link>

            <div
              className={`absolute  right-0 top-11 z-10 w-1/2 lg:static ${clicked ? "translate-x-0 transform transition-all" : "hidden translate-x-full transform transition-all "} md:top-auto md:block md:w-auto md:translate-x-0 md:transition-none `}
            >
              <ul className="w-full space-y-3 rounded bg-[#EEEFFB] p-3  md:flex md:items-center md:space-y-0 md:bg-white md:p-0 md:justify-around md:gap-5">
                <li className="h-full w-full rounded p-2 hover:bg-[#E7E4F8] md:h-auto md:w-auto md:rounded-none md:hover:bg-transparent md:hover:text-secondary ">
                  Home
                </li>
                {user?.role=="seller"?<Link to={"addProduct"}><li className="h-full w-full rounded p-2 hover:bg-[#E7E4F8] md:h-auto md:w-auto md:rounded-none md:hover:bg-transparent md:hover:text-secondary cursor-pointer ">
                  Add Product
                </li></Link>:null}
                <li className="h-full w-full rounded p-2 hover:bg-[#E7E4F8] md:h-auto md:w-auto md:rounded-none md:hover:bg-transparent md:hover:text-secondary ">
                  Pages
                </li>
                <li className="h-full w-full rounded p-2 hover:bg-[#E7E4F8] md:h-auto md:w-auto md:rounded-none md:hover:bg-transparent md:hover:text-secondary ">
                  Products
                </li>
                <li className="h-full w-full rounded p-2 hover:bg-[#E7E4F8] md:h-auto md:w-auto md:rounded-none md:hover:bg-transparent md:hover:text-secondary ">
                  Blog
                </li>

                <li className="h-full w-full rounded p-2 hover:bg-[#E7E4F8] md:h-auto md:w-auto md:rounded-none md:hover:bg-transparent md:hover:text-secondary ">
                  Shop
                </li>

                <li className="h-full w-full rounded p-2 hover:bg-[#E7E4F8] md:h-auto md:w-auto md:rounded-none md:hover:bg-transparent md:hover:text-secondary ">
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
