import { useState } from "react";
const Header = () => {

    const [open, setOpen] = useState(false);
    return (
        <>
            {/* =============== NAVBAR =============== */}

            <nav className="w-full bg-gradient-to-r from-white to-blue-100 px-6 py-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">

                    <div className="flex items-center gap-2 text-2xl font-bold text-blue-800">
                        <span className="text-blue-700"></span> <a href="/">Incognimous</a>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-10 text-blue-700 font-medium">
                        <li className="hover:text-gray-700 cursor-pointer"><a href="/services">Services</a></li>
                        <li className="hover:text-gray-700 cursor-pointer"><a href="/work">Work</a></li>
                        <li className="hover:text-gray-700 cursor-pointer"><a href="/process">Process</a></li>
                        <li className="hover:text-gray-700 cursor-pointer"><a href="/resources">Resources</a></li>
                        <li className="hover:text-gray-700 cursor-pointer"><a href="/blog">Blog</a></li>
                    </ul>

                    <button className="hidden md:block border border-blue-700 text-blue-700 px-6 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition">
                        <a href="/contact">CONTACT US</a>
                    </button>

                    <button
                        className="md:hidden text-blue-700 text-3xl"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? "✕" : "☰"}
                    </button>
                </div>

                {open && (
                    <div className="md:hidden mt-4 bg-white shadow-lg rounded-lg p-5">
                        <ul className="flex flex-col gap-4 text-blue-700 font-medium">
                            <li className="hover:text-gray-700 cursor-pointer"><a href="/services">Services</a></li>
                            <li className="hover:text-gray-700 cursor-pointer"><a href="/work">Work</a></li>
                            <li className="hover:text-gray-700 cursor-pointer"><a href="/process">Process</a></li>
                            <li className="hover:text-gray-700 cursor-pointer"><a href="/resources">Resources</a></li>
                            <li className="hover:text-gray-700 cursor-pointer"><a href="/blog">Blog</a></li>
                        </ul>

                        <button className="border border-blue-700 text-blue-700 px-6 py-2 rounded-lg mt-5 w-full hover:bg-blue-700 hover:text-white transition">
                            CONTACT US
                        </button>
                    </div>
                )}
            </nav>
        </>
    )
}
export default Header;