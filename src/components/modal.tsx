import React from 'react'

export default function ModalComponent({ children }: { children: any}) {
  return (
    <div 
        data-te-modal-init
        className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="leftTopModal"
        tabIndex={-1}
        aria-labelledby="leftTopModalLabel"
        aria-hidden="true"
    >
      {...children}
    </div>
  )
}
