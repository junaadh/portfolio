'use client';

import { useEffect, useState } from "react";
import Moon from '../../../public/moon.fill.svg'
import Auto from '../../../public/autostartstop.svg'
import Sun from '../../../public/sun.min.svg'
import Image from "next/image";

export default function Slider() {

    const [isActive, setIsActive] = useState('')

    const init = () => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    const themeChangeHandler = (e: MediaQueryListEvent) => {
        e.matches ? init() : init()
    }

    const selectOption = (position: string) => {
        switch (position) {
            case "left":
                localStorage.theme = 'light'
                setIsActive(localStorage.theme)
                break;
            case "middle":
                localStorage.removeItem('theme')
                setIsActive('')
                break;
            case "right":
                localStorage.theme = 'dark'
                setIsActive(localStorage.theme)
                break;
            default:
                break
        }
        init()
    }

    useEffect(() => {
        init()

        const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
        systemDarkMode.addEventListener('change', themeChangeHandler)

    }, [])
    
    return (
        <>
            <div className="h-24 w-full bg-transparent sm:-mt-9 -mb-12 flex justify-center items-center">
            <div className="flex justify-center">
                <div className="flex justify-center items-center w-full">
                    <button
                        className={`w-auto h-auto p-2 ${isActive === 'light' ? 'bg-orange-800' : 'bg-slate-700'} justify-center items-center rounded-l-2xl`}
                        onClick={() => selectOption('left')}
                    >
                        <Image 
                            src={Sun} 
                            alt="Light Mode" 
                            height={25}
                        />
                    </button>
                    <button 
                        className={`w-auto h-auto p-2  ${isActive === '' ? 'bg-green-800' : 'bg-slate-700'} justify-center items-center`}
                        onClick={() => selectOption('middle')}
                    >
                        <Image 
                            src={Auto} 
                            alt="System Default" 
                            height={25}
                        />
                    </button>
                    <button 
                        className={`w-auto h-auto p-2  ${isActive === 'dark' ? 'bg-indigo-800' : 'bg-slate-700'} justify-center items-center rounded-r-2xl`}
                        onClick={() => selectOption('right')}
                    >
                        <Image 
                            src={Moon} 
                            alt="Dark Mode" 
                            height={25}
                        />
                    </button>
                </div>
            </div>
            </div>
        </>
    )
}
