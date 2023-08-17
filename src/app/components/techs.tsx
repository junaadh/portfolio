import Image from "next/image"
import rust from '../../../public/Rust.svg';
import ts from '../../../public/TypeScript.svg';
import js from '../../../public/JS.svg';
import java from '../../../public/Java.svg';
import nextjs from '../../../public/Next-js.svg';
import css from '../../../public/CSS.svg';
import html from '../../../public/HTML.svg';
import mysql from '../../../public/MySQL.svg';

Image

export default function Techs() {
    return (
        <div id="techs" className='pt-6 flex flex-col justify-center items-center'>
            <p className='font-bold text-xl text-orange-600/60 shadow-xl'>Technologies worked with:</p>
            <br />
            <div className='inline-grid grid-cols-4 sm:inline-flex'>
                <Image
                    src={rust}
                    width={45}
                    height={45}
                    className='mx-3 mb-4 shadow-2xl hover:animate-bounce md:w-[65px]'
                    alt='Rust'
                />
                <Image
                    src={java}
                    width={45}
                    height={45}
                    className='mx-3 mb-4 shadow-2xl hover:animate-bounce md:w-[65px]'
                    alt='Java'
                />
                <Image
                    src={mysql}
                    width={45}
                    height={45}
                    className='mx-3 mb-4 shadow-2xl hover:animate-bounce md:w-[65px]'
                    alt='MySQL'
                />
                <Image
                    src={html}
                    width={45}
                    height={45}
                    className='mx-3 mb-4 shadow-2xl hover:animate-bounce md:w-[65px]'
                    alt='HTML5'
                />
                <Image
                    src={css}
                    width={45}
                    height={45}
                    className='mx-3 mb-4 shadow-2xl hover:animate-bounce md:w-[65px]'
                    alt='css'
                />
                <Image
                    src={nextjs}
                    width={45}
                    height={45}
                    className='mx-3 mb-4 shadow-2xl hover:animate-bounce md:w-[65px]'
                    alt='nextjs'
                />
                <Image
                    src={js}
                    width={45}
                    height={45}
                    className='mx-3 mb-4 shadow-2xl hover:animate-bounce md:w-[65px]'
                    alt='JavaScript'
                />
                <Image
                    src={ts}
                    width={45}
                    height={45}
                    className='mx-3 mb-4 shadow-2xl hover:animate-bounce md:w-[65px]'
                    alt='TypeScript'
                />
            </div>
        </div>
    )
}