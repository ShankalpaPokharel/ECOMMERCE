import React from 'react'

export default function UniqueLatest() {
  return (
    <section className=" bg-[#F1F0FF] mt-[136px] px-12 mb-12">
                <div className="container flex items-center">

                
                <div className="w-[558px] h-[550px]">
                    <img className="object-cover" src="/Group_153.png" alt="" />
                </div>
                <div className="space-y-9">
                    <span className="text-josefin font-bold text-4xl text-primary">Unique Features of leatest & Trending Poducts</span>
                    <ul className="text-[#ACABC3] list-disc pl-5 space-y-3">
                        <li className="marker:text-secondary">
                            ALL Frames constructed with hardwood solids and
                            laminates
                        </li>
                        <li className="marker:text-[#2B2BF5]">
                            Reinforced with double wood dowels, glue, screw -
                            nails corner blocks and machine nails
                        </li>
                        <li className="marker:text-[#2BF5CC]">
                            Arms, backs and seats are structurally reinforced
                        </li>
                    </ul>
                    <div className="flex">
                        <button className="bg-secondary w-[156px] h-[46px] text-josefin font-semibold">Add To Cart</button>
                        <div className="text-primary flex flex-col ml-5">
                            <span>B&B Italian Sofa</span>
                            <span className="font-semibold">$32.00</span>
                        </div>
                    </div>
                </div>
                </div>
            </section>
  )
}
