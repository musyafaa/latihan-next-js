import * as React from "react";
import Link from "next/link";

const about = () => {
    return (
        <>
        <div className="bg-white w-full	h-16 flex items-center justify-between">
        <Link href="/">
            <h4 className="text-black font-semibold font-sans text-lg	ml-[44px] cursor-pointer">Chakra Radha Mustika</h4>
        </Link>
        <div>
            <ul className="flex flex-row m-8 hidden lg:flex">
                <li className="m-4 cursor-pointer hover:text-green-500">About Us</li>
                <li className="m-4 cursor-pointer hover:text-green-500"><Link href="/digital-army">Our Service</Link></li>
                <li className="m-4 cursor-pointer hover:text-green-500"><Link href="/karir">Career</Link></li>
                <li className="m-4 cursor-pointer hover:text-green-500"><Link href="/contact">Contact Us</Link></li>
            </ul>
        </div>
        <img className="block lg:hidden mr-4" src="/src/image/humburger-menu.svg"></img>
        </div>
        
        <div className="grid lg:flex bg-gray-50 ">
            <div className="flex justify-center">
                <img className=" mt-[40px] lg:hidden" src="/src/image/logo-crm-mobile.svg" alt="" />
            </div>            
                <img className="hidden lg:block" src="/src/image/logo-crm.svg" alt="" />            
            <div>                
                <h1 className="font-bold lg:ml-[100px] lg:mt-[100px] text-[40px] text-center lg:text-left">About Us</h1>
                <p className="ml-[24px] mr-[24px] mt-[40px] lg:ml-[100px] lg:mr-[20px] lg:mt-[20px]">PT Cakra Radha Mustika is a Total Business Solution-based company that provides services by helping other companies run projects or campaigns from the initial process to the final step. These services start from building the foundation of a company's brand to reach a bigger audience (brand awareness), effectively creating or changing user behavior (lead generation), running acquisition programs to conducting customer retention.</p>
                <p className="ml-[24px] mr-[24px] mt-[30px] lg:ml-[100px] lg:mr-[20px] lg:mt-[20px] mb-8 lg:mb-0">In order to make CAKRA an integrated ecosystem, PT Cakra Radha Mustika has experiences in integrating customers through membership programs, presenting a Customer Service Center and Customer Service for telemarketing, providing Customer Data Integrators and Orchestrators from various data sources, and focusing on increasing interaction and communication with customers via WhatsApp, Social Media, SMS, Email, Phone and Applications/Websites.</p>
            </div>
        </div>

        <div className="flex flex-col  justify-around bg-gradient-to-r from-grad2 to-grad1 w-[100%] h-[120px] lg:h-auto font-Open-Sans  mb-12">
            <div className="flex justify-around">
                <div className="font-bold text-white text-[24px] lg:text-[38px] mt-12 mb-12">
                    <div className="flex justify-center ">
                        <h1>37</h1>
                    </div>
                    <p>Clients</p>
                </div>

                <div className="font-bold text-white text-[24px] lg:text-[38px] mt-12 mb-12">
                    <div className="flex justify-center">
                        <h1>04</h1>
                    </div>
                    <p>Service</p>
                </div>

                <div className="font-bold text-white text-[24px] lg:text-[38px] mt-12 mb-12">
                    <div className="flex justify-center">
                        <h1>191</h1>
                    </div>
                    <p>Project</p>
                </div>
            </div>            
        </div>


        <div className="lg:flex ">            
        <div className="lg:ml-32 lg:mt-48">
            <h1 className="font-bold text-center lg:text-left text-[32px] lg:w-[200px] ">Our Vision Mision</h1>
        </div>
            <div className="lg:flex">
                <div className="flex flex-col ">
                    <div className=" mt-8 ml-8 lg:mt-16 lg:ml-64">
                        <h1 className="text-green-500 font-bold text-[32px]">Vision</h1>
                        <p className="mr-12 text-[16px]">To become the total solution in Customer Relation Management by providing integrated services to enhance customers’ and brands’ value proposition in the market.</p>
                    </div> 
                    <div className=" mt-8 ml-8 lg:mt-[120px] mb-12 lg:ml-64 ">
                        <h1 className="text-green-500 font-bold text-[32px]">Mision</h1>
                        <p className="mr-12 text-[16px]">To become the integrator and orchestrator in data collection and analysis that can further be utilized to interact and improve customers’ lifetime value so that CRM can be the Total Solution Provider for brands and furthermore providing health information and education to society.</p>
                    </div> 
                </div>
            </div>
        </div>
        
        </>
    );
};
 
export default about