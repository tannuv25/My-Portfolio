
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HeroSectionOne } from "../components/Hero";

import Education from "../components/Education";
import Experience from "../components/Experience";
import TechStack from "../components/Techstack";
// import Testimonials from "../components/Testimonial";

export default function HomePage() {
    return <>
        <div className="overflow-hidden">    <Navbar />
            <HeroSectionOne />
            <Experience/>
    <TechStack/>
    <Education/>
            {/* <Testimonials /> */}

            <Footer /></div>
    </>
}