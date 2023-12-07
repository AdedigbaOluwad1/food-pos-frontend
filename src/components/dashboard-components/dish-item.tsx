import React from 'react'
import food from '@/assets/product-images/item.png'
import Image from 'next/image'

export default function DishItem() {
  return (
    <div className='basis-48 grow shrink-0 h-[18.5rem] cursor-pointer flex items-end'>
        <div className='flex items-center w-full flex-col bg-primary min-h-[15rem] rounded-2xl px-6 pb-6 relative'>
            <Image 
                src={food} 
                alt={''} 
                className='w-full max-w-[9.375rem] rounded-full absolute' 
                style={{
                    transform: 'translateY(-40%)'
                }} 
            />  

            <div className='flex flex-col items-center gap-1 mt-auto'>
                <h4 className='text-sm font-medium capitalize text-center mb-2 max-w-[144px]'>
                    Spicy seasoned seafood noodles
                </h4>

                <h4 className='text-sm font-medium text-center max-w-[144px]'>
                    $ 2.29
                </h4>

                <h4 className='text-sm font-medium text-center max-w-[144px] text-[#ABBBC2]'>
                    20 Bowls available
                </h4>
            </div>
        </div>
    </div>
  )
}
