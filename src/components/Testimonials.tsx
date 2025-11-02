import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Outstanding developer who consistently delivers high-quality code. Their problem-solving skills and attention to detail are exceptional.",
      initials: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Product Manager, InnovateLabs",
      content: "A pleasure to work with! They transformed our vision into reality with elegant solutions and great communication throughout the project.",
      initials: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, StartupHub",
      content: "Incredible technical expertise combined with business acumen. They helped us scale our platform from 1K to 100K users seamlessly.",
      initials: "ER",
    },
  ];

  return (
    <section id="testimonials" className="py-20 relative bg-accent/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-lg text-foreground/70 mb-12 text-center max-w-2xl mx-auto">
            What people say about working with me
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="glass-card hover:scale-105 transition-all duration-300 group"
              >
                <CardContent className="pt-6">
                  <Quote className="w-10 h-10 text-primary/30 mb-4" />
                  <p className="text-foreground/80 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar className="border-2 border-primary/20">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold group-hover:text-primary transition-colors">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-foreground/60">{testimonial.role}</p>
                    </div>
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

export default Testimonials;
