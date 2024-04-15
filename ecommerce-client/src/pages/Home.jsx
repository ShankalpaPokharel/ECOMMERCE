import React, { useState } from "react";
import { CiMail, CiHeart } from "react-icons/ci";
import { TbPhoneCall } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { PiShoppingCartSimple } from "react-icons/pi";
import { BiSearch } from "react-icons/bi";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        adaptiveHeight: true,
       
          customPaging: i => (
            <div
              className={`absolute bottom-20 w-[10px] h-[10px] border border-[#FB2E86] rotate-45 ${i===currentSlide ? 'bg-[#FB2E86]':'bg-[#FFFFFF]'}`}
            >
              
            </div>
           
          ),

          beforeChange: (oldIndex, newIndex) => {
            setCurrentSlide(newIndex);
          }
    };

    return (
        <>
            <header>
                {/* header 1 */}
                <nav className="bg-[#7E33E0] text-white flex  pt-[13px] py-[14px]  font-semibold text-base">
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

                        <div className="border border-[#E7E6EF] w-[311px] h-[40px] flex">
                            <input
                                type="text"
                                className=" h-full flex-1 px-1"
                            />

                            <button className="bg-[#FB2E86]  w-[51px] h-full  px-[13px] py-[8px] ">
                                <BiSearch className="inline-block text-white" />
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Hero Part */}
            </header>


            <section className="">
                <div className="relative">
                    <div className="max-h-[764px] ">
                        <Slider {...settings} className="mx-w-full mx-h-full">
                            <div>
                                <img
                                    className="w-full max-h-[700px] object-cover"
                                    src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="w-full max-h-[700px] object-cover"
                                    src="https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="w-full max-h-[700px] object-cover"
                                    src="https://plus.unsplash.com/premium_photo-1661889099855-b44dc39e88c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                />
                            </div>
                        </Slider>
                    </div>
                    {/* Hero text */}
                    <div className="container absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 space-y-[27px]">
                        <p className="font-bold text-[#FB2E86]">
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
                        <button className="bg-[#FB2E86] px-10 py-4 font-josefin font-semibold text-[17px] text-white w-[163px]">
                            Shop Now
                        </button>
                    </div>
                </div>
            </section>
            <br />

            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                maiores eum voluptatem dolorem neque perferendis consequuntur
                dolore in exercitationem sit non quis error velit doloremque,
                porro tenetur! Perferendis, obcaecati asperiores?
            </p>

            
        </>
    );
}


{/* <section className="mt-7">
                <div className="">
                    <div className="max-h-[764px]">
                        <Slider {...settings} className="mx-w-full mx-h-full">
                            <div className="relative">
                                <img
                                    className="w-full max-h-[700px] object-cover"
                                    src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
                                    alt=""
                                />
                                <div className="container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white">
                                    <p className="font-bold text-[#FB2E86]">
                                        Best Furniture For Your Castle
                                    </p>
                                    <p className="text-[53px] font-josefin w-[666px]">
                                        New Furniture Collection Trends in 2024
                                    </p>
                                    <p className="text-[#8A8FB9] w-[580px]">
                                        {" "}
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit Ratione repellat qui
                                        ex?Lorem ipsum dolor sit amet
                                        consectetur adipisicing elit
                                    </p>
                                    <button className="bg-[#FB2E86] px-10 py-4 font-josefin font-semibold text-[17px] text-white w-[163px]">
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                            <div>
                                <img
                                    className="w-full max-h-[700px] object-cover"
                                    src="https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="w-full max-h-[700px] object-cover"
                                    src="https://plus.unsplash.com/premium_photo-1661889099855-b44dc39e88c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                />
                            </div>
                        </Slider>
                    </div>
                    
                </div>
            </section>
 */}

// static hero
//  <section>
//  <div className="bg-[url('../src/assets/herobg.png')] h-[764px] bg-no-repeat bg-cover relative">
//      <div className="container py-[210px] space-y-[27px] ">
//          <p className="font-bold text-[#FB2E86]">
//              Best Furniture For Your Castle
//          </p>
//          <p className="text-[53px] font-josefin w-[666px]">
//              New Furniture Collection Trends in 2024
//          </p>
//          <p className="text-[#8A8FB9] w-[580px]">
//              {" "}
//              Lorem ipsum dolor sit amet consectetur adipisicing
//              elit Ratione repellat qui ex?Lorem ipsum dolor sit
//              amet consectetur adipisicing elit
//          </p>
//          <button className="bg-[#FB2E86] px-10 py-4 font-josefin font-semibold text-[17px] text-white w-[163px]">
//              Shop Now
//          </button>

//          <div className="absolute bottom-3 flex justify-center inset-x-0">
//              <div className="flex gap-3">
//                  <button className="w-[10px] h-[10px] bg-[#FB2E86] rotate-45"></button>

//                  <button className="w-[10px] h-[10px] border border-[#FB2E86] rotate-45"></button>

//                  <button className="w-[10px] h-[10px] border border-[#FB2E86] rotate-45"></button>
//              </div>
//          </div>
//      </div>
//  </div>
// </section>