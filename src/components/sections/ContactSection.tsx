import { useState } from "react";
import { Phone, Mail, MapPin, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ScrollAnimated } from "@/components/ui/scroll-animated";

const contactInfo = [
  {
    icon: User,
    label: "Contact Person",
    value: "Shiksha laddha",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "7806063565",
    href: "tel:+917806063565",
  },
  {
    icon: Mail,
    label: "Email",
    value: "officialPuriTech@gmail.com",
    href: "mailto:officialPuriTech@gmail.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "SNGH,Sgsits,Indore,MP,India",
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link
    const subject = encodeURIComponent(
      `Inquiry from ${formData.name} via PuriTech Website`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:officialPuriTech@gmail.com?subject=${subject}&body=${body}`;

    // Open mail client
    window.location.href = mailtoLink;

    // Show success toast
    toast.success("Opening your email client...", {
      description: "Please send the email to complete your inquiry.",
    });

    // Reset form
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <ScrollAnimated className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Get In Touch
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Contact Us
          </h2>
          <p className="text-muted-foreground">
            Ready to transform your street food business? Let's talk.
          </p>
        </ScrollAnimated>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {/* Contact info */}
          <ScrollAnimated direction="left">
            <div>
              <h3 className="mb-6 text-xl font-semibold text-foreground">
                PuriTech
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium text-foreground hover:text-primary"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="font-medium text-foreground">
                          {item.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimated>

          {/* Contact form */}
          <ScrollAnimated direction="right">
            <Card className="border-border/50">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollAnimated>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
