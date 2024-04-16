import React, { useState } from "react";

import { Header, FirstProductGroup, Hero } from "../components";

export default function Home() {
    return (
        <>
            <Header />

            {/* Hero Part */}
            <Hero />

            {/* first product group */}
            <FirstProductGroup />

            {/* Latest Products  */}
            <section className="container mt-[70px]">
                <div>
                    <div className="text-primary text-josefin text-[42px] text-center">Leatest Products</div>
                    <ul className="flex gap-[58px] justify-center text-primary mt-5 ">
                        <li className="hover:text-secondary hover:underline underline-offset-8">New Arrival</li>
                        <li className="hover:text-secondary hover:underline underline-offset-8">Best Seller</li>
                        <li className="hover:text-secondary hover:underline underline-offset-8">Featured</li>
                        <li className="hover:text-secondary hover:underline underline-offset-8">Special Offer</li>
                    </ul>

                    <div className="w-[360px] min-w-[360px] h-[301px]">
                        <div className="bg-[#F7F7F7] w-[360px] h-[264px] flex justify-center items-end">

                            


                            <img className="p-4 w-[224px] h-[224px] object-fill" src="/FirstProductChair.png" alt="" />
                        </div>
                        <div className="text-primary flex justify-between">
                            <span>Comfort Handy Craft</span>
                            <div className="pr-2 space-x-2">
                                <span>$42.00</span>
                                <span className="text-secondary line-through">$65.00</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>














            <div className="mt-40">
                primary: "#7E33E0", "primary-dark": "#0D0E43", "primary-light":
                "#E7E6EF", secondary: "#FB2E86",
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
            </div>
        </>
    );
}
