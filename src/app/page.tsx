import Image from 'next/image'
import memoji from '../../public/memoji.png';
import iam from '../../public/i-am.svg';
import name from '../../public/name.svg';
import rust from '../../public/Rust.svg';
import ts from '../../public/TypeScript.svg';
import js from '../../public/JS.svg';
import java from '../../public/Java.svg';
import nextjs from '../../public/Next-js.svg';
import css from '../../public/CSS.svg';
import html from '../../public/HTML.svg';
import mysql from '../../public/MySQL.svg';

import github from "../../public/github.svg";
import telegram from "../../public/telegram.svg";
import linkedin from "../../public/linkedin.svg";
import insta from "../../public/instagram.svg";
import x from "../../public/x.svg";

export default function Home() {
    return (
        <main className="flex min-h-screen w-full flex-col items-center overflow-x-hidden overflow-y-scroll bg-gradient-to-br from-black via-slate-800 to bg-gray-800 justify-center sm:p-24">
            <div id="socials" className='w-[80%] sm:w-[600px] h-[20%] sm:h-[90px] bg-gradient-to-b from-slate-800/5 to-slate-800/95 rounded-2xl shadow-2xl flex items-center justify-evenly mb-9'>
                <a href="https://www.instagram.com/junaadh_/" className='flex justify-center items-center h-[40px] w-[40px] rounded-full bg-opacity-[40%] bg-gray-500 my-4 shadow-2xl' target='_blank'>
                <Image
                    src={insta}
                    width={30}
                    height={30}
                    className='fill-white'
                    alt='Instagram'
                />
                </a>
                <a href="https://github.com/junaadh" className='flex justify-center items-center h-[40px] w-[40px] rounded-full bg-opacity-[40%] bg-gray-500 my-4 shadow-2xl' target='_blank'>
                <Image
                    src={github}
                    width={30}
                    height={30}
                    className='fill-white'
                    alt='Github'
                />
                </a>
                <a href="https://t.me/junaadh" className='flex justify-center items-center h-[40px] w-[40px] rounded-full bg-opacity-[40%] bg-gray-500 my-4 shadow-2xl' target='_blank'>
                <Image
                    src={telegram}
                    width={30}
                    height={30}
                    className='fill-white'
                    alt='Telegram'
                />
                </a>
                <a href="https://www.linkedin.com/in/moosa-junaadh-533ab3223" className='flex justify-center items-center h-[40px] w-[40px] rounded-full bg-opacity-[40%] bg-gray-500 my-4 shadow-2xl' target='_blank'>
                <Image
                    src={linkedin}
                    width={30}
                    height={30}
                    className='fill-white'
                    alt='Linkedin'
                />
                </a>
                <a href="https://twitter.com/junaadh" className='flex justify-center items-center h-[40px] w-[40px] rounded-full bg-opacity-[40%] bg-gray-500 my-4 shadow-2xl' target='_blank'>
                <Image
                    src={x}
                    width={30}
                    height={30}
                    className='bg-opacity-[40%]'
                    alt='x'
                />
                </a>
            </div>
            <div id="container" className='p-4  w-[80%] sm:w-[600px] h-[80%] sm:h-[500px] bg-gradient-to-br from-black via-slate-800 to bg-gray-800 rounded-2xl shadow-2xl flex flex-col items-center justify-center'>
                <div id="memoji" className='pb-4'>
                    <Image
                        src={memoji}
                        width={150}
                        height={150}
                        alt='my memoji'
                     />
                </div>
                <div id='name' className='flex flex-col pl-5 sm:items-center sm:justify-center'>
                    <Image src={iam} className='-mb-[20px]' alt="Typing SVG" />
                    <Image src={name} alt="Typing SVG" />
                </div>
                <div id="intro" className='sm:px-5 sm:text-center'>
                    <p className='px-5 pt-6 text-orange-600/60'>I'm a computer science student currently studying in Taylor's University. I have an interest in anything technology and specially in the technical know how of things.</p>
                </div>
            </div>
            <br />
            <div id="techs" className='pt-6 flex flex-col justify-center items-center'>
                <p className='font-bold text-orange-600/60 shadow-xl'>Technologies worked with:</p>
                <br />
                <div className='inline-grid grid-cols-4 sm:inline-flex'>
                    <Image
                        src={rust}
                        width={45}
                        height={45}
                        className='mx-3 mb-4 shadow-2xl hover:animate-bounce'
                        alt='Rust'
                    />
                    <Image
                        src={java}
                        width={45}
                        height={45}
                        className='mx-3 mb-4 shadow-2xl hover:animate-bounce'
                        alt='Java'
                    />
                    <Image
                        src={mysql}
                        width={45}
                        height={45}
                        className='mx-3 mb-4 shadow-2xl hover:animate-bounce'
                        alt='MySQL'
                    />
                    <Image
                        src={html}
                        width={45}
                        height={45}
                        className='mx-3 mb-4 shadow-2xl hover:animate-bounce'
                        alt='HTML5'
                    />
                    <Image
                        src={css}
                        width={45}
                        height={45}
                        className='mx-3 mb-4 shadow-2xl hover:animate-bounce'
                        alt='css'
                    />
                    <Image
                        src={nextjs}
                        width={45}
                        height={45}
                        className='mx-3 mb-4 shadow-2xl hover:animate-bounce'
                        alt='nextjs'
                    />
                    <Image
                        src={js}
                        width={45}
                        height={45}
                        className='mx-3 mb-4 shadow-2xl hover:animate-bounce'
                        alt='JavaScript'
                    />
                    <Image
                        src={ts}
                        width={45}
                        height={45}
                        className='mx-3 mb-4 shadow-2xl hover:animate-bounce'
                        alt='TypeScript'
                    />
                </div>
            </div>
            <div id="projects">

            </div>
        </main>
    )
}
