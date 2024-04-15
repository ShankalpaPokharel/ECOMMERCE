import React from 'react'

export default function FirstProduct(prod) {
    const product = prod.product;
   
  return (
    <>
    <div className='w-[270px] h-[361px] shadow-lg'>
        <div className='px-11 pt-11 pb-3 h-[236px] bg-[#F6F7FB]'>
            <img className='w-[178px] h-[178px] object-fill' src={product.imgLink} alt="" />
        </div>
        <div className='space-y-3 text-center flex flex-col py-3'>
            <span className='text-secondary text-[18px]'>{product.name}</span>
            <div className='flex justify-center space-x-1'>
                <div className='w-[14px] h-1 rounded-xl bg-[#05E6B7]'></div>
                <div className='w-[14px] h-1 rounded-xl bg-[#F701A8]'></div>
                <div className='w-[14px] h-1 rounded-xl bg-[#00009D]'></div>
            </div>
            <span className='text-primary text-[14px]'>Code - {product.code}</span>
            <span className='text-primary text-[14px]'>${product.price}</span>
        </div>
    </div>
    </>
  )
}
