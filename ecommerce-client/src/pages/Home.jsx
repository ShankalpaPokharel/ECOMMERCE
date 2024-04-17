import React, { useState } from "react";

import {
    Header,
    FirstProductGroup,
    Hero,
    LatestProduct,
    ShopexOffer,
    UniqueLatest
} from "../components";

export default function Home() {
    return (
        <>
            <Header />

            {/* Hero Part */}
            <Hero />

            {/* first product group */}
            <FirstProductGroup />
            {/* <br /> */}
            {/* Latest Products  */}
            <LatestProduct />

            <ShopexOffer />

            <UniqueLatest/>
        </>
    );
}
