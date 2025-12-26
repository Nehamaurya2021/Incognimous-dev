import React from 'react'

const Design = () => {
  return (
   <>
    <div >
        <div className='pt-10 pb-10 lg:w-[70%]'> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, similique debitis ipsum velit at quisquam officia sed dignissimos, odio mollitia nam cupiditate minima voluptas dolores dicta minus error consequuntur voluptatibus rem accusamus? Magnam nobis ex illo, adipisci quibusdam et, dolor asperiores distinctio suscipit, vel culpa excepturi non maiores vero sapiente!</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-7 sm:gap-20'>
                <div>
                    <h2 className='py-4 text-xl lg:text-2xl font-medium'>UX/UI Design</h2>
                    <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id animi dolorem provident asperiores corporis in facere quasi libero magnam neque nemo quia minima ab corrupti</p>
                    <p className='py-2 text-lg lg:text-xl font-medium pb-3.5'>Preferred Tools</p>
                    <div className='flex gap-6  flex-wrap'>
                        <div className='text-center'>
                            <img src="/illustrator.png" alt="" />
                            <p>illustrator</p>
                        </div>
                        <div>
                            <img src="/Layer 2.png" alt="" />
                            <p>Photoshop</p>
                        </div>
                        <div>
                            <img src="/xd.png" alt="" />
                            <p>Adobe XD</p>
                        </div>
                        <div>
                            <img src="/Figma - Original.png" alt="" />
                            <p>Figma</p>
                        </div>
                    </div>
                </div>

                <div >
                    <h2 className='py-4 text-xl lg:text-2xl font-medium'>Web development</h2>
                    <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id animi dolorem provident asperiores corporis in facere quasi libero magnam neque nemo quia minima ab corrupti</p>
                    <p className='py-2 text-lg lg:text-xl '>Frontend development</p>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <div className='flex gap-10  flex-wrap py-5'>
                        <div>
                            <img src="/image 17.png" alt="" />
                            <p>HTML5</p>
                        </div>
                        <div>
                            <img src="/image 18.png" alt="" />
                            <p>CSS3</p>
                        </div>
                        <div>
                            <img src="/image 19.png" alt="" />
                            <p>Angular</p>
                        </div>
                        <div>
                            <img src="/image 20.png" alt="" />
                            <p>React</p>
                        </div>
                        <div>
                            <img src="/image 21.png" alt="" />
                            <p>jQuery</p>
                        </div>
                    </div>
                    <p className='py-2 text-lg lg:text-xl '>Backend development</p>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <div className='flex gap-10  flex-wrap py-6'>
                        <div>
                            <img src="/image 22.png" alt="" />
                            <p>HTML5</p>
                        </div>
                        <div>
                            <img src="/image 23.png" alt="" />
                            <p>CSS3</p>
                        </div>
                        <div>
                            <img src="/image 24.png" alt="" />
                            <p>Angular</p>
                        </div>
                        <div>
                            <img src="/image 27.png" alt="" />
                            <p>React</p>
                        </div>
                        <div>
                            <img src="/image 26.png" alt="" />
                            <p>jQuery</p>
                        </div>
                        <div>
                            <img src="/image 25.png" alt="" />
                            <p>jQuery</p>
                        </div>
                    </div>
                </div>

                <div className='sm:-mt-100  lg:-mt-60'>
                    <h2 className='py-4 text-xl lg:text-2xl font-medium'>App development</h2>
                    <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id animi dolorem provident asperiores corporis in facere quasi libero magnam neque nemo quia minima ab corrupti</p>
                    <p className='py-2 text-lg lg:text-xl '>Native Apps</p>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur </p>
                    <div className='flex gap-10  flex-wrap py-6'>
                        <div>
                            <img src="/image 25.png" alt="" />
                            <p>Android</p>
                        </div>
                        <div>
                            <img src="/Apple - Original.png" alt="" />
                            <p>IOS</p>
                        </div>
                    </div>
                    <p className='py-2 text-lg lg:text-xl '>Hybrid Apps</p>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur </p>
                    <div className='flex gap-10  flex-wrap py-6'>
                        <div>
                            <img src="/image 20.png" alt="" />
                            <p>Reactive Native</p>
                        </div>
                        <div>
                            <img src="/image 16.png" alt="" />
                            <p>Flutter</p>
                        </div>
                    </div>
                </div>


            </div>

            <div>
                <div className='relative'>
                    <img src="/Group 203.png" alt="design image" className=" w-full sm:h-auto object-cover h-[200px] rounded-3xl"/>
                    <div className='absolute inset-0 bg-[#01487E] opacity-40 rounded-3xl'></div>
                    <div className='absolute inset-0 flex flex-wrap justify-between items-center text-white  px-5 sm:px-20'>
                        <p className='text-2xl sm:text-4xl lg:text-5xl font-bold lg:w-[350px]'>Talk With Design expert</p>
                        <a href="#" className='px-7 py-2 bg-white text-blue-400 rounded-xl'>Let's Talk</a>
                    </div>
                </div>
                
                
            </div>
    </div>
   </>
  )
}

export default Design