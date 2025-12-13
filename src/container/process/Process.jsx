import Header from "../../components/header/Header"
import ProHome from "../../pages/process/home"
import Footer from "../../components/footer/Footer"
import Tabs from "../../pages/process/Tabs";
import DiscoverySection from "../../pages/process/Discovery"
import DesignSection from "../../pages/process/Design"
import DevelopmentSection from "../../pages/process/Development"
import DebuggingSection from "../../pages/process/Debugging"
import DeploymentSection from "../../pages/process/Deployment"
import LogoSection from "../../components/footertop/FooterTop"
const Process=()=>{
    return(
        <>
          <Header/>
          {/* <h1>This is process section.</h1> */}
          
          <ProHome/>
           <Tabs/>
          {/* <DiscoverySection/>
          <DesignSection/>
          <DevelopmentSection/>
          <DebuggingSection/>
          <DeploymentSection/> */}
          <LogoSection/>
          <Footer/>
        </>
    )
}
export default Process;