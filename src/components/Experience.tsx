import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Innovation Labs",
      period: "2022 - Present",
      description: "Leading development of cloud-native applications and mentoring junior developers",
      technologies: ["React", "Node.js", "AWS", "Docker"],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Inc",
      period: "2020 - 2022",
      description: "Built scalable web applications serving 100K+ users with focus on performance",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Redis"],
    },
    {
      title: "Software Developer",
      company: "StartUp Ventures",
      period: "2018 - 2020",
      description: "Developed MVP products and implemented agile development practices",
      technologies: ["JavaScript", "MongoDB", "Express", "React"],
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-foreground/70 mb-12 text-center max-w-2xl mx-auto">
            My professional journey in software development
          </p>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="glass-card hover:scale-[1.02] transition-all duration-300 overflow-hidden group"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1 group-hover:text-primary transition-colors">
                        {exp.title}
                      </CardTitle>
                      <p className="text-foreground/70 font-medium">{exp.company}</p>
                      <p className="text-sm text-foreground/50 mt-1">{exp.period}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
