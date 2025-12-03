import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <>
    <footer className="bg-[#053B74] text-white pt-20 pb-8">
      
     
      <div className="relative -mt-28 mb-16 flex justify-center">
        <div className="bg-white text-black shadow-xl rounded-2xl w-[80%] p-10 flex justify-between items-center">
          <h2 className="text-3xl font-bold">Let's create the next together</h2>
          <button className="bg-[#053B74] text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            CONTACT US
          </button>
        </div>
      </div>

      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">
        
       
        <div>
          <h1 className="text-xl font-bold mb-3"> Incognimous</h1>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
          </p>
        </div>

       
        <div>
          <h3 className="font-bold mb-3">CONTACT</h3>
          <p className="text-gray-300"> +91 9876543210</p>
          <p className="text-gray-300"> incognimous@gmail.com</p>
          <p className="text-gray-300"> House No-1, Sector-4, City - XXXXX, Country</p>
        </div>

        
        <div>
          <h3 className="font-bold mb-3">COMPANY</h3>
          <ul className="text-gray-300 space-y-2">
            <li>About Us</li>
            <li>Resources</li>
            <li>Support</li>
            <li>FAQ</li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-bold mb-3">SOCIAL</h3>
          <div className="flex items-center gap-4 text-xl">
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