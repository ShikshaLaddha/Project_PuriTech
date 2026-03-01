import { ScrollAnimated } from "@/components/ui/scroll-animated";

const AboutSection = () => {
  return (
    <section id="about" className="bg-secondary/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <ScrollAnimated className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Who We Are
          </span>
          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
            About PuriTech
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              PuriTech was created to make Indian street food cleaner, smarter,
              and more reliable—without changing its authentic taste. We believe
              that the soulful flavours of India's streets deserve better
              systems, not different recipes.
            </p>
            <p>
              Our approach combines traditional recipes with food-grade
              materials, semi-automated systems, and thoughtful engineering. The
              result is vending solutions that are hygienic, easy to operate,
              and built to scale.
            </p>
            <p>
              From busy street corners to branded food outlets, PuriTech
              empowers vendors and entrepreneurs to serve with confidence—every
              single time.
            </p>
          </div>
        </ScrollAnimated>
      </div>
    </section>
  );
};

export default AboutSection;
