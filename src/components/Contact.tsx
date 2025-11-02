import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:contact@example.com",
      username: "contact@example.com",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      username: "@yourusername",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      username: "@yourusername",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com",
      username: "@yourusername",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-foreground/70 mb-12 text-center max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision
          </p>

          <Card className="glass-card p-8 mb-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
              <p className="text-foreground/70 mb-6">
                Feel free to reach out through any of these channels
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-auto p-4 border-primary/50 hover:bg-primary/10 hover:border-primary transition-all group"
                  asChild
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4"
                  >
                    <link.icon className="w-5 h-5 text-primary" />
                    <div className="text-left">
                      <div className="font-medium group-hover:text-primary transition-colors">
                        {link.label}
                      </div>
                      <div className="text-sm text-foreground/60">
                        {link.username}
                      </div>
                    </div>
                  </a>
                </Button>
              ))}
            </div>
          </Card>

          <div className="text-center text-foreground/60">
            <p>© 2024 Portfolio. Built with React & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
