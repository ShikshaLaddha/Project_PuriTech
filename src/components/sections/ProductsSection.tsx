import {
  Droplets,
  Zap,
  ShieldCheck,
  Utensils,
  Truck,
  Users,
  Wrench,
  GraduationCap,
  HeadphonesIcon,
  Palette,
  Wifi,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollAnimated, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animated";
import ProductCarousel from "./ProductCarousel";

const productFeatures = [
  {
    icon: Droplets,
    title: "6-Flavour Dispensing",
    description:
      "Choose from six different pani varieties for authentic taste variety",
  },
  {
    icon: Zap,
    title: "Sensor-Based Automation",
    description:
      "Automatic dispensing when puri is placed—no buttons needed",
  },
  {
    icon: ShieldCheck,
    title: "Hygiene Benefits",
    description:
      "Reduced hand contact with food-grade pipelines and materials",
  },
  {
    icon: Utensils,
    title: "Consistent Taste",
    description:
      "Continuous masala and water mixing ensures uniform flavour",
  },
  {
    icon: Truck,
    title: "Mobile & Durable",
    description:
      "Strong, weather-resistant cart designed for Indian street conditions",
  },
  {
    icon: Users,
    title: "Ideal Use Cases",
    description:
      "Perfect for vendors, events, food outlets, and branded food streets",
  },
];

const services = [
  {
    icon: Wrench,
    title: "Design & Development",
    description:
      "Complete mechanical, electrical, and automation engineering",
  },
  {
    icon: GraduationCap,
    title: "Installation & Training",
    description:
      "On-site setup with comprehensive operator training",
  },
  {
    icon: HeadphonesIcon,
    title: "Maintenance & Support",
    description:
      "Ongoing technical support and maintenance services",
  },
  {
    icon: Palette,
    title: "Branding Support",
    description:
      "Custom branding and expansion consulting for your business",
  },
  {
    icon: Wifi,
    title: "Future IoT Upgrades",
    description:
      "Smart monitoring and automation capabilities coming soon",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="bg-secondary/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <ScrollAnimated className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Our Offering
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Products & Services
          </h2>
          <p className="text-muted-foreground">
            A complete vending solution designed for real Indian streets
          </p>
        </ScrollAnimated>

        {/* Product Carousel */}
        <ScrollAnimated delay={0.2} className="mb-16">
          <ProductCarousel />
        </ScrollAnimated>

        {/* Product */}
        <div className="mb-16">
          <ScrollAnimated>
            <h3 className="mb-8 text-center text-2xl font-semibold text-foreground md:text-left">
              Semi-Automated Pani-Puri Vending System
            </h3>
          </ScrollAnimated>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
            {productFeatures.map((feature, index) => (
              <StaggerItem key={index}>
                <Card className="h-full border-border/50 bg-card transition-all hover:shadow-md">
                  <CardHeader className="pb-3">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <Separator className="mb-16" />

        {/* Services */}
        <div>
          <ScrollAnimated>
            <h3 className="mb-8 text-center text-2xl font-semibold text-foreground md:text-left">
              Our Services
            </h3>
          </ScrollAnimated>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5" staggerDelay={0.1}>
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <Card className="h-full border-border/50 bg-card text-center transition-all hover:shadow-md">
                  <CardContent className="pt-6">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                      <service.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <h4 className="mb-2 font-semibold text-foreground">
                      {service.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
