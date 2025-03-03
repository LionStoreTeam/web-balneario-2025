"use client"
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';


const Hero = () => {
    return (
        <div className="welcome w-full flex flex-col text-white justify-center items-center">
            <div className="my-20 p-2 flex flex-col text-center rounded-xl sm:p-4">
                <h1 className='text-[40px] mb-8 md:text-[60px] xl:text-[80px] font-bold tracking-wider uppercase'>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Bienvenido',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Explora',
                            1000,
                            'Juega',
                            1000,
                            'Diviértete',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </h1>
                <p className='p-2 rounded-xl text-[20px] md:text-[25px] xl:text-[30px] bg-cyan-400 bg-opacity-60'>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            2000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Donde el agua y la naturaleza se fusionan: Balneario El Profe Carachure.',
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '1em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </p>

            </div>
            <div className="w-full flex justify-center bg-blue-100 bg-opacity-20 ">
                <Image src="/LOGO_TONOS.png" alt='' width={500} height={500} className='float p-2 ' />
            </div>
        </div>
    );
}
export default Hero;