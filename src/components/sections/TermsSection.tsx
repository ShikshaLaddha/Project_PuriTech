import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollAnimated } from "@/components/ui/scroll-animated";

const termsContent = [
  {
    id: "product-usage",
    title: "Product Usage",
    content:
      "PuriTech vending machines are designed for dispensing pani-puri and related products only. The equipment must be operated according to the provided training and user manual. Any modifications or unauthorized use may void warranty and support agreements. Operators are responsible for ensuring the machine is used in suitable environments as specified during installation.",
  },
  {
    id: "customization",
    title: "Customization",
    content:
      "PuriTech offers customization options for branding, colour schemes, and specific feature configurations. Custom orders must be discussed and agreed upon before production begins. Additional charges may apply for special requests. Customization timelines will be communicated during the ordering process.",
  },
  {
    id: "maintenance",
    title: "Maintenance Responsibility",
    content:
      "Operators are responsible for daily cleaning and basic maintenance as outlined in the operator manual. PuriTech provides maintenance support as per the service agreement. Neglecting routine maintenance may affect machine performance and warranty coverage. Regular inspections by PuriTech technicians can be arranged through service contracts.",
  },
  {
    id: "warranty",
    title: "Warranty",
    content:
      "PuriTech products come with a limited warranty covering manufacturing defects and component failures under normal operating conditions. Warranty period and terms will be specified at the time of purchase. Damage caused by misuse, unauthorized modifications, or environmental factors not covered in specifications is excluded from warranty.",
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content:
      "All designs, mechanisms, software, and branding related to PuriTech products are the intellectual property of PuriTech. Reproduction, reverse engineering, or unauthorized distribution of any proprietary elements is strictly prohibited. Licensees and partners must adhere to usage guidelines provided in their agreements.",
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    content:
      "PuriTech is not liable for any indirect, incidental, or consequential damages arising from the use of our products. Our total liability is limited to the value of the product or service purchased. Users acknowledge that street-food vending involves inherent risks and agree to operate responsibly.",
  },
  {
    id: "updates",
    title: "Updates & Modifications",
    content:
      "PuriTech reserves the right to update product designs, features, and terms of service. Existing customers will be notified of significant changes. Software and firmware updates will be provided as part of ongoing product improvement. These terms may be revised periodically, and continued use constitutes acceptance of updated terms.",
  },
];

const TermsSection = () => {
  return (
    <section id="terms" className="bg-secondary/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <ScrollAnimated className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Legal
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Terms & Conditions
          </h2>
          <p className="text-muted-foreground">
            Please review our terms of service carefully
          </p>
        </ScrollAnimated>

        {/* Terms accordion */}
        <ScrollAnimated className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {termsContent.map((term) => (
              <AccordionItem key={term.id} value={term.id}>
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                  {term.title}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {term.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollAnimated>
      </div>
    </section>
  );
};

export default TermsSection;
