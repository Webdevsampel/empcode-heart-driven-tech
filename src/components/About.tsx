import { Heart, Lightbulb, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Heart,
      title: "Empathy First",
      description: "We build with heart, connecting technology to human needs"
    },
    {
      icon: Lightbulb,
      title: "Innovation for Good",
      description: "Every solution is designed to uplift and empower"
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Creating meaningful change through collaboration"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Innovation at the Intersection
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            EMPCODE is an innovation-driven organization at the intersection of technology, 
            education, and human connection. We empower individuals and organizations with 
            world-class digital skills while nurturing emotional well-being through interactive, 
            human-centered learning experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index}
                className="p-8 text-center hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
