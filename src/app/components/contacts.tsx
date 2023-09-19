import Image from "next/image"
import github from "../../../public/github.svg";
import telegram from "../../../public/telegram.svg";
import linkedin from "../../../public/linkedin.svg";
import insta from "../../../public/instagram.svg";
import x from "../../../public/x.svg";
import email from '../../../public/email.svg';

Image

export default function Contacts() {
    return (
        <div id="socials" className='w-[80%] sm:w-[600px] md:w-[780px] h-[20%] sm:h-[90px] bg-gradient-to-br from-gray-800 via-slate-700 to-gray-700 dark:from-black dark:via-slate-800 dark:to-bg-gray-800 rounded-2xl shadow-2xl flex items-center justify-evenly my-9'>
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
            <a href="mailto:junaadh.02@gmail.com?subject=Website:%20" className='flex justify-center items-center h-[40px] w-[40px] rounded-full bg-opacity-[40%] bg-gray-500 my-4 shadow-2xl' target='_blank'>
            <Image 
                src={email}
                width={30}
                height={30}
                className="fill-white"
                alt="Email"
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
    )
}