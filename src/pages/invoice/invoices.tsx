import React from 'react'
import DashboardLayout from '@/layouts/dashboard-layout'
import Row from './components/table-row'
import { useSelector } from 'react-redux'
import { state } from '@/data/data'

export default function Invoices() {
    const storeValues = useSelector((store: state) => store)
  return (
    <DashboardLayout>
      <div className='w-full flex flex-col gap-6'>
        <div className='flex mb-4 justify-between items-center'>
          <h3 className='text-xl'>
            Invoices
          </h3>

          <button className='text-sm' style={{
            background: '#606CCB',
            width: 104,
            height: 40,
            borderRadius: 8
          }}>
            New invoice
          </button>
        </div>

        <div className='flex justify-between items-center'>
          <h3 className='text-sm'>
            SUMMARY
          </h3>

          <button className='text-sm flex justify-between items-center p-3' style={{
            border: '1px solid rgba(255, 255, 255, 0.08)',
            width: 134,
            height: 40,
            borderRadius: 8,
          }}>
            This month
            <i className='bi bi-chevron-down' style={{
              lineHeight: 0,
            }}></i>
          </button>
        </div>
        
        <div className='flex gap-6'>
          <div className='h-[5.5rem] bg-primary px-4 py-5 flex gap-4 items-center' style={{
            border: '1px solid rgba(255, 255, 255, 0.08)',
            flexBasis: '300px',
            flexGrow: 1,
            flexShrink: 0,
            borderRadius: 10
          }}>
            <div className='w-11 h-11 items-center flex justify-center' style={{
              backdropFilter: 'blur(4px)',
              background: 'rgba(255, 255, 255, 0.04)',
              borderRadius: 8,
              lineHeight: 0
            }}>
              <i className='bi bi-clock-history'></i>
            </div>

            <div className='flex flex-col gap-0.5'>
              <p className='text-xs' style={{
                color: 'rgba(255, 255, 255, 0.5)'
              }}>
                Pending
              </p>

              <h3 className='text-2xl'>
                $2,300
              </h3>
            </div>
          </div>

          <div className='h-[5.5rem] bg-primary px-4 py-5 flex gap-4 items-center' style={{
            border: '1px solid rgba(255, 255, 255, 0.08)',
            flexBasis: '300px',
            flexGrow: 1,
            flexShrink: 0,
            borderRadius: 10
          }}>
            <div className='w-11 h-11 items-center flex justify-center' style={{
              backdropFilter: 'blur(4px)',
              background: 'rgba(255, 255, 255, 0.04)',
              borderRadius: 8,
              lineHeight: 0
            }}>
              <i className='bi bi-coin'></i>
            </div>

            <div className='flex flex-col gap-0.5'>
              <p className='text-xs' style={{
                color: 'rgba(255, 255, 255, 0.5)'
              }}>
                Paid
              </p>

              <h3 className='text-2xl'>
                $5,700
              </h3>
            </div>
          </div>

          <div className='h-[5.5rem] bg-primary px-4 py-5 flex gap-4 items-center' style={{
            border: '1px solid rgba(255, 255, 255, 0.08)',
            flexBasis: '300px',
            flexGrow: 1,
            flexShrink: 0,
            borderRadius: 10
          }}>
            <div className='w-11 h-11 items-center flex justify-center' style={{
              backdropFilter: 'blur(4px)',
              background: 'rgba(255, 255, 255, 0.04)',
              borderRadius: 8,
              lineHeight: 0
            }}>
              <i className='bi bi-check-circle'></i>
            </div>

            <div className='flex flex-col gap-0.5'>
              <p className='text-xs' style={{
                color: 'rgba(255, 255, 255, 0.5)'
              }}>
                Completed
              </p>

              <h3 className='text-2xl'>
                $122,300
              </h3>
            </div>
          </div>
        </div>

        <div className='bg-primary w-full' style={{
          borderRadius: 8,
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <table>
            <thead>
              <tr className='h-11'>
                <td className='px-4 pt-2 pb-1.5 text-sm font-bold' width={'10%'}>
                  S/N
                </td>

                <td className='px-4 pt-2 pb-1.5 text-sm font-bold' width={'18%'}>
                  Invoice ID
                </td>

                <td className='px-4 pt-2 pb-1.5 text-sm font-bold' width={'18%'}>
                  Customer Name
                </td>

                <td className='px-4 pt-2 pb-1.5 text-sm font-bold' width={'17%'}>
                  Date
                </td>

                <td className='px-4 pt-2 pb-1.5 text-sm font-bold' width={'16%'}>
                  Total cost
                </td>

                <td className='px-4 pt-2 pb-1.5 text-sm font-bold' width={'16%'}>
                  Status
                </td>

                <td className='px-4 pt-2 pb-1.5 text-sm font-bold' width={'5%'}>
                  
                </td>
              </tr>
            </thead>

            <tbody>
              {
                storeValues.generalState.invoices.map((e, index) => {
                  return (
                    <Row
                      index={index + 1}
                      key={e._id.$oid} 
                      _id={e._id} 
                      created_at={e.created_at} 
                      items={e.items} 
                      paid={e.paid} 
                      user_id={e.user_id} 
                    />
                  )
                })
              } 
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  )
}
