import Image from "next/image"
import rust from '../../../public/Rust.svg';
import ts from '../../../public/TypeScript.svg';
import js from '../../../public/JS.svg';
import java from '../../../public/Java.svg';
import nextjs from '../../../public/Next-js.svg';
import css from '../../../public/CSS.svg';
import html from '../../../public/HTML.svg';
import mysql from '../../../public/MySQL.svg';
import swift from '../../../public/swift.svg'
import mongodb from '../../../public/mongodb-icon.svg'

Image

export default function Techs() {
    return (
        <>
            <p className='pt-6 font-bold text-xl text-orange-600/60'>Technologies worked with:</p>
            <div id="techs" className='flex flex-col justify-center items-center w-full'>
                <br />
                <div className='lg:flex inline-grid grid-cols-5 md:grid-cols-7'>
                    <Image
                        src={rust}
                        width={65}
                        className='mx-3 mb-4 hover:animate-bounce h-auto'
                        alt='Rust'
                    />
                    <Image
                        src={java}
                        width={65}
                        className='mx-3 mb-4 hover:animate-bounce h-auto'
                        alt='Java'
                    />
                    <Image
                        src={mysql}
                        width={65}
                        className='mx-3 mb-4 hover:animate-bounce h-auto'
                        alt='MySQL'
                    />
                    <Image
                        src={html}
                        width={65}
                        className='mx-3 mb-4 hover:animate-bounce h-auto'
                        alt='HTML5'
                    />
                    <Image
                        src={css}
                        width={65}
                        className='mx-3 mb-4 hover:animate-bounce h-auto'
                        alt='css'
                    />
                    <Image
                        src={nextjs}
                        width={65}
                        className='mx-3 mb-4 hover:animate-bounce h-auto'
                        alt='nextjs'
                    />
                    <Image
                        src={js}
                        width={65}
                        className='mx-3 mb-4 hover:animate-bounce h-auto'
                        alt='JavaScript'
                    />
                    <Image
                        src={ts}
                        width={65}
                        className='mx-3 mb-4 hover:animate-bounce h-auto'
                        alt='TypeScript'
                    />
                    <Image
                        src={swift}
                        width={65}
                        className='mx-3 mb-4 hover:animate-bounce h-auto'
                        alt='Swift'
                    />
                    <Image
                        src={mongodb}
                        width={65}
                        className='mx-3 mb-4 hover:animate-bounce h-auto'
                        alt='MongoDB'
                    />
                </div>
            </div>
        </>
    )
}