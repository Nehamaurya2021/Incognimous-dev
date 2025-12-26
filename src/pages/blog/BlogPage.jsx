import BlogCard from "../../components/blogcard/BlogCard";
import blogsData from '../../api/BlogData1.json'

const BlogPage=()=>{
   return(
    <>
     <section className="w-full px-6 md:px-16 lg:px-24 py-10">

                <div className="flex items-center justify-between">
                    {/* <h2 className="text-2xl md:text-4xl font-bold">Blogs</h2> */}
                    {/* <button className="flex items-center gap-2 text-gray-800 hover:text-black">
                        <a href="#">Explore More</a>
                        <a href="#" className="w-6 h-6 flex items-center justify-center border border-gray-600 rounded-full">
                            →
                        </a>
                    </button> */}
                </div>

                {/* Blog Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {blogsData.map((blog) => (
                        <BlogCard key={blog.id} {...blog} />
                    ))}
                </div>
            </section>
    </>
   )
}
export default BlogPage;