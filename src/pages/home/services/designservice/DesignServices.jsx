const DesignServices=()=>{
    return(
        <>
        <div className="w-[100 %] flex">
            <div className="w-[50%]">
                <p className="py-5 text-gray-600">Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. Maxime minus corrupti ab cum aspernatur eum totam libero quia dolore ad.</p><br/>
                <h4 className="text-lg font-medium">UI/UX Design</h4><br/>
                <h4 className="text-lg font-medium">Web Development</h4><br/>
                <h4 className="text-lg font-medium">App Development</h4>

                <button className="flex items-center gap-2 text-gray-800 hover:text-black mt-20 border border-gray-800 rounded-full px-5 py-1">
                        <a href="/#" className="w-6 h-6 flex items-center justify-center ">
                            →
                        </a>
                        <a href="/#">Explore More</a>
                </button>
            </div>
            
            <div className="w-[50%] h-[full] m-auto">
                <img className=" w-fit h-[60%]" src="/Images/services1.gif"/>
            </div>
        </div>
        </>
    )
}
export default DesignServices