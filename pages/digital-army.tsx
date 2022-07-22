import React from "react";
import Link from "next/link";


const digital = () => {

    return(
        <>
        <div className="bg-white w-full	h-16 flex items-center justify-between drop-shadow-xl   ">
            <Link href="/">
                <h4 className="text-black font-semibold font-sans text-lg	ml-[44px] cursor-pointer">Chakra Radha Mustika</h4>
            </Link>
            <div>
                <ul className="flex flex-row m-8 hidden lg:flex">
                <li className="m-4 cursor-pointer hover:text-green-500"><Link href="/about">About Us</Link></li>
                <li className="m-4 cursor-pointer hover:text-green-500">Our Service</li>
                <li className="m-4 cursor-pointer hover:text-green-500"><Link href="/karis">Career</Link></li>
                <li className="m-4 cursor-pointer hover:text-green-500"><Link href="/contact">Contact Us</Link></li>
                </ul>   
                <img className="lg:hidden block mr-[20px]" src="/src/image/humburger-menu.svg" alt="" />        
            </div>
        </div>

        <div className="bg-gradient-to-r from-grad2 to-grad1 w-[100%] h-[200px]">
            <div className="flex">
                <p className="text-white mt-4 ml-8">Our Service</p>
                <img className="ml-2 mt-[18px]" src="/src/image/arrow.svg" alt="" />
                <p className="text-white mt-4 ml-2">Campaign Management</p>
                <img className="ml-2 mt-[18px]" src="/src/image/arrow.svg" alt="" />
                <p className="font-bold text-white mt-4 ml-2">Digital Army</p>
            </div>
            <h1 className="text-center font-bold text-white text-[40px] mt-12">Digital Army</h1>
        </div>
        <div className="mb-20">
            <img className="w-[100%]" src="/src/image/digital-army.png" alt="" />
        </div>
        <div className="">
            <h1 className="font-bold text-center">(Campaign Management Response Digital Army)</h1>
            <div className="flex justify-center mt-12 ml-32 mb-24 ">
                <ul className="list-disc">
                    <li>Spy Review Apps, Digital Army E-Commerce, Digital Army E-Forum, Digital Army KOL</li>
                    <li>Activities to Induce Mass Mobilization towards any particular program/activities/campaign conducted by brands.</li>
                    <li>Can be directed through many channels including apps, e-commerce, forum, or influencer review</li>
                </ul>
            </div>
        </div>
            
        </>
    );
};

export default digital