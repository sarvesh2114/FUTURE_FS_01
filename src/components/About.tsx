import { Card } from "@/components/ui/card";
import { Code2, Rocket, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Agile development process ensuring rapid and reliable deployment",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative mindset with excellent communication skills",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-foreground/70 mb-12 text-center max-w-2xl mx-auto">
            I'm a passionate software engineer with expertise in building exceptional digital experiences.
            With a strong foundation in modern web technologies and a keen eye for design, I transform
            ideas into elegant, functional solutions.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="glass-card p-6 hover:scale-105 transition-transform duration-300 group"
              >
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:glow-primary transition-all">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
