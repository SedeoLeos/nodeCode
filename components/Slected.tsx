'use client';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

const Selected = ({ value, data }: { value: string, data: string[] }) => {
    const [extend, setExtend] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const toggleExtend = useCallback(() => {
        setExtend((val) => !val);
    }, []);

    // Handle click outside to close the dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) && !buttonRef.current?.contains(event.target as Node)) {
                setExtend(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Calculate dropdown position
    useEffect(() => {
        if (extend && buttonRef.current && dropdownRef.current) {
            const buttonRect = buttonRef.current.getBoundingClientRect();
            const dropdownRect = dropdownRef.current.getBoundingClientRect();
            const bodyRect = document.body.getBoundingClientRect();

            const spaceBelow = bodyRect.bottom - buttonRect.bottom - 10;
            const dropdownHeight = dropdownRect.height;
            const buttonWidth = buttonRect.width;
            const dropdownWidth = dropdownRect.width;

            if (spaceBelow < dropdownHeight) {
                // Position dropdown above the button if there's not enough space below
                dropdownRef.current.style.top = 'auto';
                dropdownRef.current.style.bottom = `${(window.innerHeight - buttonRect.top - window.scrollY) + 10}px`;
            } else {
                // Position dropdown below the button
                dropdownRef.current.style.top = `${(buttonRect.bottom + window.scrollY) + 10}px`;
                dropdownRef.current.style.bottom = 'auto';
            }

            // Center the dropdown horizontally relative to the button
            dropdownRef.current.style.left = `${buttonRect.left + buttonWidth / 2 - dropdownWidth / 2}px`;
        }
    }, [extend]);

    return (
        <div className='relative'>
            <button
                ref={buttonRef}
                onClick={toggleExtend}
                className='px-3 py-2 text-[#364153] bg-[#CED6E1] flex items-center gap-2 rounded-full text-sm'
            >
                <span>{value}</span>
                <Image src="/assets/images/down arrow.svg" width={16} height={16} alt='share image' />
            </button>

            {extend && ReactDOM.createPortal(
                <div
                    ref={dropdownRef}
                    id='magic'
                    className='absolute w-40 bg-white border border-gray-300 rounded-md shadow-lg z-50'
                    style={{
                        top: 'auto',  // Reset top if positioning from bottom
                        bottom: 'auto', // Reset bottom if positioning from top
                        left: 'auto' // Reset left if positioning horizontally
                    }}
                >
                    <ul className='py-1'>
                        {data.map((item, index) => (
                            <li key={index} className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>,
                document.body // Using portal to render the dropdown in the body
            )}
        </div>
    );
};

export default Selected;
