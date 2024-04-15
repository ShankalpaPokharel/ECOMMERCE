import React from "react";
import { CiMail } from "react-icons/ci";

export default function Home() {
    return (
        <>
            <header>
                <nav className="bg-[#7E33E0] text-white flex justify-between pt-[13px] py-[14px] px-[377px] font-semibold text-base">
                    <div className="gap-3">
                        <CiMail className="inline-block" />
                        abc@gmail.com
                    </div>

                    <div className="flex gap-3">
                        <span>login</span>
                        <span>cart</span>
                    </div>
                </nav>
            </header>
            <p className="font-lato"> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellat voluptatem excepturi natus tempore fugiat, laboriosam quo? Alias, laudantium asperiores pariatur, nesciunt quo exercitationem officia fugiat tempore quaerat, numquam iusto.
            </p>
        </>
    );
}
