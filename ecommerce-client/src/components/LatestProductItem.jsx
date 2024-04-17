import React from "react";
import { BsCart2 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";


export default function LatestProductItem(prod) {
    const product= prod.product
    return (
        <div className="group w-[360px] min-w-[360px] h-[301px] text-[#2F1AC4] ">
            <div className="bg-[#F7F7F7] hover:bg-white w-[360px] h-[264px] flex justify-around items-end">
                <div className="hidden group-hover:block flex-col pb-9 space-y-3 text-xl">
                    <div className="w-[30px] h-[30px] flex items-center justify-center rounded-full hover:bg-[#EEEFFB]">
                        <BsCart2 />
                    </div>
                    <div className="w-[30px] h-[30px] flex items-center justify-center rounded-full hover:bg-[#EEEFFB]">
                        <CiHeart />
                    </div>
                    <div className="w-[30px] h-[30px] flex items-center justify-center rounded-full hover:bg-[#EEEFFB]">
                        <HiMagnifyingGlassPlus />
                    </div>
                </div>

                <img
                    className="p-4 w-[224px] h-[224px] object-fit"
                    src={product.imgLink}
                    alt=""
                />
            </div>
            <div className="text-primary flex justify-between pt-4">
                <span>{product.name}</span>
                <div className="pr-2 space-x-2">
                    <span>${product.price}</span>
                    <span className="text-secondary line-through">${product.mrp}</span>
                </div>
            </div>
        </div>
    );
}
