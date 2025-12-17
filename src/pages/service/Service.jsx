import { useState } from 'react'
import ServiceCard from "../../components/common/ServiceCard"
import serviceWorkdata from "../../api/ServiceCardData.json"
import Design from "./Design"
import DevOps from './DevOps'
import Cyber from './Cyber'
const Service = () => {
   const [activeTab, setActiveTab] = useState("design");
    
  return (
    <>
    {/*---------- work card----------- */}
  
      <div className='py-15 px-5 sm:px-10 md:px-20 lg:px-[10%]'>
        <h2 className=' font-bold text-3xl sm:text-[32px] lg:text-[40px]'>How We Work?</h2> 
        <div className='flex justify-between text-justify flex-wrap  py-7 '>
            {serviceWorkdata.map((data)=>(
                <ServiceCard  key={data.id} data={data}/>
            ))}
            
        </div> 
      </div>

       
         {/* ----- Tabs + Content ----------- */}
      <div className='py-10 px-5 sm:px-10 md:px-20 lg:px-[10%] '>

        {/* TAB BUTTONS */}
        <div className='flex-row text-xl sm:flex justify-between items-center font-bold sm:text-2xl md:text-2xl lg:text-3xl'>

          <div>
            <button  onClick={() => setActiveTab("design")}
              className={ activeTab === "design" ? "underline text-black" : "text-gray-600"} >
              Design & Development
            </button>
          </div>

          <div>
            <button  onClick={() => setActiveTab("devops")}
              className={activeTab === "devops" ? "underline text-black" : "text-gray-600"}>
              DevOps
            </button>
          </div>

          <div>
            <button onClick={() => setActiveTab("cyber")}
             className={activeTab === "cyber" ? "underline text-black" : "text-gray-600"}>
              Cyber Security
            </button>
          </div>

        </div>

        {/* CONTENT CHANGE KARO TAB KE HISAB SE */}
        <div className="mt-10">
          {activeTab === "design" && <Design />}
          {activeTab === "devops" && <DevOps />}
          {activeTab === "cyber" && <Cyber />}
        </div>

      </div>

      
    </>
  )
}

export default Service;