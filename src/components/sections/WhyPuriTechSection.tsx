import { XCircle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollAnimated, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animated";

const problems = [
  "Inconsistent hygiene standards",
  "Unpredictable taste variations",
  "Limited scalability for vendors",
  "High manual labor dependency",
  "Difficult to franchise or replicate",
];

const solutions = [
  "Hygiene-first design with food-grade materials",
  "Automated mixing for consistent taste",
  "Easily scalable vending systems",
  "Semi-automation reduces labor needs",
  "Franchise-ready with standardized operations",
];

const WhyPuriTechSection = () => {
  return (
    <section id="why-PuriTech" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <ScrollAnimated className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            The Difference
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Why PuriTech?
          </h2>
          <p className="text-muted-foreground">
            We solve the real challenges of traditional Indian street food
          </p>
        </ScrollAnimated>

        {/* Problem vs Solution */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Problem card */}
          <ScrollAnimated direction="left">
            <Card className="h-full border-destructive/20 bg-destructive/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-destructive">
                  <XCircle className="h-6 w-6" />
                  The Problem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-muted-foreground">
                  Traditional street food faces significant challenges that limit
                  growth and put customers at risk.
                </p>
                <ul className="space-y-3">
                  {problems.map((problem, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive/70" />
                      <span className="text-foreground/80">{problem}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </ScrollAnimated>

          {/* Solution card */}
          <ScrollAnimated direction="right">
            <Card className="h-full border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-primary">
                  <CheckCircle className="h-6 w-6" />
                  Our Solution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-muted-foreground">
                  PuriTech's smart semi-automation transforms street food
                  vending with thoughtful engineering.
                </p>
                <ul className="space-y-3">
                  {solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-foreground/80">{solution}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </ScrollAnimated>
        </div>

        {/* Trust indicators */}
        <StaggerContainer className="mt-12 grid gap-6 text-center sm:grid-cols-3 md:mt-16" staggerDelay={0.15}>
          <StaggerItem>
            <div className="rounded-lg bg-secondary/50 p-6">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="mt-1 text-sm text-muted-foreground">
                Food-Grade Materials
              </div>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="rounded-lg bg-secondary/50 p-6">
              <div className="text-3xl font-bold text-primary">6</div>
              <div className="mt-1 text-sm text-muted-foreground">
                Flavour Options
              </div>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="rounded-lg bg-secondary/50 p-6">
              <div className="text-3xl font-bold text-primary">Street</div>
              <div className="mt-1 text-sm text-muted-foreground">
                Tested & Proven
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WhyPuriTechSection;
