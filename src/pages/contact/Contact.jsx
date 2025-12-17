import {useForm} from 'react-hook-form'

const Contact = () => {
    const services=["UI/UX Design", "Web Development", "App Development", "DevOps", "Cyber Security", "Consultancy", "Partnership", "Other"]
   const  budgets=["Above $25,000", "Between $7,500 to $25,000", "Between $3,500 to $7,500", "Between $1,000 to $3,500"]
    
   const{ register,handleSubmit, formState:{errors},}=useForm();
     function formSubmit(data){
            console.log("Form data :",data)
            alert("submitted successfully")
        }
  return (
    <>
        <div className='py-15 px-5 sm:px-10 md:px-20 lg:px-[10%]'>
            <h2 className=' font-bold text-3xl sm:text-[32px] lg:text-[40px]'>Your details</h2> 
            <form onSubmit={handleSubmit(formSubmit)}>
                <div className='py-10'>
                    <div>
                        <label  className='text-2xl py-5'>Name <span className='text-red-500'>*</span></label>
                        
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-10  '>
                            <input type="text" placeholder='First Name' className={` w-full h-12 rounded-lg mt-2.5 px-3
                             border ${errors.email?"border-red-500 focus:ring-red-500" : "border-black-300"}`} 
                                {...register("firstName",{ required:{value:true,
                                message:"please fill the first name"}
                                })}/>
                                { errors.firstName &&(<p style={{color:"red"}}>{errors.firstName.message}</p>)}

                            <input type="text" placeholder='Last Name' className={` w-full h-12 rounded-lg mt-2.5 px-3
                             border ${errors.email?"border-red-500 focus:ring-red-500" : "border-black-300"}`}
                                {...register("lastName",{
                                required:{value:true,
                                message:"please fill the last name"}
                                })} />
                                { errors.lastName &&(<p style={{color:"red"}}>{errors.lastName.message}</p>)}
                        </div>
                    </div>
                
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-10 '>
                        <div className='w-full py-2  sm:py-5'>
                            <label className='text-2xl' >Email <span className='text-red-500'>*</span></label>
                            <input type="email" placeholder='Enter your email' className={` w-full h-12 rounded-lg mt-2.5 px-3
                            border ${errors.email?"border-red-500 focus:ring-red-500" : "border-black-300"}`} 
                            {...register("email",{
                                required:{value:true,
                                message:"please fill the email"},
                                pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"fill valid email"}
                            })}/>
                             { errors.email &&(<p style={{color:"red"}}>{errors.email.message}</p>)}
                        </div >
                        

                        <div className='w-full  sm:py-5 relative'>
                            <label  className='text-2xl'>Phone No</label>
                            <input type="tel" placeholder='9794582514' className='border w-full h-12 rounded-lg mt-2.5 px-3 pl-24'/>
                            <img src="/india 1.png" alt="indian flag"  className=' absolute top-14 sm:top-19 left-3.5'/>
                            <p className=' absolute top-13.5 sm:top-18.5 left-15'>+91</p>
                        </div>
                    </div>    
                </div>

                {/* --------------- */}
                <div>
                    <h2 className=' font-bold text-3xl sm:text-[32px] lg:text-[40px]'>Your details</h2> 

                    <label className="block text-2xl  mb-4 mt-10">What are you looking for? <span className='text-red-500'>*</span></label>
                    <textarea rows="6" placeholder="Write details about your project" 
                        className="w-full border rounded-md px-3 py-2 "
                         {...register("address",{
                            required:{value:true,
                            message:"please fill what are you looking for...."},
                            minLength:{value:3,message:"Please fill atleast 4 length name"},
                         })}/>
                        { errors.address &&(<p style={{color:"red"}}>{errors.address.message}</p>)}

                    <div className="mt-10">
                        <input type="file" placeholder="" className="w-[60%] h-12 border rounded-md px-3 py-2"/>
                        <span className="text-lg text-gray-500 mt-1 pl-7">File size not more than 2 MB</span>
                    </div>
                </div>

                {/* ----service----- */}
                <div className='mt-12'>
                    <label className="block text-2xl  mb-4 mt-10">Select your Services</label>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
                        {services.map((service)=>(
                            <label key={service} className="flex items-center gap-2 text-xl">

                            <input type="checkbox" className='h-6 w-6'/>{service}
                            </label>
                        )
                            

                        )}
                    </div>
                </div>

                 {/* ----budget----- */}
                <div className='mt-12'>
                    <label className="block text-2xl  mb-4 mt-10">Budgets <span className='text-red-500'>*</span></label>
                    <div className='space-y-2'>
                        {budgets.map((budget)=>(
                            <label key={budget} className="flex items-center gap-2 text-xl">

                            <input type="radio" name='budget' className='h-6 w-6' 
                                {...register("budgetdata",{ required:{value:true,
                                    message:"please choose one option"}
                                })}/>{budget}
                                
                            </label>
                        )
                            

                        )}
                    </div>
                    {errors.budgetdata &&(<p style={{color:"red"}}>{errors.budgetdata.message}</p>)}
                </div>

                 {/*------ Other Details------ */}

                <h2 className="text-[40px] font-bold mt-10 mb-4">Some Other Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <label htmlFor="" className='text-2xl py-5'>Website</label>
                        <input type="text" placeholder="Website" 
                        className="w-full border rounded-md px-3 py-3.5 mt-2.5" />
                    </div>

                    <div>
                        <label htmlFor="" className='text-2xl py-5'>Target Customer</label>
                        <input type="text" placeholder="Target Customer" className="w-full border rounded-md px-3 py-3.5 mt-2.5"/>
                    </div>

                    <div>
                        <label htmlFor="" className='text-2xl py-5'>Deadline of Project</label>
                        <input type="text" placeholder="Deadline of Project"
                        className="w-full border rounded-md px-3 py-3.5 mt-2.5" />
                    </div>

                    <div>
                        <label htmlFor="" className='text-2xl py-5'>Skype Id</label>
                        <input type="text" placeholder="Skype Id"
                        className="w-full border rounded-md px-3 py-3.5 mt-2.5"/>
                    </div>
                    </div>

         {/*------ Terms------ */}
        <div className="mt-10 flex items-center gap-2 text-md">
          <input type="checkbox" className="accent-blue-600 h-6 w-6" />
          <span>
            I have read all the <span className="text-blue-600 underline cursor-pointer">Privacy Statements</span> and{' '}
            <span className="text-blue-600 underline cursor-pointer">Terms & Condition</span>
          </span>
        </div>

        {/*----- Button------- */}
        <button  type="submit" className="mt-20 bg-[#01487E] hover:bg-blue-800 text-white px-6 py-2 rounded-md">
          SEND ENQUIRY
        </button>

        </form>
        
        
      </div>

      

    </>
  )
}

export default Contact
