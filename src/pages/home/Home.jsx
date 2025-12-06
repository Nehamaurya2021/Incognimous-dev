import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Slider from "../../components/slider/Slider";
import LogoSection from "../../components/footertop/FooterTop";
import Experience from "./experience/Experience";
import LatestWork from "./project/Project";
const HomePage =()=>{
    return(
        <>
        <Header/>
        <Slider/>
        <LogoSection/>
        <Experience/>
        <LatestWork/>
        <Footer/>
        </>
    )
}
export default HomePage;