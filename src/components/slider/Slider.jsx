const Slider=()=>{
    return(
        <>
        {/* =============== HERO SECTION =============== */}
            <section className="lg:px-40 md:px-35 sm:px-10 py-20 lg:flex md:flex sm:flex-wrap-reverse gap-10 items-center relative bg-gradient-to-r from-white to-blue-100">
                <div className="abslute">
                    <h1 className="text-5xl font-bold text-black leading-tight">
                        DESIGN & <br /> DEVELOPMENT
                    </h1>

                    <p className="text-gray-500 my-5 max-w-md">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>

                    <button className="bg-blue-800 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-all">
                        GET IN TOUCH
                    </button>
                </div>

                <div className="flex justify-center ">
                    <img
                        src="/Images/slider-img1.png"
                        alt="Design & Development"
                        className="w-full max-w-lg"
                    />
                </div>

            </section>

            {/* Dots */}
            {/* <div className="flex gap-2 m-auto w-full">
                <span className="w-3 h-3 bg-blue-800 rounded-full"></span>
                <span className="w-3 h-3 bg-blue-300 rounded-full"></span>
                <span className="w-3 h-3 bg-blue-300 rounded-full"></span>
            </div> */}

        </>
    )
}

export default Slider