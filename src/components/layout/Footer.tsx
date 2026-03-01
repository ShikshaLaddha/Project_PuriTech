import { Separator } from "@/components/ui/separator";

const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
  { href: "#terms", label: "Terms" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold">PuriTech</h3>
            <p className="mt-2 text-sm text-background/70">
              Where Technology Meets Indian Street Food
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-background/70 transition-colors hover:text-background"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <Separator className="my-8 bg-background/20" />

        {/* Copyright */}
        <div className="flex flex-col items-center gap-4 text-center text-sm text-background/60 md:flex-row md:justify-between">
          <p>© {currentYear} PuriTech. All rights reserved.</p>
          <p>
            Contact:{" "}
            <a
              href="mailto:officialPuriTech@gmail.com"
              className="text-background/80 hover:text-background"
            >
              officialPuriTech@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
