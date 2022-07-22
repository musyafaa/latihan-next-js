import React from "react";
import Link from "next/link";

const karir = () => {
    return(
        <>
            <div className="bg-white w-full	h-16 flex items-center justify-between shadow-black">
                <Link href="/">
                    <h4 className="text-black font-semibold font-sans text-lg	ml-[44px] cursor-pointer">Chakra Radha Mustika</h4>
                </Link>

                <div>
                    <ul className="flex flex-row m-8 hidden lg:flex">
                    <li className="m-4 cursor-pointer hover:text-green-500"><Link href="/about">About Us</Link></li>
                    <li className="m-4 cursor-pointer hover:text-green-500"><Link href="/digital-army">Our Service</Link></li>
                    <li className="m-4 cursor-pointer hover:text-green-500"><Link href="/karis">Career</Link></li>
                    <li className="m-4 cursor-pointer hover:text-green-500"><Link href="/contact">Contact Us</Link></li>
                    </ul>   
                    <img className="lg:hidden block mr-[20px]" src="/src/image/humburger-menu.svg" alt="" />        
                </div>
            </div>
            <div className="">
                <img src="src/image/karir.png" alt="" />
            </div>

            <div className="bg-[#F0F0F0]">
                <h1>hahahaha awikawok awokawokawok wkwkwkwkw</h1>
            </div>
        </>
    );
};
export default karir