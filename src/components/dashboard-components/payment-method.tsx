import React from 'react'
import Image from 'next/image'
import checkmarkIcon from '@/assets/icons/icon-checkmark-circle.svg'

type props = {
  icon: string,
  methodName: 'Credit Card' | 'Cash' | 'Paypal',
  onClick: (e: 'Credit Card' | 'Cash' | 'Paypal') => void,
  isSelected: boolean
}
export default function PaymentMethod(props: props) {
  return (
    <div 
      onClick={() => props.onClick(props.methodName)} 
      className={`w-[6.8rem] relative h-[4.2rem] gap-0.5 border border-[${ props.isSelected ? 'rgba(171, 187, 194, 0.8)' : '#393C49'}] cursor-pointer rounded-[8px] px-4 py-2.5 flex flex-col items-center justify-center transition-all`}
    >
      { props.isSelected ?
        <Image 
          className='absolute transition-all top-[6px] right-[6px] w-4 h-4' 
          src={checkmarkIcon} 
          alt='selected' 
        />
          :
        null
      }
      <Image 
        className='max-w-6 max-h-6' 
        alt={props.icon} 
        src={props.icon} 
      />
      
      <p className='text-sm font-medium text-[#ABBBC2]'>
        {props.methodName}
      </p>
    </div>
  )
}
