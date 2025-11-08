import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Values from "@/components/Values";
import Vision from "@/components/Vision";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Values />
      <Vision />
      <Footer />
    </div>
  );
};

export default Index;
