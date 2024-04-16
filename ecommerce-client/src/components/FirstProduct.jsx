import React, { useState } from "react";

import { BsCart2 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { SlMagnifierAdd } from "react-icons/sl";

export default function FirstProduct(prod) {
    const product = prod.product;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="w-[270px] h-[361px] shadow-lg hover:bg-[#2F1AC4] transition hover:duration-200 delay-150"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`${isHovered?'px-3 pt-3 pb-1 ':'px-11 pt-11 pb-3'}  h-[236px] bg-[#F6F7FB] `}>

            {isHovered?<div className="flex gap-4  bg-[#F6F7FB]">
                    <div className="w-8 h-8 hover:bg-[#EEEFFB] hover:rounded-full  flex items-center justify-center">
                        <BsCart2 className="text-[#2F1AC4]" />
                    </div>

                    <div className="w-8 h-8 flex items-center justify-center hover:bg-[#EEEFFB] hover:rounded-full">
                        <CiHeart className="text-[#1389FF]" />
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center hover:bg-[#EEEFFB] hover:rounded-full">
                        <SlMagnifierAdd className="text-[#1389FF]" />
                    </div>
                </div>:null}

            
                <div className={`${isHovered?'w-[130px] h-[150px] mx-auto':'w-[178px] h-[178px]'}  `}>
                <img
                    className="object-fill"
                    src={product.imgLink}
                    alt=""
                />
                </div>

                {isHovered ? <div className="flex justify-center">
                <button className="bg-[#08D15F] px-3 py-2 text-xs text-josefin font-bold">View Details</button>
                </div>:null}
                
            </div>
            <div className="space-y-3 text-center flex flex-col py-3  ">
                <p
                    className={`${
                        isHovered ? "text-white" : "text-secondary"
                    } text-[18px]`}
                >
                    {product.name}
                </p>
                <div className="flex justify-center space-x-1">
                    <div className="w-[14px] h-1 rounded-xl bg-[#05E6B7]"></div>
                    <div className="w-[14px] h-1 rounded-xl bg-[#F701A8]"></div>
                    <div
                        className={`w-[14px] h-1 rounded-xl  ${
                            isHovered ? "bg-[#FFEAC1]" : "bg-[#00009D]"
                        }`}
                    ></div>
                </div>
                <p
                    className={`${
                        isHovered ? "text-white" : "text-primary"
                    } text-[14px]`}
                >
                    Code - {product.code}
                </p>
                <p
                    className={`${
                        isHovered ? "text-white" : "text-primary"
                    } text-[14px]`}
                >
                    ${product.price}
                </p>
            </div>
        </div>
    );
}
