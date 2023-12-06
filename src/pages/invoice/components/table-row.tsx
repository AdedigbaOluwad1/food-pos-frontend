import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { state, IInvoiceObject } from '@/data/data'

interface prop extends IInvoiceObject {
    index: number
}
export default function Row(props: prop) {
    const date = new Date(props.created_at.$date).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    })
  return (
    <tr className='h-16'>
        <td className='px-4 pt-2 pb-1.5 text-sm' width={'10%'}>
            { props.index }
        </td>

        <td className='px-4 pt-2 pb-1.5 text-sm ' width={'18%'}>
            Invoice ID
        </td>

        <td className='px-4 pt-2 pb-1.5 text-sm ' width={'18%'}>
            Customer Name
        </td>

        <td className='px-4 pt-2 pb-1.5 text-sm ' width={'17%'}>
            { date }
        </td>

        <td className='px-4 pt-2 pb-1.5 text-sm ' width={'16%'}>
            $1,500
        </td>

        <td className='px-4 pt-2 pb-1.5' width={'16%'}>
            <p className='px-3 py-0.5 flex items-center justify-center text-xs' style={{
                background: props.paid ? '#359A73' : '#CB8A14',
                width: 'fit-content',
                minHeight: 22,
                borderRadius: 12,
                fontStyle: 'italic'
            }}>
                { props.paid ? 'Paid' : 'Pending' }
            </p>
        </td>

        <td className='px-4 pt-2 pb-1.5 text-sm ' width={'5%'}>
            <button>
                <i className='bi bi-three-dots'></i>
            </button>
        </td>
    </tr>
  )
}
