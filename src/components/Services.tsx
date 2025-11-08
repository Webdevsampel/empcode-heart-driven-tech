import { Code, Brain, Rocket, GraduationCap, Heart, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Web & mobile applications built with cutting-edge technology"
    },
    {
      icon: Brain,
      title: "AI-Powered Solutions",
      description: "Intelligent platforms for care, education, and innovation"
    },
    {
      icon: Rocket,
      title: "Product Design & MVP",
      description: "From concept to prototype, bringing your vision to life"
    },
    {
      icon: GraduationCap,
      title: "Digital Education Programs",
      description: "Accessible tech training for individuals and teams"
    },
    {
      icon: Heart,
      title: "Tech for Wellness",
      description: "Solutions that nurture emotional well-being and social connection"
    },
    {
      icon: Lightbulb,
      title: "Startup Acceleration",
      description: "Idea incubation and digital transformation consulting"
    }
  ];

  return (
    <section className="py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive solutions that blend technology with human-centered design
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50 hover:-translate-y-1"
              >
                <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
