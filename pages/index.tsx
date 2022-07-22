import * as React from "react";
import Link from "next/link";
import Slider from "react-slick";

const adalahKeren = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
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

    <div className="flex flex-row bg-gradient-to-r from-grad2 to-grad1 w-auto h-auto font-Open-Sans mt-0 content-center">
    <div>
      <h1 className="ml-6 text-white lg:mt-[155px] lg:ml-[57px] font-bold font-sans text-[60px] max-w-xl">Marketing Support by Chakra</h1>
      <p className="ml-6 text-white lg:ml-[57px] lg:mt-[38px] font-sans leading-relaxed max-w-xl">As a Customer Relationship Management based company, PT Cakra Radha Mustika has the experience and ability to execute a business strategy that combines human data and technology.
        PT Cakra Radha Mustika also focuses on improving customer satisfaction by trying to understand and meet customer needs based on customer characteristics and behavior.
      </p>
      <Link href="/about"><button className="bg-lime-400 mb-6 ml-4 w-[380px] hover:bg-lime-500 rounded-3xl text-white lg:w-[120px] h-[40px] lg:ml-[57px] mt-[57px] border-solid border-[3px] border-white">About Us</button></Link>
    </div>
      <img className="hidden lg:block h-[100vh] ml-[320px]" src="/src/image/gambar-lp.png" alt="landing page" />
   </div>

   <div className="mb-32 ">
    <h1 className="text-center font-bold mt-[70px] text-[40px]">Our Service</h1>
    <div className="flex justify-between mx-16 lg:mx-24 mt-24 gap-8">
        <div className="bg-gray-100 w-auto	lg:w-[316px] h-auto rounded-[30px] hover:bg-gray-200	">
            <div className="flex justify-center">
              <img className="mt-16 mb-8" src="/src/image/call-home.svg" alt="" />
            </div>
            <h2 className="font-bold text-center lg:text-3xl mb-[32px]">Customer <br></br> Service</h2>             
        </div>
        <div className="bg-gray-100	w-[316px] h-auto rounded-[30px] hover:bg-gray-200	">
          <div className="flex justify-center">
            <img className="mt-16 mb-8" src="/src/image/campaign.svg" alt="" />
          </div>
            <h2 className="font-bold text-center text-3xl mb-[32px]">Campaign <br></br> Management</h2>
        </div>

        <div className="bg-gray-100	w-[316px] h-auto rounded-[30px]	hover:bg-gray-200">
          <div className="flex justify-center">
            <img className="mt-16 mb-8" src="/src/image/database.svg" alt="" />
          </div>
            <h2 className="font-bold text-center text-3xl mb-[32px]">Database <br></br> Management</h2>            
        </div>

        <div className="bg-gray-100	w-[316px] h-auto rounded-[30px] hover:bg-gray-200	  ">
          <div className="flex justify-center">
            <img  className="mt-16 mb-8" src="/src/image/store.svg" alt="" /> 
          </div>
          <h2 className="font-bold text-center text-3xl mb-[32px]">Experience <br></br> Store</h2>
        </div>
    </div>
   </div>

   <div className="relative flex flex-col bg-comLime mb-24 w-auto h-auto">
      <h1 className="text-center text-[40px] font-bold mt-12">Our Client</h1>
      <p className="text-center mt-4">We have been working with some fortune 37 clients</p>

      <div className="mx-56">
        <Slider className="" {...settings}>
          <div className=" mt-12">
            <img className="" src="/src/image/img-our-service.svg" alt="" />
          </div>
          <div className=" mt-12">
            <img className="" src="/src/image/img-our-service-2.svg" alt="" />
          </div>
          <div className=" mt-12">
            <img className="" src="/src/image/img-our-service-3.svg" alt="" />
          </div>
        </Slider>      
      </div>
   </div>

   <div className="text-center font-bold text-[38px] mb-24">
    <h1>What They Say About Our Service</h1>
   </div>

    <div className="relative">      
      <div className="  mx-32 w-auto h-auto mb-32">
        <Slider {...settings}> 
        <div className="flex flex-row bg-comLime rounded-[24px] ">
          <div className="relative flex">
            <div className="mt-[120px] ml-32 w-[315px]">
              <img className="" src="/src/image/wings.svg" alt="" />                    
            </div>
            <div className=" mt-24">
              <h1 className="font-bold text-[40px] ml-[180px]">PT WINGS CORP</h1>
              <p className="mt-6 ml-[180px] mr-32 mb-[88px]">CRM provides good ideas in fulfilling our business needs so that we can continue and run the program well, and can provide satisfactory service. Reports are sent earlier than the target. The results are very accurate and they can be used as inputs for future development.</p> 
            </div>
          </div>            
        </div>    

        <div className="flex flex-row bg-comLime rounded-[24px] ">
          <div className="relative flex ">
            <div className="mt-[120px] ml-32 w-[315px]">
              <img className="" src="/src/image/klik-dokter.svg" alt="" />                    
            </div>
            <div className="mt-24">
              <h1 className="font-bold text-[40px] ml-[180px]">KlikDokter</h1>
              <p className="mt-6 ml-[180px] mr-32 mb-16">CRM works professionally according to the guidelines and deadlines given. The results of the work are as expected, starting from the data provided to the input which is in line with our company needs. The response is also very quick. It really helps us understand the program being run.</p> 
            </div>
          </div>            
        </div>    

        <div className="flex flex-row bg-comLime rounded-[24px] ">
          <div className="relative flex ">
            <div className="mt-[120px] ml-32 w-[315px]">
              <img className="" src="/src/image/renalmed.svg" alt="" />                    
            </div>
            <div className="mt-24">
              <h1 className="font-bold text-[40px] ml-[180px]">PT RENALMED TIARA UTAMA</h1>
              <p className="mt-6 ml-[180px] mr-32 mb-16">Sangat puas dengan kinerja PT CRM. Berbagai dukungan diberikan mulai dari regulasi yang baik, menjadi penghubung yang baik dengan pelanggan, dan memberikan data yang tepat sesuai kebutuhan perusahaan kami. Laporan dan kegiatan yang dilakukan sesuai dengan kebutuhan perusahaan. Semuanya sangat detail dan membantu kami</p> 
            </div>
          </div>            
        </div>          
          
        </Slider>
      </div>
    </div>
    </>
  );
};
export default adalahKeren;