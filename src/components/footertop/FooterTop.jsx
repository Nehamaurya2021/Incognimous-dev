
const logos = [
  { id: 1, src: "/public/log1.png", alt: "Logo 1" },
  { id: 2, src: "/public/log2.png", alt: "Logo2" },
  { id: 3, src: "/public/log3.png", alt: "Logo3" },
  { id: 4, src: "/public/log4.png", alt: "Logo4" },
];

const LogoSection = () => {
  return (
    <div className="w-full py-10 bg-white border-gray-200 ">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center py-2.5">
        {logos.map((item) => (
          <img
            key={item.id}
            src={item.src}
            
            className="w-28 sm:w-32 md:w-36 object-contain mx-auto hover:scale-105 transition"
          />
        ))}
      </div>
    </div>
  );
};

export default LogoSection;





































