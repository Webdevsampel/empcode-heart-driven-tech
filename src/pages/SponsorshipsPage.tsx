import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Heart, Star, Crown, Users, Globe, Zap } from "lucide-react";

const SponsorshipsPage = () => {
  const tiers = [
    {
      name: "Community Partner",
      icon: Heart,
      price: "$1,000 - $5,000",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/20",
      benefits: [
        "Logo on our website",
        "Social media recognition",
        "Quarterly impact reports",
        "Access to community events",
      ],
    },
    {
      name: "Innovation Supporter",
      icon: Star,
      price: "$5,000 - $15,000",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
      benefits: [
        "All Community Partner benefits",
        "Featured in newsletters",
        "Co-branded content opportunities",
        "Priority event access",
        "Direct impact tracking",
      ],
    },
    {
      name: "Empowerment Champion",
      icon: Crown,
      price: "$15,000+",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20",
      featured: true,
      benefits: [
        "All Innovation Supporter benefits",
        "Naming opportunities for programs",
        "Exclusive partnership events",
        "Board advisory opportunities",
        "Custom impact initiatives",
        "Speaking opportunities at our events",
      ],
    },
  ];

  const impactAreas = [
    {
      icon: Users,
      title: "Digital Education",
      description: "Sponsor coding bootcamps and tech workshops that empower underserved communities with digital skills.",
    },
    {
      icon: Heart,
      title: "Wellness Programs",
      description: "Support mental health and emotional wellness initiatives that combine technology with compassionate care.",
    },
    {
      icon: Zap,
      title: "Innovation Labs",
      description: "Fund startup incubators and innovation centers where ideas transform into impactful solutions.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Enable us to expand EMPCODE Centers worldwide, reaching more communities in need.",
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
              Partner with <span className="text-primary">EmpCode</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Join us in building a world where technology, education, and empathy unite to create lasting impact
            </p>
          </div>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Sponsor EmpCode?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your sponsorship directly impacts lives by enabling access to quality education, fostering innovation, and building compassionate communities. Together, we're creating a future where everyone has the opportunity to thrive in the digital age.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {impactAreas.map((area, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <area.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{area.title}</h3>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sponsorship Opportunities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose a partnership level that aligns with your goals and values
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers.map((tier, index) => (
              <Card 
                key={index}
                className={`${tier.borderColor} ${tier.featured ? 'ring-2 ring-primary shadow-xl scale-105' : ''} transition-all duration-300 hover:shadow-lg`}
              >
                <CardHeader>
                  <div className={`w-16 h-16 ${tier.bgColor} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                    <tier.icon className={`w-8 h-8 ${tier.color}`} />
                  </div>
                  <CardTitle className="text-2xl text-center">{tier.name}</CardTitle>
                  <p className="text-3xl font-bold text-center text-foreground mt-4">{tier.price}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={tier.featured ? "default" : "outline"}>
                    Become a Sponsor
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Sponsorship */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="pt-6 text-center space-y-6 py-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Custom Sponsorship Packages
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have a specific vision for partnership? We'd love to create a custom sponsorship package that aligns perfectly with your organization's goals and values.
              </p>
              <Button size="lg">
                Contact Us for Custom Options
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-gradient-to-b from-background to-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Our Impact by 2030
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-2">
                <p className="text-5xl font-bold text-primary">1M+</p>
                <p className="text-muted-foreground">Lives Impacted</p>
              </div>
              <div className="text-center space-y-2">
                <p className="text-5xl font-bold text-secondary">50+</p>
                <p className="text-muted-foreground">EMPCODE Centers</p>
              </div>
              <div className="text-center space-y-2">
                <p className="text-5xl font-bold text-accent">100+</p>
                <p className="text-muted-foreground">Startups Incubated</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SponsorshipsPage;
