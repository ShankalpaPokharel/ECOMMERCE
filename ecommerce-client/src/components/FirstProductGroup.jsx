import React, { useState } from "react";

import FirstProduct from "./FirstProduct";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FirstProductGroup() {
    const [firstProduct, setFirstProduct] = useState([
        {
            id: 1,
            name: "Cantilever chair",
            code: "Y523201",
            price: 42.0,
            imgLink: "/FirstProductChair.png",
        },
        {
            id: 2,
            name: "Cantilever chair",
            code: "Y523201",
            price: 42.0,
            imgLink: "/FirstProductChair.png",
        },
        {
            id: 3,
            name: "Cantilever chair",
            code: "Y523201",
            price: 42.0,
            imgLink: "/FirstProductChair.png",
        },
        {
            id: 4,
            name: "Cantilever chair",
            code: "Y523201",
            price: 42.0,
            imgLink: "/FirstProductChair.png",
        },
        {
            id: 5,
            name: "Cantilever chair",
            code: "Y523201",
            price: 42.0,
            imgLink: "/FirstProductChair.png",
        },
        {
            id: 6,
            name: "Cantilever chair",
            code: "Y523201",
            price: 42.0,
            imgLink: "/FirstProductChair.png",
        },
        {
            id: 7,
            name: "Cantilever chair",
            code: "Y523201",
            price: 42.0,
            imgLink: "/FirstProductChair.png",
        },
        {
            id: 4,
            name: "Cantilever chair",
            code: "Y523201",
            price: 42.0,
            imgLink: "/FirstProductChair.png",
        },
        {
            id: 5,
            name: "Cantilever chair",
            code: "Y523201",
            price: 42.0,
            imgLink: "/FirstProductChair.png",
        },
        {
            id: 6,
            name: "Cantilever chair",
            code: "Y523201",
            price: 42.0,
            imgLink: "/FirstProductChair.png",
        },
        {
            id: 7,
            name: "Cantilever chair",
            code: "Y523201",
            price: 42.0,
            imgLink: "/FirstProductChair.png",
        },
    ]);

    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,

        customPaging: (i) => (
            <div
                className={`mt-[53px] h-1  ${
                    i === currentSlide
                        ? "bg-secondary w-6 rounded-sm"
                        : "bg-[#FEBAD7] w-4"
                } `}
            ></div>
        ),
        afterChange: (current) => {
            setCurrentSlide(current / settings.slidesToShow);
        },
    };

    return (
      <section>
        <div className="container mt-56">
            <Slider {...settings}>
                {firstProduct.map((el) => (
                    <FirstProduct product={el} key={el.id} />
                ))}
            </Slider>
            
        </div>
        </section>
    );
}
