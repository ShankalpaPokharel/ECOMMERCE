import React, {  useState }  from 'react'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner1 from "../assets/banner-1.png";
import banner2 from "../assets/banner-2.jpg";
import banner3 from "../assets/banner-3.jpg";


export default function Hero() {
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

  )
}
