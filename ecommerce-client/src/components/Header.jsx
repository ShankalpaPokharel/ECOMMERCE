import React from "react";

import { CiMail, CiHeart } from "react-icons/ci";
import { TbPhoneCall } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { PiShoppingCartSimple } from "react-icons/pi";
import { BiSearch } from "react-icons/bi";


export default function Header() {
  return (
    <header>
                {/* header 1 */}
                <nav className="bg-primary-bg text-white flex  pt-[13px] py-[14px]  font-semibold text-base">
                    <div className="flex container justify-between">
                        <div className="flex gap-12">
                            <div className="">
                                <CiMail className="inline-block mr-[10px]" />
                                <span>abc@gmail.com</span>
                            </div>
                            <div className="">
                                <TbPhoneCall className="inline-block mr-[10px]" />
                                <span>(12345)67890</span>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="">
                                <span>English</span>
                                <RiArrowDropDownLine className="inline-block size-4" />
                            </div>
                            <div className="">
                                <span>USD </span>
                                <RiArrowDropDownLine className="inline-block size-4" />
                            </div>
                            <div>
                                <span>Login </span>
                                <FiUser className="inline-block size-4" />
                            </div>
                            <div>
                                <span>Wishist </span>
                                <CiHeart className="inline-block size-4" />
                            </div>
                            <div>
                                <PiShoppingCartSimple className="inline-block size-5" />
                            </div>
                        </div>
                    </div>
                </nav>

                {/* header 2 */}
                <nav className="py-[18px]">
                    <div className="flex  justify-between items-center container">
                        <div className="flex items-center">
                            <span className="font-josefin text-[34px]  mr-[91px] items-center">
                                Hekto
                            </span>

                            <ul className="gap-9 flex">
                                <li>Home</li>
                                <li>Pages</li>
                                <li>Products</li>
                                <li>Blog</li>
                                <li>Shop</li>
                                <li>Contact</li>
                            </ul>
                        </div>

                        <div className="border border-primary-light w-[311px] h-[40px] flex">
                            <input
                                type="text"
                                className=" h-full flex-1 px-1"
                            />

                            <button className="bg-secondary  w-[51px] h-full  px-[13px] py-[8px] ">
                                <BiSearch className="inline-block text-white" />
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
  )
}
