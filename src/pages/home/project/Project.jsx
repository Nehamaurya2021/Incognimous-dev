import Projects from '../../../api/LatestWork.json'

const LatestWork = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">Latest Work</h2>

        <button className="flex items-center gap-2 text-gray-700 hover:text-black">
          <span>Explore More</span>
          <span className="w-6 h-6 flex items-center justify-center border border-gray-600 rounded-full">
            →
          </span>
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        {Projects.map((item, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-md group"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-all duration-500"
            />

            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm opacity-80">{item.category}</p>
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default LatestWork;
