import Image from 'next/image';

export default function Projects() {
    return (
        <>
            <div className='pt-6 py-3 flex flex-col justify-center items-center'>
                <h2 className='font-bold text-orange-600/60 shadow-xl'>Projects</h2>
            </div>
            <div className="sm:h-[320px] overflow-hidden w-[80%] sm:w-[600px] md:w-[780px]">
            <div className="flex w-[100%] h-[300px] sm:h-[400px] overflow-x-scroll snap-x snap-mandatory scroll-smooth">
                <div className="w-full h-[80%] flex-none mx-10 snap-center">
                    <a id="1" href='https://github.com/junaadh/echo-rs' target='_blank' className='w-full h-full flex rounded-2xl'>
                        <Image 
                            src="https://opengraph.githubassets.com/962122b9de3e50381d723085acb277a83dc9b031/junaadh/echo-rs"
                            width={780}
                            height={500}
                            alt='info'
                            className='rounded-2xl brightness-[90%]'
                        />
                    </a>
                </div>
                <div className="w-full h-[80%] flex-none snap-center mx-10">
                    <a id="2" href='https://github.com/junaadh/portfolio' target='_blank' className='w-full h-full flex rounded-2xl'>
                        <Image 
                            src="https://opengraph.githubassets.com/8fbd8043b6be2c3ee84b8bdfd8771845e8eda477/junaadh/portfolio"
                            width={780}
                            height={500}
                            alt='info'
                            className='rounded-2xl brightness-[90%]'
                        />
                    </a>
                </div>
                <div className="w-full h-[80%] flex-none snap-center mx-10">
                    <a id="3" href='https://github.com/junaadh/arch-semiauto-install' target='_blank' className='w-full h-full flex rounded-2xl'>
                        <Image 
                            src="https://opengraph.githubassets.com/f51651e14e796eacc314d5486ffd85f01a40b37a/junaadh/arch-semiauto-install"
                            width={780}
                            height={500}
                            alt='info'
                            className='rounded-2xl brightness-[90%]'
                        />
                    </a>
                </div>
            </div>
            </div>
        </>
    )
}