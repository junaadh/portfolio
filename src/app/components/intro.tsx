import Image from "next/image"
import memoji from '../../../public/memoji.png';
import iam from '../../../public/i-am.svg';
import name from '../../../public/name.svg';

export default function Intoduction() {
    return (
        <div id="container" className='p-4  w-[80%] sm:w-[600px] md:w-[780px] h-[80%] sm:h-[500px] bg-gradient-to-br from-gray-800 via-slate-700 to-gray-700 dark:from-black dark:via-slate-800 dark:to-bg-gray-800 rounded-2xl shadow-2xl flex flex-col items-center justify-center'>
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
                <p className='px-5 pt-6 text-orange-600/60'>I&apos;m a computer science student currently studying in Taylor&apos;s University. I have an interest in anything technology and specially in the technical know how of things.</p>
            </div>
        </div>
    )
}