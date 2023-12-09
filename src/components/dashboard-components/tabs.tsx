import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { IState } from '@/data/data'

interface tabOptions {
    tabValue: number,
    tabName: string
}

interface props {
    tabOptions: tabOptions[]
    onChange: (param: string | undefined) => void
}

export default function Tabs(props: props) {
    const activeTab = useSelector((state: IState) => state.dashboardState.selectedDishCategory)

    const handleTabChange = (e: string) => {
        props.onChange(e)
    }

  return (
    <div className='h-9 flex items-center gap-8 border-b border-[#393C49]' style={{
        height: '2.25rem'
    }}>
      { props.tabOptions.map((e) => {
            return (
                <div 
                    className='h-full flex flex-col justify-between cursor-pointer' 
                    key={e.tabName} 
                    onClick={() => handleTabChange(e.tabName)}
                >
                    <p className={`text-sm transition-all select-none font-semibold ${activeTab === e.tabName ? 'text-secondary' : ''}`}>
                        {e.tabName}
                    </p>
                    { activeTab === e.tabName ?
                        <div 
                            className='bg-secondary transition-all' 
                            style={{
                                height: '0.1875rem',
                                width: '2.3125rem',
                                borderRadius: 24,
                                marginBottom: '-0.09375rem'
                            }}
                        >
                        </div>
                            :
                        null
                    }
                </div> 
            )
        })   
      }
    </div>
  )
}
