import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import BlogPage from "../../pages/blog/BlogPage"
import AnyQuestionSection from"../../pages/blog/HelpsPage";
const Blog=()=>{
    return(
        <>
          <Header/>
          <BlogPage/>
          <AnyQuestionSection/>
          <BlogPage/>
          <Footer/>
        </>
    )
}
export default Blog