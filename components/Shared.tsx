import Image from 'next/image'
import React from 'react'

export default function Shared() {
    return (
        <button className='bg-gray-600 outline-0 rounded-full py-2 px-5 justify-center items-center flex gap-2 text-white'>
            <Image src="/assets/images/Share.svg" width={16} height={16} alt='share image' />
            <span>
                Share
            </span>
        </button>
    )
}
