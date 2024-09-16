import React from 'react'
import Logo from './Logo'
import Title from './Title'
import Subtiitle from './Subtiitle'

export default function index() {
    return (
        <div className='flex flex-col justify-center w-full items-center gap-10'>
            <Logo />
            <Subtiitle />
            <Title />
        </div>
    )
}
