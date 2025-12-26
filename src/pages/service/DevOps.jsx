import React from 'react'

const DevOps = () => {
  return (
    <>
    <div >
        <div className='pt-10 pb-10 lg:w-[70%]'> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, similique debitis ipsum velit at quisquam officia sed dignissimos, odio mollitia nam cupiditate minima voluptas dolores dicta minus error consequuntur voluptatibus rem accusamus? Magnam nobis ex illo, adipisci quibusdam et, dolor asperiores distinctio suscipit, vel culpa excepturi non maiores vero sapiente!</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-7 sm:gap-20  '>
                <div className="">
                    <h2 className='py-4 text-xl lg:text-2xl font-medium'>DevOps Assessment &Audit</h2>
                    <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id animi dolorem provident asperiores corporis in facere quasi libero magnam neque nemo quia minima ab corrupti</p>
                </div>

                <div className="">
                    <h2 className='py-4 text-xl lg:text-2xl font-medium'>DevOps Implementation</h2>
                    <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id animi dolorem provident asperiores corporis in facere quasi libero magnam neque nemo quia minima ab corrupti</p>
                    <p className='py-2 text-lg lg:text-xl '>Technologies</p>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur .</p>
                    <div className='flex gap-10  flex-wrap py-5'>
                        <div>
                            <img src="/image 28.png" alt="" />
                            <p>Docker</p>
                        </div>
                        <div>
                            <img src="/image 29.png" alt="" />
                            <p>AWS</p>
                        </div>
                        <div>
                            <img src="/image 30.png" alt="" />
                            <p>Github</p>
                        </div>
                        <div>
                            <img src="/image 31.png" alt="" />
                            <p>Azure</p>
                        </div>
                        <div>
                            <img src="/image 33.png" alt="" />
                            <p>Ansible</p>
                        </div>
                    </div>
                </div>

                 <div className="sm:-mt-60 lg:-mt-40">
                    <h2 className='py-4 text-xl lg:text-2xl font-medium'>Release Management</h2>
                    <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id animi dolorem provident asperiores corporis in facere quasi libero magnam neque nemo quia minima ab corrupti</p>
                    <p className='py-2 text-lg lg:text-xl '>Technologies</p>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur .</p>
                    <div className='flex gap-10  flex-wrap py-5'>
                        <div>
                            <img src="/image 43.png" alt="" />
                            <p>Octopus Deploy</p>
                        </div>
                        <div>
                            <img src="/image 34.png" alt="" />
                            <p>Cloud deployment Manager </p>
                        </div>
                    </div>
                        
                </div>

                <div >
                    <h2 className='py-4 text-xl lg:text-2xl font-medium'>Monitoring</h2>
                    <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id animi dolorem provident asperiores corporis in facere quasi libero magnam neque nemo quia minima ab corrupti</p>
                </div>



            </div>

            <div className='py-8'>
                <div className='relative'>
                    <img src="/Group 203.png" alt="design image" className=" w-full sm:h-auto object-cover h-[200px] rounded-3xl"/>
                    <div className='absolute inset-0 bg-[#01487E] opacity-40 rounded-3xl'></div>
                    <div className='absolute inset-0 flex flex-wrap justify-between items-center text-white  px-5 sm:px-20'>
                        <p className='text-2xl sm:text-4xl lg:text-5xl font-bold lg:w-[350px]'>Talk With DevOps expert</p>
                        <a href="#" className='px-7 py-2 bg-white text-blue-400 rounded-xl'>Let's Talk</a>
                    </div>
                </div>
                
                
            </div>
    </div>
    </>
  )
}

export default DevOps