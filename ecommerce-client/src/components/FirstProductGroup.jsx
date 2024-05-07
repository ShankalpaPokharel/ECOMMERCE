import React, { useEffect, useState } from "react";

import FirstProduct from "./FirstProduct";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";


// import Skeleton from "react-loading-skeleton";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function FirstProductGroup() {
  // const [firstProduct, setFirstProduct] = useState([
  //     {
  //         id: 1,
  //         name: "Cantilever chair",
  //         code: "Y523201",
  //         price: 42.0,
  //         imgLink: "/FirstProductChair.png",
  //     },
  //     {
  //         id: 2,
  //         name: "Cantilever chair",
  //         code: "Y523201",
  //         price: 42.0,
  //         imgLink: "/FirstProductChair.png",
  //     },
  //     {
  //         id: 3,
  //         name: "Cantilever chair",
  //         code: "Y523201",
  //         price: 42.0,
  //         imgLink: "/FirstProductChair.png",
  //     },
  //     {
  //         id: 4,
  //         name: "Cantilever chair",
  //         code: "Y523201",
  //         price: 42.0,
  //         imgLink: "/FirstProductChair.png",
  //     },
  //     {
  //         id: 5,
  //         name: "Cantilever chair",
  //         code: "Y523201",
  //         price: 42.0,
  //         imgLink: "/FirstProductChair.png",
  //     },
  //     {
  //         id: 6,
  //         name: "Cantilever chair",
  //         code: "Y523201",
  //         price: 42.0,
  //         imgLink: "/FirstProductChair.png",
  //     },
  //     {
  //         id: 7,
  //         name: "Cantilever chair",
  //         code: "Y523201",
  //         price: 42.0,
  //         imgLink: "/FirstProductChair.png",
  //     },
  //     {
  //         id: 4,
  //         name: "Cantilever chair",
  //         code: "Y523201",
  //         price: 42.0,
  //         imgLink: "/FirstProductChair.png",
  //     },
  //     {
  //         id: 5,
  //         name: "Cantilever chair",
  //         code: "Y523201",
  //         price: 42.0,
  //         imgLink: "/FirstProductChair.png",
  //     },
  //     {
  //         id: 6,
  //         name: "Cantilever chair",
  //         code: "Y523201",
  //         price: 42.0,
  //         imgLink: "/FirstProductChair.png",
  //     },
  //     {
  //         id: 7,
  //         name: "Cantilever chair",
  //         code: "Y523201",
  //         price: 42.0,
  //         imgLink: "/FirstProductChair.png",
  //     },
  // ]);

  const [isLoading, setIsLoading] = useState(true);
  const [firstProduct, setFirstProduct] = useState();
  useEffect(() => {
    axios
      .get("https://ecommerce-sagartmg2.vercel.app/api/products/trending")
      .then((response) => {
        setFirstProduct(response.data.data);
        console.log(response.data.data);
        setIsLoading(false);
      });
  }, []);

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
            ? "w-6 rounded-sm bg-secondary"
            : "w-4 bg-[#FEBAD7]"
        } `}
      ></div>
    ),
    afterChange: (current) => {
      setCurrentSlide(current / settings.slidesToShow);
    },
  };

  return (
    <section>




      {isLoading ? (
        <div className="container mt-56 grid grid-cols-4">
       <Skeleton className="w-[270px] h-[361px]" />
       <Skeleton className="w-[270px] h-[361px]" />
       <Skeleton className="w-[270px] h-[361px]" />
       <Skeleton className="w-[270px] h-[361px]" />
       </div>
      ) : (
        <div className="container mt-56">
          <Slider {...settings}>
            {firstProduct.map((el) => (
              <FirstProduct product={el} key={el._id} />
            ))}
          </Slider>
        </div>
      )}

      
    </section>
  );
}
