import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Service from "../../pages/service/Service"
// import Slider from "../../components/slider/Slider"
import LogoSection from "../../components/footertop/FooterTop"
const Services=()=>{
    return(
        <>
          <Header />
          {/* <Slider /> */}
          <Service />
          <LogoSection />
          <Footer />
        </>
    )
}
export default Services