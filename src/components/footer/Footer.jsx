import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <>
    <footer className="bg-[#053B74] text-white pt-20 pb-8 mt-32">
      
     
      <div className="relative -mt-28 mb-16 flex justify-center ">
        <div className="bg-white text-black shadow-2xl rounded-2xl w-[80%] p-10 flex justify-between items-center flex-wrap">
          <h2 className="text-3xl font-bold">Let's create the next together</h2>
          <button className="bg-[#053B74] text-white  w-full  md:w-40  py-2 rounded-lg hover:bg-blue-700 mt-3.5">
            CONTACT US
          </button>
        </div>
      </div>

      
      
      <div className=" w-[80%] mx-auto flex  items-start justify-between gap-2.5 flex-wrap ">
        
       
        <div className="w-full py-4 md:py-2.5 md:w-[45%] xl:w-[25%] ">
          <h1 className="text-xl font-bold mb-3 flex items-center gap-1.5"><img src="/Vector.png" alt="" />Incognimous</h1>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
          </p>
        </div>

       
        <div className="w-full py-4 md:py-2.5 md:w-[45%] xl:w-[23%] ">
          <h3 className="font-bold mb-3 text-gray-400">CONTACT</h3>
          <p className="text-gray-300 flex items-center gap-2.5 py-1"><img src="/Call.png" alt="" />+91 9876543210</p>
          <p className="text-gray-300 flex items-center gap-2.5 py-1"><img src="/Vector (1).png" alt="" />incognimous@gmail.com</p>
          <p className="text-gray-300 flex items-center gap-2.5 py-1"><img src="/Location on.png" alt="" />House No-1, Sector-4, City - XXXXX, Country</p>
        </div>

        
        <div className="w-full py-4 md:py-2.5 md:w-[45%] xl:w-[15%]">
          <h3 className="font-bold mb-3 text-gray-400">COMPANY</h3>
          <ul className="text-gray-300 space-y-2">
            <li>About Us</li>
            <li>Resources</li>
            <li>Support</li>
            <li>FAQ</li>
          </ul>
        </div>

        
        <div  className="w-full py-4 md:py-2.5 md:w-[45%] xl:w-[15%] ">
          <h3 className="font-bold mb-3 text-gray-400">SOCIAL</h3>
          <div className="flex items-center gap-6 text-xl">
            <FaFacebookF className="cursor-pointer" />
            <FaLinkedinIn className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
          </div>
        </div>
      </div>

     
      <div className="text-center text-gray-300 mt-10 border-t border-gray-600 pt-6">
        ©2020-2022 Incognimous Lab | All rights reserved.
      </div>
    </footer>
    </>
  );
};

export default Footer;