import React from 'react'
import { ReactFCWithChildren } from '@/react';

const Content :ReactFCWithChildren= (props) => {
  return (
    <div className='bg-white dark:bg-[#1E1E1E] shadow-lg px-2 pt-5 pb-2 w-full flex-col rounded-lg min-h-[500px] max-w-screen-lg'>
        {props.children}
    </div>
  )
}
export default Content
