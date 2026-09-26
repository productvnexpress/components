"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { FaDiscord, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";

interface Footer29Props {
  className?: string;
}

const navigationLinks = [
  {
    title: "PRODUCTS",
    links: [
      { name: "Features", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Enterprise", href: "#" },
      { name: "Integrations", href: "#" },
      { name: "API", href: "#" },
      { name: "Changelog", href: "#" },
      { name: "Roadmap", href: "#" },
      { name: "Security", href: "#" },
      { name: "Status", href: "#" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { name: "Documentation", href: "#" },
      { name: "Getting Started", href: "#" },
      { name: "Tutorials", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Webinars", href: "#" },
      { name: "Community", href: "#" },
      { name: "Support", href: "#" },
      { name: "Help Center", href: "#" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { name: "About", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Partners", href: "#" },
      { name: "News", href: "#" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Accessibility", href: "#" },
      { name: "Licensing", href: "#" },
    ],
  },
];

const socialLinks = [
  { name: "Facebook", href: "#", icon: FaFacebook },
  { name: "Instagram", href: "#", icon: FaInstagram },
  { name: "Linkedin", href: "#", icon: FaLinkedin },
  { name: "X", href: "#", icon: FaXTwitter },
  { name: "YouTube", href: "#", icon: FaYoutube },
  { name: "Discord", href: "#", icon: FaDiscord },
];

const Footer29 = ({ className }: Footer29Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <footer>
          <div className="flex flex-col justify-between gap-8 lg:flex-row">
            <div className="flex flex-col items-start gap-8">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblocks-logo-word.svg"
                alt="logo"
                className="h-10 dark:invert"
              />
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log("submitted");
                }}
                className="space-y-2"
              >
                <Label htmlFor="email">Subscribe to our newsletter</Label>
                <ButtonGroup>
                  <Input
                    required
                    type="email"
                    placeholder="Enter your email address..."
                  />
                  <Button>Subscribe</Button>
                </ButtonGroup>
              </form>
            </div>
            <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
              {navigationLinks.map((section) => (
                <div key={section.title} className="flex flex-col gap-4">
                  <h3 className="text-sm font-semibold uppercase">
                    {section.title}
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <span>{link.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <Separator className="my-14 lg:my-20" />
          <div className="flex flex-col justify-between gap-4 text-sm font-medium text-muted-foreground lg:flex-row lg:items-end">
            <div className="flex flex-col gap-2">
              <p className="text-[10px] font-medium text-muted-foreground uppercase">
                KEEP IN TOUCH
              </p>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <link.icon className="size-4.5" />
                  </a>
                ))}
              </div>
            </div>
            <p className="order-last text-xs lg:order-none">
              © {new Date().getFullYear()} Shadcnblocks.com. All rights
              reserved.
            </p>
            <div className="flex items-center gap-4">
              <Badge className="rounded-full border-muted bg-background py-1 text-foreground">
                <a href="#" className="flex items-center gap-2 px-3 py-1.5">
                  <div className="relative size-[0.4375rem]">
                    <span className="absolute top-1/2 left-1/2 z-10 size-[0.6875rem] -translate-1/2 animate-pulse rounded-full bg-green-400/50" />
                    <span className="absolute top-1/2 left-1/2 z-20 size-full -translate-1/2 rounded-full bg-green-500" />
                  </div>
                  <div className="text-xs leading-none">
                    All systems operational
                  </div>
                </a>
              </Badge>
              <ToggleGroup variant="outline" type="single" defaultValue="light">
                <ToggleGroupItem value="light" aria-label="Toggle light">
                  <Sun />
                </ToggleGroupItem>
                <ToggleGroupItem value="dark" aria-label="Toggle dark">
                  <Moon />
                </ToggleGroupItem>
                <ToggleGroupItem value="system" aria-label="Toggle system">
                  <Monitor />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer29 };
