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

