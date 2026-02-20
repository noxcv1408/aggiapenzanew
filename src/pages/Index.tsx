import CustomCursor from "@/components/CustomCursor";
import BackToTop from "@/components/BackToTop";
import ParticleBackground from "@/components/ParticleBackground";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import CounterStrip from "@/components/sections/CounterStrip";
import Services from "@/components/sections/Services";
import SocialProof from "@/components/sections/SocialProof";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => (
  <div className="relative min-h-screen bg-background grid-bg overflow-hidden">
    <CustomCursor />
    <BackToTop />
    <ParticleBackground />
    <ScrollProgress />
    <Navbar />
    <Hero />
    <About />
    <CounterStrip />
    <Services />
    <SocialProof />
    <Contact />
    <Footer />
  </div>
);

export default Index;
