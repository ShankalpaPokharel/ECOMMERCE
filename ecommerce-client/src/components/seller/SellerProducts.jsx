import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SellerProducts() {
  const [products, setProducts] = useState(null);
  const token = localStorage.getItem("access_token");
  useEffect(() => {
    axios.get("https://ecommerce-sagartmg2.vercel.app/api/products",{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    .then((res) => {

        console.log("Response:", res);
        setProducts(res?.data)
    //     console.log("seller product", res.data);
      })
  }, []);

  return (
    <>
      <div>SellerProducts</div>
      <div>{JSON.stringify(products)}</div>
    </>
  );
}


