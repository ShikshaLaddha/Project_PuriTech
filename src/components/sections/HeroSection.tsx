import {
  Sparkles,
  RefreshCw,
  MapPin,
  Shield,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollAnimated, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animated";

const highlights = [
  {
    icon: Sparkles,
    title: "Hygiene First",
    description: "Food-grade materials & minimal hand contact",
  },
  {
    icon: RefreshCw,
    title: "Same Taste, Every Time",
    description: "Consistent flavour through automated mixing",
  },
  {
    icon: MapPin,
    title: "Built for Real Streets",
    description: "Weather-resistant & street-tested design",
  },
  {
    icon: Shield,
    title: "Strong & Mobile",
    description: "Durable cart with easy mobility",
  },
  {
    icon: TrendingUp,
    title: "Ready to Scale",
    description: "Perfect for franchising & multi-location",
  },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 md:pt-24"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-accent/50 to-background" />

      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Hero content */}
        <ScrollAnimated className="mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Revolutionizing Street Food
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Where Technology Meets{" "}
            <span className="text-primary">Indian Street Food</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            PuriTech brings hygiene, automation, and authentic taste together.
            Our semi-automated pani-puri vending machines ensure every serving
            is clean, consistent, and true to tradition.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="min-w-[160px]">
              <a href="#products">Explore Product</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="min-w-[160px]">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </ScrollAnimated>

        {/* Highlight cards */}
        <StaggerContainer className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 md:mt-24" staggerDelay={0.1}>
          {highlights.map((item, index) => (
            <StaggerItem key={index}>
              <Card className="h-full border-border/50 bg-card/80 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default HeroSection;
