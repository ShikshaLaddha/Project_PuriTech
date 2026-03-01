import {
  Target,
  Eye,
  Heart,
  ShieldCheck,
  Lightbulb,
  Award,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollAnimated, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animated";

const values = [
  { icon: Heart, label: "Authenticity" },
  { icon: ShieldCheck, label: "Hygiene & Safety" },
  { icon: Lightbulb, label: "Innovation" },
  { icon: Award, label: "Reliability" },
  { icon: TrendingUp, label: "Scalability" },
];

const MissionVisionSection = () => {
  return (
    <section id="mission" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <ScrollAnimated className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Our Purpose
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Mission, Vision & Values
          </h2>
        </ScrollAnimated>

        {/* Mission and Vision cards */}
        <div className="mb-12 grid gap-8 md:grid-cols-2 md:mb-16">
          {/* Mission */}
          <ScrollAnimated direction="left">
            <Card className="h-full border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To redefine Indian street-food vending by combining authentic
                  flavours with hygienic practices, smart automation, and
                  thoughtful design. We empower vendors and entrepreneurs with
                  reliable, easy-to-use, and scalable vending systems that honour
                  tradition while embracing innovation.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimated>

          {/* Vision */}
          <ScrollAnimated direction="right">
            <Card className="h-full border-primary/20 bg-gradient-to-br from-accent/50 to-transparent">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To build PuriTech into a global street-food vending brand,
                  starting in India and expanding internationally while preserving
                  the essence of Indian flavours. We envision branded PuriTech
                  chaupatis and world-class hygienic vending systems across
                  continents.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimated>
        </div>

        {/* Values */}
        <ScrollAnimated className="mx-auto max-w-4xl">
          <h3 className="mb-8 text-center text-xl font-semibold text-foreground">
            Our Core Values
          </h3>
          <StaggerContainer className="flex flex-wrap items-center justify-center gap-4" staggerDelay={0.1}>
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <div className="flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5">
                  <value.icon className="h-5 w-5 text-primary" />
                  <span className="font-medium text-foreground">
                    {value.label}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </ScrollAnimated>
      </div>
    </section>
  );
};

export default MissionVisionSection;
