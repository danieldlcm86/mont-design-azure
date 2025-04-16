import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import Section1 from "../../components/Section1/Section1";
import Section2 from "../../components/Section2/Section2";
import ContactSection from "src/components/ContactSection/ContactSection";

export default function LayoutHome() {
    return (
        <div >
            <Navbar />
            <HeroSection />
            <Section1/>
            <Section2 />
            <ContactSection />
            <Footer />
        </div>
    );
}