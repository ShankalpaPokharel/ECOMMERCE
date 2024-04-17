import React, { useState } from 'react'
import LatestProductItem from './LatestProductItem'

export default function NewArrival() {
    const [products, setProducts] = useState([
        {id:1,name:"Comfort Handy Craft", price:42.00, mrp:65.00, imgLink:"/FirstProductChair.png"},
        {id:2,name:"Comfort Handy Craft", price:42.00, mrp:65.00, imgLink:"/FirstProductChair.png"},
        {id:3,name:"Comfort Handy Craft", price:42.00, mrp:65.00, imgLink:"/FirstProductChair.png"},
        {id:4,name:"Comfort Handy Craft", price:42.00, mrp:65.00, imgLink:"/FirstProductChair.png"},
        {id:5,name:"Comfort Handy Craft", price:42.00, mrp:65.00, imgLink:"/FirstProductChair.png"},
        {id:6,name:"Comfort Handy Craft", price:42.00, mrp:65.00, imgLink:"/FirstProductChair.png"},
    ])
  return (
    <div className='flex flex-wrap gap-9 mt-14'>
       { products.map(el => (
            <LatestProductItem key={el.id} product={el}/>
        )) }
        
    </div>
  )
}
