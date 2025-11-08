import { Users, Building2, GraduationCap, Lightbulb, Heart, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const TargetAudience = () => {
  const audiences = [
    {
      icon: Users,
      title: "Individuals",
      description: "Aspiring tech professionals seeking digital skills and career advancement"
    },
    {
      icon: Building2,
      title: "Businesses",
      description: "Organizations needing custom software, AI solutions, and digital transformation"
    },
    {
      icon: GraduationCap,
      title: "Educational Institutions",
      description: "Schools and universities looking for innovative learning platforms"
    },
    {
      icon: Lightbulb,
      title: "Startups",
      description: "Entrepreneurs requiring MVP development and acceleration support"
    },
    {
      icon: Heart,
      title: "Care Organizations",
      description: "Healthcare and wellness providers seeking tech-enabled solutions"
    },
    {
      icon: Globe,
      title: "Communities",
      description: "Underserved communities needing accessible technology education"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Who We Serve
          </h2>
          <p className="text-lg text-muted-foreground">
            From individuals to global organizations, we empower diverse audiences with technology and compassion
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50 hover:-translate-y-1"
              >
                <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{audience.title}</h3>
                <p className="text-muted-foreground text-sm">{audience.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
