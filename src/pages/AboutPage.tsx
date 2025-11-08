import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Lightbulb, Users, Target, Award, Globe } from "lucide-react";

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: "Empathy First",
      description: "We build with heart, connecting technology to human needs.",
    },
    {
      icon: Lightbulb,
      title: "Innovation for Good",
      description: "Every solution is designed to uplift and empower.",
    },
    {
      icon: Users,
      title: "Inclusivity",
      description: "Everyone deserves access to innovation.",
    },
    {
      icon: Target,
      title: "Integrity",
      description: "We operate with honesty, purpose, and care.",
    },
    {
      icon: Award,
      title: "Excellence with Impact",
      description: "Quality that transforms lives and communities.",
    },
    {
      icon: Globe,
      title: "Collaboration",
      description: "Because care and innovation thrive through partnership.",
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
              About <span className="text-primary">EmpCode</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Bringing Ideas, Empathy, and Innovation to Life
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-primary/20">
              <CardContent className="pt-6 space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become the world's leading catalyst for human-centered innovation — merging technology, compassion, and creativity to empower individuals, transform communities, and shape a connected, caring digital world.
                </p>
              </CardContent>
            </Card>

            <Card className="border-secondary/20">
              <CardContent className="pt-6 space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At EMPCODE, we educate, empower, and engage people through accessible technology programs and interactive care initiatives that stimulate the mind, inspire innovation, and nurture emotional connection.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Brand Overview */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Who We Are</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              EMPCODE is an innovation-driven organization at the intersection of technology, education, and human connection. We merge digital literacy with compassionate care to build a world where learning, empathy, and innovation coexist harmoniously.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission is twofold: to empower individuals and organizations with world-class digital skills and innovative solutions; and to nurture emotional well-being and social connection through interactive, human-centered learning experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at EmpCode
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Long-Term Vision */}
      <section className="py-20 bg-gradient-to-b from-background to-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our 5-Year Vision
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To establish EMPCODE Centers — hybrid digital hubs where education, innovation, and care intersect. Each center will serve as a space for digital skill development, emotional wellness programs, startup incubation, and community engagement.
            </p>
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-xl font-semibold text-foreground">
                  By 2030, EMPCODE aims to impact one million lives globally, fostering a new generation of compassionate innovators who build with both code and care.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
