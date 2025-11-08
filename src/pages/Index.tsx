import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import TargetAudience from "@/components/TargetAudience";
import ValueProposition from "@/components/ValueProposition";
import RevenueModel from "@/components/RevenueModel";
import Values from "@/components/Values";
import Vision from "@/components/Vision";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <TargetAudience />
      <ValueProposition />
      <RevenueModel />
      <Values />
      <Vision />
      <Footer />
    </div>
  );
};

export default Index;
