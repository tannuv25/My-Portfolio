import About from "../components/About";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TechStack from "../components/Techstack";

export default function AboutPage(){
    return <>
    <Navbar/>
    <About/>
    <TechStack/>
    <Education/>
    <Footer/>
    </>
}