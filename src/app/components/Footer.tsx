import Image from "next/image";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";


const Footer = () => {
    // Get current year 
    const currentYear = new Date().getFullYear();
    return (
        <div className="backbg py-1 w-full flex flex-col bottom-0 items-center justify-center text-center text-white">
            <div className="p-5 mb-5  flex flex-col justify-center items-center">
                <h1 className="mb-10 text-[30px] md:text-[50px] border-b-2">
                    Llámanos
                    <br />
                    (+52) 777- 205- 8530</h1>
                <Image src="/LOGO_TONOS.png" alt='' width={350} height={350} className="float" />
                <p className="text-[20px] md:text-[25px]">SR. Isidro Carachure </p>
                <p className="text-[20px] md:text-[25px] border-b-2">bprofeCarachure@gmail.com</p>
            </div>
            {/* Social Media */}
            <div className="float mb-5 flex gap-5 justify-center items-center">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <CiFacebook className="size-10 md:size-14 opacity-30 hover:opacity-100 transition-all ease-linear" />

                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="size-10 md:size-14 opacity-30 hover:opacity-100 transition-all ease-linear" />
                </a>
            </div>
            <div className="text-[12px]">
                <h1 className="uppercase">
                    &copy; {currentYear} Balneario El Profe Carachure.
                </h1>
                <p>
                    All rights reserved.{" "}
                </p>
            </div>
        </div >

    );
}

export default Footer;