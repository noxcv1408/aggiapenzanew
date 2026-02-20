import { lazy, Suspense } from "react";
import CustomCursor from "@/components/CustomCursor";
import BackToTop from "@/components/BackToTop";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

// Lazy-load decorative component — doesn't block initial render
const ParticleBackground = lazy(() => import("@/components/ParticleBackground"));

const Index = () => (
  <div className="relative min-h-screen bg-background grid-bg overflow-hidden">
    <CustomCursor />
    <BackToTop />
    <Suspense fallback={null}>
      <ParticleBackground />
    </Suspense>
    <ScrollProgress />
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Contact />
    <Footer />
  </div>
);

export default Index;
