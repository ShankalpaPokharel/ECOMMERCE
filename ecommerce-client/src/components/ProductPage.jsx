import React, { useEffect, useState } from "react";
import axios from "axios";
import { json, useParams } from "react-router-dom";

import { BsCart2 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";

import Ratings from "./Ratings";

export default function ProductPage() {
  const [productDetails, setProductDetails] = useState({});
  const [ratingValue, setRatingValue] = useState(5);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://ecommerce-sagartmg2.vercel.app/api/products/${id}`)
      .then((response) => {
        const data = response.data.data;
        setProductDetails(data);
        setRatingValue(data.avg_rating);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  console.log(productDetails);

  return (
    <>
      <div>
        <div className="px-2 shadow-sm md:container">
          <div className=" h-56 max-h-56 w-full">
            <img
              src={productDetails.image}
              alt=""
              className="h-full w-full object-contain p-0"
            />
          </div>
          <div>
            <span>{productDetails.name}</span>
            <div className="flex items-center">
              <Ratings ratingVal={ratingValue} /> (
              {productDetails.reviews?.length})
            </div>
            Color
            <p>{productDetails.description}</p>
            <div className="flex items-center">
                <button>Add To Cart</button> 
                <div className="w-[30px] h-[30px] flex items-center justify-center rounded-full hover:bg-[#EEEFFB]">
                        <CiHeart />
                    </div>
            </div>
            {/* <p className="capitalize">Catagories: {productDetails.categories[0]}</p> */}
            <p>Tags : </p>
            <div>
                <p>Share</p>

            </div>
            


          </div>
        </div>
      </div>
    </>
  );
}
