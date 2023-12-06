import React, { useState, useEffect } from 'react'

interface tabOptions {
    tabValue: number,
    tabName: string
}

interface props {
    tabOptions: tabOptions[]
    onChange: (param: number | undefined) => void
}

export default function Tabs(props: props) {
    const [activeTab, setActiveTab] = useState<tabOptions>()

    useEffect(() => {
        props.onChange(activeTab?.tabValue)
    }, [activeTab])

  return (
    <div className='h-9 flex items-center gap-8 border-b border-[#393C49]'>
      { props.tabOptions.map((e) => {
            return (
                <div 
                    className='h-full flex flex-col justify-between cursor-pointer' 
                    key={e.tabName} 
                    onClick={() => setActiveTab(e)}
                >
                    <p className={`text-sm transition-all select-none font-semibold ${activeTab === e ? 'text-secondary' : ''}`}>
                        {e.tabName}
                    </p>
                    { activeTab === e ?
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
