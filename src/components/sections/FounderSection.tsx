import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollAnimated, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animated";

const FounderSection = () => {
  return (
    <section id="founders" className="bg-secondary/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <ScrollAnimated className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Our Story
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Founder's Journey
          </h2>
        </ScrollAnimated>

        {/* Story card */}
        <ScrollAnimated>
          <Card className="mx-auto max-w-4xl border-border/50 bg-card">
            <CardContent className="p-8 md:p-12">
              <Quote className="mb-6 h-10 w-10 text-primary/30" />
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  The PuriTech journey began during the college years of founders{" "}
                  <strong className="text-foreground">Shiksha laddha</strong>. What
                  started as curiosity about improving street food turned into a
                  mission.
                </p>
                <p>
                  Working from a small, godown-like workspace, they built and
                  tested multiple iterations of a semi-automated pani-puri vending
                  cart. There were no fancy labs or big budgets—just hands-on
                  experimentation, welding sparks, and countless late nights.
                </p>
                <p>
                  Through real street-level feedback and persistent refinement,
                  the idea evolved from a rough prototype into a structured,
                  hygienic, and scalable street-food vending solution. Every
                  challenge taught them something new about what vendors actually
                  need.
                </p>
                <p className="font-medium text-foreground">
                  Today, PuriTech stands as proof that great ideas don't need
                  perfect beginnings—they need persistence, passion, and a
                  willingness to learn from the streets.
                </p>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimated>

        {/* Founders */}
        <StaggerContainer className="mx-auto mt-12 flex max-w-md flex-col items-center justify-center gap-8 sm:flex-row sm:gap-16" staggerDelay={0.2}>
          <StaggerItem>
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <span className="text-2xl font-bold text-primary">LG</span>
              </div>
              <div className="font-semibold text-foreground">Shiksha laddha</div>
              <div className="text-sm text-muted-foreground">Co-Founder</div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default FounderSection;
