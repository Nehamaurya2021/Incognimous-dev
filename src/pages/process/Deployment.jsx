


 import DeploymentData from "../../apis/Deployment.json";
 import ProcessCard from "../../components/process/ProcessCard";
const DeploymentSection = () => {
  return (
   
    <>
    <div className='py-20 px-5 sm:px-10 md:px-20 lg:px-[200px]'>
        <p className=' text-gray-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae consequuntur, sed unde dignissimos, dolores quos ratione libero aperiam exercitationem hic voluptatum in accusantium suscipit explicabo delectus cum architecto atque? Soluta commodi odit, at incidunt numquam unde, ipsam, voluptates fugit officia deserunt error delectus optio est tempore accusantium pariatur nesciunt!</p> 
        <div className='flex justify-between flex-wrap  py-7 '>
            {DeploymentData.map((data)=>(
                <ProcessCard  key={data.id} data={data}/>
            ))}
            
        </div> 
        <div className="py-5" >
  <img className=" w-full  object-cover h-[600px] rounded-3xl " src="/pro.png" alt="" />
</div>
      </div>


    </>
  );
};

export default DeploymentSection;