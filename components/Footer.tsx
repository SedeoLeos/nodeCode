'use client'
import React from 'react'
import Langage from './Langage'
import Themed from './Themed'

import Shared from './Shared'
import ColladeLink from './ColladeLink'

export default function Footer() {
    return (
        <div className='flex justify-between items-center p-5'>
            <div className='flex gap-10 items-center'>
                <Themed />
                <Langage />

            </div>
            <div className='flex gap-10 items-center'>
                <ColladeLink />
                <Shared />
            </div>
    </div>
    )
}
