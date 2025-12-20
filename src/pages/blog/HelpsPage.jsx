const AnyQuestionSection = () => {
  return (
    <section className="max-w-6xl mx-auto my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-2xl bg-white">
        
        {/* Left Side */}
        <div className="p-10 flex flex-col justify-center">
          <p className="text-black-200 mb-2 text-2xl">We Are Here To Help You</p>
          <h2 className="text-3xl  text-black-700">
            Any Question ? Let’s Talk
          </h2>
        </div>

        {/* Right Side */}
        {/* <div className=" relative p-10 flex flex-col justify-center bg-cover bg-center"
        //   style={
        //     backgroundImage:
        //       "./subscribe.png",
        //   }
        >
            <img src="/subscribe.png" alt="" />
          <h3 className="absolute text-white text-xl font-semibold mb-4 text-center">
            SUBSCRIBE NOW
          </h3>

          <input type="text" placeholder="Enter your name"className="mb- p-3 w-70 rounded-md outline-none bg-white"/>

          <input
            type="email"
            placeholder="Enter your email"
            className="mb-4 p-3 rounded-md outline-none bg-white"
          />

          <button className="border border-white text-white py-2 rounded-md hover:bg-white hover:text-black transition">
            SUBMIT
          </button>
        </div> */}

      <div className="relative flex items-center justify-center bg-cover bg-center p-10"
     style={{
       backgroundImage:
         "url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2')",
     }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>
  {/* Content */}
  <div className="relative z-10 w-full max-w-sm">
    <h3 className="text-white text-xl font-semibold mb-4 text-center">
      SUBSCRIBE NOW
    </h3>

    <input
      type="text"
      placeholder="Enter your name"
      className="w-full mb-3 p-3 rounded-md outline-none bg-white"
    />

    <input
      type="email"
      placeholder="Enter your email"
      className="w-full mb-4 p-3 rounded-md outline-none bg-white"
    />
    <div className="flex justify-center">
        <button className="border border-white text-white py-2 px-6 rounded-md">
      SUBMIT
    </button>
    </div>
   
  </div>
</div>

      </div>
    </section>
  );
};

export default AnyQuestionSection;
