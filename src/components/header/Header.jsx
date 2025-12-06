const Header = () => {
    return (
        <>
            {/* =============== NAVBAR =============== */}
            <nav className="flex items-center justify-between lg:px-40 md:px-35 sm:px-10 py-5  bg-gradient-to-r from-white to-blue-100">
                <div className="flex items-center gap-2 text-2xl font-bold text-blue-800">
                    <span className="text-blue-700"></span> <a href="/">Incognimous</a>
                </div>

                <ul className="hidden sm:flex items-center gap-10 text-blue-800 font-medium">
                    <li className="hover:text-gray-700 cursor-pointer"><a href="/services">Services</a></li>
                    <li className="hover:text-gray-700 cursor-pointer"><a href="/work">Work</a></li>
                    <li className="hover:text-gray-700 cursor-pointer"><a href="/process">Process</a></li>
                    <li className="hover:text-gray-700 cursor-pointer"><a href="/resources">Resources</a></li>
                    <li className="hover:text-gray-700 cursor-pointer"><a href="/blog">Blog</a></li>
                </ul>

                <button className="border border-blue-800 text-blue-800 rounded-md px-5 py-2 hover:bg-blue-800 hover:text-white transition-all">
                    CONTACT US
                </button>
            </nav>
        </>
    )
}
export default Header;