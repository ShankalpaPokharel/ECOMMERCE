import React, { useState } from "react";

import { BsCart2 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { SlMagnifierAdd } from "react-icons/sl";

import { useNavigate } from "react-router-dom";

export default function FirstProduct(prod) {
  const product = prod.product;
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate()
  const goToProductPage = () => {
    console.log("Hi")
    const id = product._id
    navigate(`product/${id}`)
  }

  return (
    <div
      className="mb-2 h-[361px] w-[270px] min-w-[270px] shadow-md hover:bg-[#2F1AC4] cursor-pointer z-10 "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={goToProductPage}
    >
      <div
        className={`${isHovered ? "px-3 pb-1 pt-3 " : "px-11 pb-3 pt-11"}  h-[236px] bg-[#F6F7FB] `}
      >
        {isHovered ? (
          <div className="flex gap-4  bg-[#F6F7FB]">
            <div className="flex h-8 w-8 items-center  justify-center hover:rounded-full hover:bg-[#EEEFFB]">
              <BsCart2 className="text-[#2F1AC4]" />
            </div>

            <div className="flex h-8 w-8 items-center justify-center hover:rounded-full hover:bg-[#EEEFFB]">
              <CiHeart className="text-[#1389FF]" />
            </div>
            <div className="flex h-8 w-8 items-center justify-center hover:rounded-full hover:bg-[#EEEFFB]">
              <SlMagnifierAdd className="text-[#1389FF]" />
            </div>
          </div>
        ) : null}

        <div
          className={`${isHovered ? "mx-auto h-[150px] w-[130px]" : "h-[178px] w-[178px]"}  `}
        >
          <img className="object-fill" src={product.image} alt="" />
        </div>

        {isHovered ? (
          <div className="flex justify-center">
            <button className="text-josefin bg-[#08D15F] px-3 py-2 text-xs font-bold">
              View Details
            </button>
          </div>
        ) : null}
      </div>
      <div className="flex flex-col space-y-3 py-3 text-center  ">
        <p
          className={`${
            isHovered ? "text-white" : "text-secondary"
          } text-[18px]`}
        >
          {product.name}
        </p>
        <div className="flex justify-center space-x-1">
          <div className="h-1 w-[14px] rounded-xl bg-[#05E6B7]"></div>
          <div className="h-1 w-[14px] rounded-xl bg-[#F701A8]"></div>
          <div
            className={`h-1 w-[14px] rounded-xl  ${
              isHovered ? "bg-[#FFEAC1]" : "bg-[#00009D]"
            }`}
          ></div>
        </div>
        <p
          className={`${isHovered ? "text-white" : "text-primary"} text-[14px]`}
        >
          Code - {product.code}
        </p>
        <p
          className={`${isHovered ? "text-white" : "text-primary"} text-[14px]`}
        >
          ${product.price}
        </p>
      </div>
    </div>
  );
}
