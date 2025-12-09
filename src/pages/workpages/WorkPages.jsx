const WorkPages=()=>{
  return(
    <>
   <div className="max-w-6xl mx-auto py-14 px-25">
    {/* <!-- FILTER SECTION --> */}
    <div className="flex items-center space-x-3 mb-10">
      <p className="font-semibold text-gray-600 px-10">Filter By :</p>
      <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm shadow-sm">
        <option>Design & Development</option>
        <option>Web Development</option>
        <option>App Development</option>
        <option>UI/UX</option>
      </select>
      {/* <div className="h-[1px] w-[100%] bg-gray-400 gap-100"></div> */}
  <div className="h-[1px] bg-gray-400 flex-1"></div>


    </div>

    {/* <!-- CARD 1 --> */}
    <div className="flex flex-col lg:flex-row gap-10 mb-20 px-6 rounded-xs ">
      
      {/* <!-- IMAGE --> */}
      <div className="w-full lg:w-1/2">
        <img 
          src="human.png" 
          className="rounded-xl w-full h-[260px] object-cover shadow-md"/>
      </div>

      {/* <!-- CONTENT --> */}
      <div className="w-full lg:w-1/2">
        
        {/* <!-- TAGS --> */}
        <div className="flex flex-wrap gap-4 text-xs font-semibold text-blue-700">
          <span>UI/UX DESIGN</span>
          <span>WEB DEVELOPMENT</span>
          <span>DEVOPS</span>
          <span>APP DEVELOPMENT</span>
        </div>

        {/* <!-- TITLE --> */}
        <h2 className="text-2xl font-bold mt-4 mb-3">Headline</h2>

        {/* <!-- DESCRIPTION --> */}
        <p className="text-gray-600 leading-relaxed text-sm max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
          nostrud exercitation ullamco laboris.
        </p>
      </div>
    </div>

    {/* <!-- CARD 2 (Duplicate) --> */}
    <div className="flex flex-col-reverse lg:flex-row gap-10 mb-20  px-6 rounded-xs">
      {/* <!-- CONTENT --> */}
      <div className="w-full lg:w-1/2">
        
        {/* <!-- TAGS --> */}
        <div className="flex flex-wrap gap-4 text-xs font-semibold text-blue-700">
          <span>UI/UX DESIGN</span>
          <span>WEB DEVELOPMENT</span>
          <span>DEVOPS</span>
          <span>APP DEVELOPMENT</span>
        </div>

        {/* <!-- TITLE --> */}
        <h2 className="text-2xl font-bold mt-4 mb-3">Headline</h2>

        {/* <!-- DESCRIPTION --> */}
        <p className="text-gray-600 leading-relaxed text-sm max-w-md">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
          nostrud exercitation ullamco laboris.
        </p>
      </div>

      {/* <!-- IMAGE --> */}
      <div className="w-full lg:w-1/2 rounded-sm">
        <img  src="/human.png"  className="rounded-xl w-full h-[260px] object-cover shadow-md" alt="" />
      </div>
    </div>


     {/* <!-- CARD 3--> */}
    <div className="flex flex-col lg:flex-row gap-10 mb-20  px-6 rounded-xs">
      
      {/* <!-- IMAGE --> */}
      <div className="w-full lg:w-1/2">
        <img 
          src="human.png" 
          className="rounded-xl w-full h-[260px] object-cover shadow-md"/>
      </div>

      {/* <!-- CONTENT --> */}
      <div className="w-full lg:w-1/2">
        
        {/* <!-- TAGS --> */}
        <div className="flex flex-wrap gap-4 text-xs font-semibold text-blue-700">
          <span>UI/UX DESIGN</span>
          <span>WEB DEVELOPMENT</span>
          <span>DEVOPS</span>
          <span>APP DEVELOPMENT</span>
        </div>

        {/* <!-- TITLE --> */}
        <h2 className="text-2xl font-bold mt-4 mb-3">Headline</h2>

        {/* <!-- DESCRIPTION --> */}
        <p className="text-gray-600 leading-relaxed text-sm max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
          nostrud exercitation ullamco laboris.
        </p>
      </div>
    </div>

    {/* <!-- CARD 4 (Duplicate) --> */}
    <div className="flex flex-col-reverse lg:flex-row gap-10 mb-20 px-6 rounded-xs">
      
      

      {/* <!-- CONTENT --> */}
      <div className="w-full lg:w-1/2">
        
        {/* <!-- TAGS --> */}
        <div className="flex flex-wrap gap-4 text-xs font-semibold text-blue-700">
          <span>UI/UX DESIGN</span>
          <span>WEB DEVELOPMENT</span>
          <span>DEVOPS</span>
          <span>APP DEVELOPMENT</span>
        </div>

        {/* <!-- TITLE --> */}
        <h2 className="text-2xl font-bold mt-4 mb-3">Headline</h2>

        {/* <!-- DESCRIPTION --> */}
        <p className="text-gray-600 leading-relaxed text-sm max-w-md">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
          nostrud exercitation ullamco laboris.
        </p>
      </div>

      {/* <!-- IMAGE --> */}
      <div className="w-full lg:w-1/2">
        <img  src="/human.png"  className="rounded-xl w-full h-[260px] object-cover shadow-md" alt="" />
      </div>
    </div>

  </div>




  
    </>
  )
}
export default WorkPages;






















































// import workItems from "../../api/WorkPage.json";
// import CommonWork from "../../components/commonwork/CommonWork";
// const WorkPages=()=>{
//     return (
//         <>
//        <div className="w-full min-h-screen bg-white">
      
//       {/* Filter Section */}
//       <div className="max-w-6xl mx-auto mt-10 px-6">
//         <div className="flex items-center gap-3">
//           <p className="text-gray-600 font-medium">Filter By :</p>

//           <select className="px-4 py-2 border rounded-lg shadow-sm bg-white">
//             <option>Design & Development</option>
//             <option>UI/UX Design</option>
//             <option>Web Development</option>
//             <option>App Development</option>
//           </select>
//         </div>
//       </div>
     

//       {/* Work Cards */}
//       <div className="max-w-6xl mx-auto px-6 mt-14 space-y-24 pb-20">

//         {workItems.map((item) => (
//           <div
//             key={item.id } data={item}
//             className="w-full flex flex-col md:flex-row items-start gap-10"
//           >
//             {/* Left Image */}
//             <img src={item.img} alt="Work"
//               className="w-full md:w-[460px] h-[260px] object-cover rounded-xl shadow"
//             />

//             {/* Right Text */}
//             <div className="md:w-[50%]">
//               <div className="flex flex-wrap items-center gap-6 text-[12px] font-semibold text-blue-600 uppercase">
//                 <span>UI/UX DESIGN</span>
//                 <span>WEB DEVELOPMENT</span>
//                 <span>DEVOPS</span>
//                 <span>APP DEVELOPMENT</span>
//               </div>

//               <h3 className="text-3xl font-semibold mt-4">{item.title}</h3>

//               <p className="text-gray-600 mt-3 leading-relaxed max-w-[480px]"> {item.text}</p>
//             </div>
//           </div>
//         ))}

//       </div>

//     </div>
        
//         </>
//     )
// }
// export default WorkPages;