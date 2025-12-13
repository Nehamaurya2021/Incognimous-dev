           

const ProHome = () => {
  return (
    <>
      {/* =============== HERO SECTION =============== */}
      <section className="lg:px-40 md:px-35 sm:px-10 py-20 flex flex-col-reverse lg:flex-row gap-10 items-center bg-gradient-to-r from-white to-blue-100">

        {/* IMAGE LEFT */}
        <div className="flex justify-center lg:w-1/2">
          <img
            src="/prohome.png"
            alt="Design & Development"
            className="w-full max-w-lg"
          />
        </div>

        {/* CONTENT RIGHT */}
        <div className="lg:w-1/2">
         

          <h1 className="text-5xl font-bold text-black leading-tight">
            5D PROCESS WHICH <br /> HELP US TO GROW
          </h1>
 <p className="text-gray-500 my-5 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
  </div>

      </section>
    </>
  );
};

export default ProHome;
