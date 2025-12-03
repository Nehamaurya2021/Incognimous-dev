import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";


const ErrorPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">

      {/* Top Logo + Social Icons */}
      <div className="w-full flex justify-between px-10 mt-8">
        <h1 className="text-2xl font-bold text-[#003366]">Incognimous</h1>

        <div className="flex gap-4 text-[#003366]">
          <FaFacebookF />
          <FaLinkedinIn />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center mt-10">
        <img src="/bro.png" alt="404 Visual" className="w-80 mx-auto" />

        <h1 className="text-6xl font-bold text-[#003366] mt-4">404</h1>
        <p className="text-xl text-gray-700 font-semibold mt-2">OOPS! PAGE NOT FOUND</p>

        <p className="text-gray-600 mt-1">
          Sorry, the page you are looking for doesn’t exist.
        </p>

        <button className="mt-6 px-6 py-2 bg-[#003366] text-white rounded-md hover:bg-[#002244]">
          GO BACK
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
