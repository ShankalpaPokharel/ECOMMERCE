import React from 'react'

import { FaFacebookF, FaInstagram,FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <section className=' text-sub-text'>
        {/* top footer  */}
        <div  className='bg-[#EEEFFB]'>
        <div className='container py-24  flex justify-between'>

            {/* left part  */}
            <div className='space-y-8'>
                <span className='text-4xl font-bold text-black'>Hekto</span>

                <form className='w-[376px] h-11 bg-white rounded flex' action="">
                    <input className='flex-1 pl-3 h-full w-full placeholder:text-[20px] rounded focus:outline-none' type="text" placeholder='Enter Email Address'/>
                    <button className='bg-secondary w-[134px] h-full rounded'>Sign Up</button>
                </form>
                <div className='flex flex-col'>
                <span>Contact Info</span>
                <span>17 Princess Road, London, Greater London NW1 8JR, UK</span>
                </div>
                
            </div>

            <div>
                <span className='font-semibold text-josefin text-[22px] text-black'>Catagories</span>
                <ul className='pt-[42px] text-sub-text space-y-5'>
                    <li>Laptops & Computers</li>
                    <li>Cameras & Photography</li>
                    <li>Smart Phones & Tablets</li>
                    <li>Video Games & Consoles</li>
                    <li>WaterProof Headphones</li>
                </ul>
            </div>

            <div>
                <span className='font-semibold text-josefin text-[22px] text-black'>Customer Care</span>
                <ul className='pt-[42px] text-sub-text space-y-5'>
                    <li>My Account</li>
                    <li>Discount</li>
                    <li>Returns</li>
                    <li>Orders History</li>
                    <li>Order Tracking</li>
                </ul>
            </div>

            <div>
                <span className='font-semibold text-josefin text-[22px] text-black'>Pages</span>
                <ul className='pt-[42px] text-sub-text space-y-5'>
                    <li>Blog</li>
                    <li>Browse the Shop</li>
                    <li>Category</li>
                    <li>Pre-Built Pages</li>
                    <li>Visual Composer Elements</li>
                    <li>Woo Commerce pages</li>
                </ul>
            </div>




        </div>
        </div>

        {/* buttom footer  */}
        <div className='bg-[#E7E4F8] '>
            <div className='container flex justify-around py-4 items-center'>
            <span className='text-sub-text'>©Webecy - All Rights Reserved</span>
            <div className='flex space-x-[10px]'>

                <div className='w-8 h-8 rounded-full flex justify-center items-center bg-[#151875]'>
                <FaFacebookF className='text-white' />
                </div>
                <div className='w-8 h-8 rounded-full flex justify-center items-center bg-[#151875]'>
                <FaInstagram  className='text-white' />
                </div>
                <div className='w-8 h-8 rounded-full flex justify-center items-center bg-[#151875]'>
                <FaTwitter  className='text-white' />
                </div>

            </div>
            </div>
        </div>

    </section>
  )
}
