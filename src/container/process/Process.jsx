import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Tabs from "../../pages/process/Tabs";
import DiscoverySection from "../../pages/process/Discovery"
import DesignSection from "../../pages/process/Design"
import LogoSection from "../../components/footertop/FooterTop"
const Process=()=>{
    return(
        <>
          <Header/>
          {/* <h1>This is process section.</h1> */}
          <Tabs/>
          <DiscoverySection/>
          <DesignSection/>
          <LogoSection/>
          <Footer/>
        </>
    )
}
export default Process;