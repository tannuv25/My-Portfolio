
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HeroSectionOne } from "../components/Hero";
// import Testimonials from "../components/Testimonial";

export default function HomePage() {
    return <>
        <div className="overflow-hidden">    <Navbar />
            <HeroSectionOne />
            {/* <Testimonials /> */}

            <Footer /></div>
    </>
}