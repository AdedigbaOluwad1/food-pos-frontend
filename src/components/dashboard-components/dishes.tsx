import React from 'react'
import chevronIcon from '@/assets/icons/chevron-down.svg'
import Image from 'next/image'
import DishItem from './dish-item'
import Loader from '@/components/general/loader'
import { useSelector } from 'react-redux'
import { IState } from '@/data/data'

type props = {
  loading: boolean
}

export default function Dishes(props: props) {
  const state = useSelector((state: IState) => state.dashboardState)

  return (
    <div className='w-full grid gap-6 h-full' style={{
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'auto 1fr'
    }}>
      <div className='flex items-center justify-between'>
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

      <div className='flex flex-wrap w-full flex-1 gap-x-7 gap-y-7 hide-scrollbar justify-center' style={{ 
        overflowY: 'auto',
        maxHeight: '100%',
        paddingBottom: '10rem'
      }}>
        {
          props.loading ? 
            <Loader />
              : 
            <>
            {
              state.dishes.map((e) => {
                return <DishItem dish={e} key={e._id} />
              })
            }
          </>
        }
        
      </div>
    </div>
  )
}
