import React from 'react'
import { ArrowUpRight } from 'lucide-react'


export const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3  '  >
        <div className='p-6'>
            <h3 className=' mb-7 leading-normal text-5xl font-bold'>Prospecitive <br/> <span className='bg-gray-200 rounded-full px-3'>Customer</span>  <br />segmentation </h3>
            <p className='text-xl font-medium text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel at eligendi voluptas facilis adipisci necessitatibus enim sed autem, repudiandae dolore.</p>
        </div>
        <div>
  <ArrowUpRight className="w-32 h-32 text-black" />
  </div>

      
    </div>
  )
}

