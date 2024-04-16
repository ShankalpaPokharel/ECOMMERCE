import React, { useCallback, useState } from "react";

import { CiMail, CiHeart } from "react-icons/ci";
import { TbPhoneCall } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { PiShoppingCartSimple } from "react-icons/pi";
import { BiSearch } from "react-icons/bi";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner1 from "../assets/banner-1.png";
import banner2 from "../assets/banner-2.jpg";
import banner3 from "../assets/banner-3.jpg";
import {FirstProduct} from "../components";

export default function Home() {

    const [firstProduct, setFirstProduct] = useState([
        {name:"Cantilever chair", code:"Y523201",price:42.00,imgLink:"/FirstProductChair.png"},
        {name:"Cantilever chair", code:"Y523201",price:42.00,imgLink:"/FirstProductChair.png"},
        {name:"Cantilever chair", code:"Y523201",price:42.00,imgLink:"/FirstProductChair.png"},
        {name:"Cantilever chair", code:"Y523201",price:42.00,imgLink:"/FirstProductChair.png"},
        
    ])


    const [currentSlide, setCurrentSlide] = useState(0);
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        adaptiveHeight: true,

        customPaging: (i) => (
            <div
                className={`absolute bottom-20 w-[10px] h-[10px] border border-secondary rotate-45 ${
                    i === currentSlide ? "bg-secondary" : "bg-[#FFFFFF]"
                }`}
            ></div>
        ),

        beforeChange: (oldIndex, newIndex) => {
            setCurrentSlide(newIndex);
        },
    };



    return (
        <>
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

            {/* Hero Part */}
            <section className="">
                <div className="relative">
                    <div className="h-[764px] ">
                        <Slider {...settings} className="max-w-full max-h-full">
                            <div>
                                <img
                                    className="w-full h-[764px] object-cover"
                                    src={banner1}
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="w-full h-[764px] object-cover"
                                    src={banner2}
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="w-full h-[764px] object-cover"
                                    src={banner3}
                                    alt=""
                                />
                            </div>
                        </Slider>
                    </div>
                    {/* Hero text */}
                    <div className="container absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 space-y-[27px]">
                        <p className="font-bold text-secondary">
                            Best Furniture For Your Castle
                        </p>
                        <p className="text-[53px] font-josefin w-[666px]">
                            New Furniture Collection Trends in 2024
                        </p>
                        <p className="text-[#8A8FB9] w-[580px]">
                            {" "}
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit Ratione repellat qui ex?Lorem ipsum dolor sit
                            amet consectetur adipisicing elit
                        </p>
                        <button className="bg-secondary px-10 py-4 font-josefin font-semibold text-[17px] text-white w-[163px]">
                            Shop Now
                        </button>
                    </div>
                </div>
            </section>

            {/* first part product  */}
            <section className="container flex mt-56 gap-7">
               { firstProduct.map(el=>(<FirstProduct product={el} />))}
                
            </section>
            

            primary: "#7E33E0",
        "primary-dark": "#0D0E43",
        "primary-light": "#E7E6EF",
        secondary: "#FB2E86",

        <p className="text-primary">
        Lorem ipsum dolor sit amet. dfais f afklasd fa
        </p>
        <p className="text-primary-dark">
        Lorem ipsum dolor sit amet. dfais f afklasd fa
        </p>
        <p className="text-primary-light">
        Lorem ipsum dolor sit amet. dfais f afklasd fa
        </p>
        <p className="text-secondary">
        Lorem ipsum dolor sit amet. dfais f afklasd fa
        </p>



            
        </>
    );
}
