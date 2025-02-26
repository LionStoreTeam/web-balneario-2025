import { SparklesCore } from "@/components/ui/sparkles";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";


const Location = () => {
    return (
        <div className="float my-2 w-full">
            <div className="backbg py-10 h-auto w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
                <h1 className="md:text-3xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
                    Ubicación
                </h1>
                <div className="w-[40rem] h-10 relative">
                    {/* Gradients */}
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                    {/* Core component */}
                    <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={1200}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />

                    {/* Radial Gradient to prevent sharp edges */}
                    <div className="absolute inset-0 w-full h-full bg-transparent [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                </div>
                <div className="flex flex-row gap-2 justify-center items-center">
                    <div className="w-[120px] md:w-[300px]">
                        <Image src="/logo-w.png" alt="" width={600} height={600} className="float" />
                    </div>
                    <div className="w-[200px] flex flex-col gap-4 justify-center items-center text-white md:w-[400px]">
                        <IoLocationOutline className="float size-10 text-orange-200" />
                        <p className="text-[17px] md:text-[30px]">Ejido de Atlacomulco, Begonias Ezq Rosales, al fondo de la calle Rosales.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Location;