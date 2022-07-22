import React from "react";
import Link from "next/link";

const contact = () => {
    return(
        <>
        <div className="bg-white w-full	h-16 flex items-center justify-between">
            <Link href="/">
            <h4 className="text-black font-semibold font-sans text-lg	ml-[44px] cursor-pointer">Chakra Radha Mustika</h4>
            </Link>
            <div>
                <ul className="flex flex-row m-8 hidden lg:flex">
                    <li className="m-4 cursor-pointer hover:text-green-500"><Link href="/about">About Us</Link></li>
                    <li className="m-4 cursor-pointer hover:text-green-500"><Link href="/digital-army">Our Service</Link></li>
                    <li className="m-4 cursor-pointer hover:text-green-500"><Link href="/karir">Career</Link></li>
                    <li className="m-4 cursor-pointer hover:text-green-500"><Link href="/contact">Contact Us</Link></li>
                </ul>   
                <img className="lg:hidden block mr-[20px]" src="/src/image/humburger-menu.svg" alt="" />        
            </div>
        </div>

        <div className="text-center mt-32">
            <h1 className="font-bold text-[40px]">Kontak Kami</h1>
            <p className="mt-4">Jangan ragu untuk menghubungi kami kapan saja. Kami akan menghubungi Anda sesegera mungkin!.</p>
        </div>

        <form className=" mx-4 lg:mx-[410px] mt-16" action="">
            <div className="relative z-0 mb-6 w-full group">
                <input type="name" name="floating_name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#5252529C] appearance-none dark:text-black dark:border-black dark:focus:border-lime-400 focus:outline-none focus:ring-0 focus:border-lime-600 peer" placeholder=" " required />
                <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nama</label>
            </div>

            <div className="relative z-0 mb-6 w-full group">
                <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#5252529C] appearance-none dark:text-black dark:border-black dark:focus:border-lime-400 focus:outline-none focus:ring-0 focus:border-lime-600 peer" placeholder=" " required />
                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
            </div>

            <div className="relative z-0 mb-6 w-full group">
                <input type="number" name="floating_number" id="floating_number" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#5252529C] appearance-none dark:text-black dark:border-black dark:focus:border-lime-400 focus:outline-none focus:ring-0 focus:border-lime-600 peer" placeholder=" " required />
                <label htmlFor="floating_number" className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">No Telephone</label>
            </div>

            <div className="relative z-0 mb-6 w-full group">
                <input type="text" name="floating_text" id="floating_number" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#5252529C] appearance-none dark:text-black dark:border-black dark:focus:border-lime-400 focus:outline-none focus:ring-0 focus:border-lime-600 peer" placeholder=" " required />
                <label htmlFor="floating_text" className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pesan</label>
            </div>
        </form>

        <div className="flex justify-center mt-12">
            <button className="bg-lime-500 hover:bg-lime-600 w-[390px] lg:w-[720px] h-[40px] rounded-[30px] text-white font-semibold">Kirim</button>
        </div>
        </>
    );
};
export default contact