import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TechStack from "../components/Techstack";

export default function AboutPage(){
    return <>
<div className="overflow-hidden">
    <Navbar/>
    <About/>
    <Experience/>
    <TechStack/>
    <Education/>
    <Footer/>
</div>
    </>
}