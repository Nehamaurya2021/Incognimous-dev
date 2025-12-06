
const BlogCard = ({ image, title, description, date }) => {
  return (
    <div className="bg-white shadow-md rounded overflow-hidden hover:shadow-lg transition p-0">
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-6">
        <h3 className="font-semibold text-xl mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <p className="text-gray-500 text-xs mt-4">{date}</p>
      </div>
    </div>
  );
};

export default BlogCard;
