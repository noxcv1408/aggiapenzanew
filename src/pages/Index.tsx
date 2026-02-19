import ParticleBackground from "@/components/ParticleBackground";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/sections/Hero";
import CounterStrip from "@/components/sections/CounterStrip";
import Services from "@/components/sections/Services";
import Footer from "@/components/sections/Footer";

const Index = () => (
  <div className="relative min-h-screen bg-background grid-bg overflow-hidden">
    <ParticleBackground />
    <CustomCursor />
    <ScrollProgress />
    <CounterStrip />
    <Services />
    <Footer />
  </div>
);

export default Index;
