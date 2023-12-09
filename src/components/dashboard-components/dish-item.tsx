import React from 'react'
import food from '@/assets/product-images/item.png'
import Image from 'next/image'
import { IDishes } from '@/data/data'

type props = {
    dish: IDishes
}

export default function DishItem(props: props) {
  return (
    <div className='basis-60 mt-16 grow shrink-0 cursor-pointer flex items-end' style={{
        maxWidth: 250
    }}>
        <div className='flex items-center w-full flex-col bg-primary min-h-[15rem] rounded-2xl px-6 pb-6 relative'>
            <div className='w-2/3 absolute' style={{
                transform: 'translateY(-30%)',
                aspectRatio: '1/1'
            }}>
                <Image
                    fill={true} 
                    loading='lazy'
                    src={props.dish.image} 
                    alt={''} 
                    className=' rounded-full'
                />    
            </div>

            <div className='flex flex-col items-center justify-end gap-1 w-full mt-auto' style={{
                aspectRatio: '1/1.17'
            }}>
                <h4 className='text-base font-medium capitalize text-center mb-2 max-w-[144px]'>
                    {props.dish.name}
                </h4>

                <h4 className='text-sm font-medium text-center max-w-[144px]'>
                    $ {props.dish.price.toLocaleString()}
                </h4>

                <h4 className='text-sm font-medium text-center max-w-[144px] text-[#ABBBC2]'>
                    {props.dish.quantity} Bowls available
                </h4>
            </div>
        </div>
    </div>
  )
}
