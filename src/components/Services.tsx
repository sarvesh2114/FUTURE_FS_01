import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Smartphone, Cloud, Database, Palette, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Building responsive and performant web applications using modern frameworks and best practices",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Creating cross-platform mobile apps with native performance and beautiful user interfaces",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Architecting and deploying scalable cloud infrastructure on AWS, Azure, and GCP",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Designing robust APIs and database systems that scale with your business needs",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Crafting intuitive user experiences with attention to detail and accessibility",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Improving application speed, reducing load times, and optimizing resource usage",
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-lg text-foreground/70 mb-12 text-center max-w-2xl mx-auto">
            Comprehensive software development services to bring your ideas to life
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="glass-card hover:scale-105 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="p-3 rounded-lg bg-primary/10 w-fit mb-3 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-foreground/60">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
