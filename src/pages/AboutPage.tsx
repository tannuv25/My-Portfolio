import About from "../components/About";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AboutPage(){
    return <>
<div className="overflow-hidden">
    <Navbar/>
    <About/>
    
    <Footer/>
</div>
    </>
}