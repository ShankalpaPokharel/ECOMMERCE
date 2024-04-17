import React from "react";
import NewArrival from "./NewArrival";

export default function LatestProduct() {
    return (
        <section className="container mt-[128px]">
            <div>
                <div className="text-primary font-bold text-josefin text-[42px] text-center">
                    Leatest Products
                </div>
                <ul className="flex gap-[58px] justify-center text-primary mt-5 ">
                    <li className="hover:text-secondary hover:underline underline-offset-8">
                        New Arrival
                    </li>
                    <li className="hover:text-secondary hover:underline underline-offset-8">
                        Best Seller
                    </li>
                    <li className="hover:text-secondary hover:underline underline-offset-8">
                        Featured
                    </li>
                    <li className="hover:text-secondary hover:underline underline-offset-8">
                        Special Offer
                    </li>
                </ul>

                <NewArrival />
            </div>
        </section>
    );
}
