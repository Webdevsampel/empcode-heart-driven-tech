import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Brain, Palette, GraduationCap, Heart, Building, Rocket, Briefcase } from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Web & Mobile applications tailored to your unique business needs, built with cutting-edge technologies and best practices.",
      features: ["Web Applications", "Mobile Apps", "API Development", "Cloud Solutions"],
    },
    {
      icon: Brain,
      title: "AI-Powered Solutions",
      description: "Leverage artificial intelligence to create intelligent care and education platforms that adapt to user needs.",
      features: ["AI Integration", "Machine Learning", "Chatbots", "Predictive Analytics"],
    },
    {
      icon: Palette,
      title: "Product Design & MVP",
      description: "Transform your ideas into beautiful, functional prototypes with our expert design and rapid MVP development.",
      features: ["UI/UX Design", "Prototyping", "User Research", "MVP Development"],
    },
    {
      icon: GraduationCap,
      title: "Digital Education Programs",
      description: "Comprehensive training programs that empower individuals with essential digital skills for the modern workplace.",
      features: ["Coding Bootcamps", "Tech Workshops", "Online Courses", "Corporate Training"],
    },
    {
      icon: Heart,
      title: "Tech for Wellness",
      description: "Innovative technology solutions designed to enhance social care, emotional wellness, and community connection.",
      features: ["Wellness Apps", "Care Platforms", "Community Tools", "Health Tech"],
    },
    {
      icon: Building,
      title: "IT Consulting",
      description: "Strategic guidance and digital transformation services to help your organization thrive in the digital age.",
      features: ["Digital Strategy", "Tech Audits", "System Integration", "Process Optimization"],
    },
    {
      icon: Rocket,
      title: "Startup Acceleration",
      description: "From idea to launch, we help startups build, scale, and succeed with comprehensive support and mentorship.",
      features: ["Idea Validation", "MVP Development", "Mentorship", "Go-to-Market Strategy"],
    },
    {
      icon: Briefcase,
      title: "Innovation Solutions",
      description: "Custom innovation strategies that combine technology with empathy to create meaningful impact.",
      features: ["Innovation Workshops", "Ideation Sessions", "Technology Consulting", "Impact Assessment"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent/30 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive solutions that merge technology, education, and compassionate care
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm text-foreground">Key Features:</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background to-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Transform Your Ideas?
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's work together to create innovative solutions that make a real difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Start Your Project
              </Button>
              <Button size="lg" variant="outline">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
