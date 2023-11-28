import { useState } from 'react'
import dot from '@/assets/Dots.svg'
import Image from 'next/image'
import Visa from '@/assets/Visa.png'

export default function PaymentMethod() {
  const [checkedState, setCheckedState] = useState(false)
  return (
    <div onClick={() => setCheckedState((prev) => !prev)} className={`w-1/2 p-4 gap-4 flex justify-between cursor-pointer border-2 transition-all ${checkedState ? 'border-primary' : 'border-border-color'}`} style={{
      height: '4.75rem',
      borderRadius: 12,
    }}>
      <input type='radio' checked={checkedState} onChange={(e) => setCheckedState(e.target.checked)} className='accent-primary self-start cursor-pointer' />
      <div className='flex flex-wrap justify-between items-center w-20'>
        <p className='text-base font-bold text-primary w-full'>
          **** 8304
        </p>
        <p className='text-grey font-medium text-base'>
          Visa
        </p>
        <Image alt='dot' src={dot} />
        <button className='text-grey border-0 font-medium text-base'>
          Edit
        </button>
      </div>
      <Image src={Visa} alt='visa' className='self-center ml-auto' />
    </div>
  )
}
