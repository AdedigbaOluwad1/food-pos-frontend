import React from 'react'
import Image from 'next/image'
import Product from '@/assets/product.png'


export default function OrderItem({ lastItem }: { lastItem: boolean }) {
  return (
    <div className='h-32 p-6 flex items-center gap-6 hover:opacity-80 cursor-pointer transition-all' style={{
        borderBottom: !lastItem ? '1px solid #28303F' : 0
    }}>
      <div className='w-20 h-20 bg-light flex items-center justify-center' style={{
        borderRadius: 8,
        aspectRatio: '1/1'
      }}>
        <Image alt='product' src={Product} />
      </div>

      <div className='flex items-start'>
        <div className='flex gap-y-3 gap-x-10 flex-wrap'>
          <p className='text-sm md:text-base' style={{
              width: '100%',
              fontWeight: 700,
              // overflow: 'hidden',
              // whiteSpace: 'nowrap',
              // textOverflow: 'ellipsis',
          }}>
              Nike Air Zoom Pegasus 39
          </p>

          <p className='text-sm md:text-base' style={{
              fontWeight: 500
          }}>
              Size: XL
          </p>

          <p className='text-sm md:text-base' style={{
              fontWeight: 500
          }}>
              Color: Blue
          </p>
        </div>

        <p className='text-sm md:text-base' style={{
            fontWeight: 500
        }}>
            $28.00
        </p>
      </div>
    </div>
  )
}
