import React from 'react'
import { LeftContent } from './LeftContent'
import { RightContent } from './RightContent'

export const Page1Content = () => {
  return (
    <div className='py-10 flex items-center gap-10 h-[90vh]   px-18'>
        <LeftContent/>
        <RightContent/>
      
    </div>
  )
}


