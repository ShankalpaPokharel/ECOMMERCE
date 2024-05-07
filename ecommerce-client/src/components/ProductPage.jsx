import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


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

  
  
  return (
    <>
      <div>
        <div className="container shadow-sm">
          <div>
            <img src={productDetails.image} alt="" />
          </div>
          <div>
            <Ratings ratingVal={ratingValue}/>
          </div>
        </div>
      </div>
    </>
  );
}
