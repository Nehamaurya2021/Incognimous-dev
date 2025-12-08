import React from 'react'

const Cyber = () => {
  return (
    <>
    <div >
        <div className='pt-15 pb-10 lg:w-[70%]'> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, similique debitis ipsum velit at quisquam officia sed dignissimos, odio mollitia nam cupiditate minima voluptas dolores dicta minus error consequuntur voluptatibus rem accusamus? Magnam nobis ex illo, adipisci quibusdam et, dolor asperiores distinctio suscipit, vel culpa excepturi non maiores vero sapiente!</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-7 sm:gap-20  '>
                <div className="">
                    <h2 className='py-4 text-xl lg:text-2xl font-medium'>VAPT</h2>
                    <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id animi dolorem provident asperiores corporis in facere quasi libero magnam neque nemo quia minima ab corrupti</p>
                </div>

                <div className="">
                    <h2 className='py-4 text-xl lg:text-2xl font-medium'>Read Teaming</h2>
                    <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id animi dolorem provident asperiores corporis in facere quasi libero magnam neque nemo quia minima ab corrupti</p>
                </div>

                <div >
                    <h2 className='py-4 text-xl lg:text-2xl font-medium'>Infosec Traning</h2>
                    <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id animi dolorem provident asperiores corporis in facere quasi libero magnam neque nemo quia minima ab corrupti</p>
                </div>



            </div>

            <div className='py-8'>
                <div className='relative'>
                    <img src="/Group 203.png" alt="design image" className=" w-full sm:h-auto object-cover h-[200px] rounded-3xl"/>
                    <div className='absolute inset-0 bg-[#01487E] opacity-40 rounded-3xl'></div>
                    <div className='absolute inset-0 flex flex-wrap justify-between items-center text-white  px-5 sm:px-20'>
                        <p className='text-2xl sm:text-4xl lg:text-5xl font-bold lg:w-[350px]'>Talk With Cyber expert</p>
                        <a href="#" className='px-7 py-2 bg-white text-blue-400 rounded-xl'>Let's Talk</a>
                    </div>
                </div>
                
                
            </div>
    </div>
    </>
  )
}

export default Cyber