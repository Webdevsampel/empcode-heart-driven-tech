import { DollarSign, Code, GraduationCap, Rocket, HandshakeIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const RevenueModel = () => {
  const streams = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom web and mobile applications, AI-powered platforms, and enterprise solutions",
      model: "Project-based & Retainer"
    },
    {
      icon: GraduationCap,
      title: "Education Programs",
      description: "Digital literacy courses, coding bootcamps, and tech training for individuals and teams",
      model: "Course Fees & Subscriptions"
    },
    {
      icon: Rocket,
      title: "Consulting Services",
      description: "Digital transformation consulting, startup acceleration, and innovation strategy",
      model: "Hourly & Fixed-price"
    },
    {
      icon: HandshakeIcon,
      title: "Partnerships & Sponsorships",
      description: "Corporate partnerships, program sponsorships, and collaborative impact initiatives",
      model: "Tiered Sponsorships"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-accent/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary/10">
            <DollarSign className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Revenue Model
          </h2>
          <p className="text-lg text-muted-foreground">
            Sustainable revenue streams that enable us to scale our impact and serve more communities
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {streams.map((stream, index) => {
            const Icon = stream.icon;
            return (
              <Card 
                key={index}
                className="border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-foreground">{stream.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{stream.description}</p>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {stream.model}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RevenueModel;
