import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { FaStar, FaStarHalf } from "react-icons/fa";

export default function ProductPage() {
    const [productDetails, setProductDetails] = useState([])
    const {id} = useParams()
    console.log("Id : ",id )

    let totalStar = new Array(5).fill(null)

    useEffect(() => {
        axios.get(`https://ecommerce-sagartmg2.vercel.app/api/products/${id}`)
        .then((response)=>{
            console.log(response.data.data)
            setProductDetails(response.data.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }, [id])
    
   
  return (
   <>
   {JSON.stringify(productDetails)}
   <div>
    <div className='container shadow-sm'>
        <div>
            <img src={productDetails.image} alt="" />
        </div>
        <div>
        {/* <FaStar />
        <FaStarHalf /> */}
        star 
        {totalStar.map((_, index) => <p key={index}>HI</p>)}
        </div>
        
    </div>
   </div>
   <div className=''>

   </div>
   <div style={{ display: 'inline-block', position: 'relative' }}>
      <FaStar style={{ color: '#ffc107' }} />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '70%', // Adjust the width to change the fill percentage
          overflow: 'hidden',
          color: '#000000'
        }}
      >
        <FaStar />
      </div>
    </div>
   </>
  )
}


