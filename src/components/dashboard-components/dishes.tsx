import React from 'react'
import chevronIcon from '@/assets/icons/chevron-down.svg'
import Image from 'next/image'
import DishItem from './dish-item'

export default function Dishes() {
  return (
    <div className='w-full grid gap-6 h-full' style={{
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'fit-content 1fr'
    }}>
      <div className='flex items-center justify-between' style={{
        gridRow: 'fit-content'
      }}>
        <p className='font-semibold text-xl'>
            Choose Dishes
        </p>

        <div className='p-3.5 h-12 text-sm font-medium w-[6.25rem] cursor-pointer select-none bg-[#1F1D2B] items-center justify-between flex border border-[#393C49]' style={{
            borderRadius: 8
        }}>
            <Image alt='chevron' src={chevronIcon} className='w-4 h-4' />
            Dine In
        </div>
      </div>

      <div className='flex flex-wrap w-full flex-1 gap-x-7 gap-y-6 hide-scrollbar' style={{ 
        overflowY: 'auto',
        maxHeight: '100%',
        gridRow: '1fr',
        paddingBottom: '10rem'
      }}>
        <DishItem />
        <DishItem />
        <DishItem />
        <DishItem />
        <DishItem />
        <DishItem />
        <DishItem />
        <DishItem />
        <DishItem />
        <DishItem />
      </div>
    </div>
  )
}
