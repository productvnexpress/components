import { Facebook, Github, Linkedin, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAVIGATION = [
  {
    title: "Product",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
    links: [
      {
        name: "Docs",
        href: "#",
      },
      {
        name: "Demo",
        href: "#",
      },
      {
        name: "Features",
        href: "#",
      },
      {
        name: "Security",
        href: "#",
      },
      {
        name: "Solutions",
        href: "#",
      },
    ],
  },
  {
    title: "Company",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg",
    links: [
      {
        name: "Careers",
        href: "#",
      },
      {
        name: "Blog",
        href: "#",
      },
      {
        name: "Customer love",
        href: "#",
      },
      {
        name: "Brand guidelines",
        href: "#",
      },
    ],
  },
  {
    title: "Resources",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg",
    links: [
      {
        name: "Status",
        href: "#",
      },
      {
        name: "Support",
        href: "#",
      },
      {
        name: "Privacy policy",
        href: "#",
      },
      {
        name: "User terms of service",
        href: "#",
      },
      {
        name: "Dev terms of service",
        href: "#",
      },
      {
        name: "Bug bounty",
        href: "#",
      },
    ],
  },
];

const SOCIAL_LINKS = [
  {
    icon: Github,
    href: "#",
  },
  {
    icon: Linkedin,
    href: "#",
  },
  {
    icon: Facebook,
    href: "#",
  },
  {
    icon: Twitter,
    href: "#",
  },
];

const HOME_LINK = "https://shadcnblocks.com";

interface Footer21Props {
  className?: string;
}

const Footer21 = ({ className }: Footer21Props) => {
  return (
    <section className={cn("py-20", className)}>
      <footer className="container">
        <div className="grid w-full grid-cols-1 justify-center gap-14 lg:grid-cols-5">
          {NAVIGATION.map((section) => (
            <ul
              className="flex w-full flex-col items-start justify-start gap-2"
              key={`${section.title}`}
            >
              <li className="mb-1 size-4.5">
                <img
                  className="block size-full object-cover object-center"
                  src={section.image}
                  alt=""
                />
              </li>
              <li className="mb-1">
                <p className="leading-normal font-medium text-foreground">
                  {section.title}
                </p>
              </li>
              {section.links.map((link) => (
                <li key={`${link.name}`}>
                  <a
                    href={link.href}
                    className="text-[0.9375rem] leading-normal text-muted-foreground hover:text-foreground"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          ))}
          <div className="lg:col-[6/5] lg:self-end">
            <div className="flex w-full flex-col items-start justify-start gap-6 lg:items-end lg:justify-end">
              {/* Logo */}
              <a href={HOME_LINK}>
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
                  alt="Shadcnblocks"
                  title="Shadcnblocks"
                  className="h-10"
                />
              </a>
              <p className="text-left text-base leading-normal text-foreground lg:text-right">
                Every technical choice carries ethical impact.
              </p>
              <div className="flex w-full flex-col items-start justify-start gap-6 lg:items-end lg:justify-end">
                <div className="flex items-center">
                  {SOCIAL_LINKS.map((link, i) => (
                    <Button variant="ghost" asChild key={`social-link-${i}`}>
                      <a href={link.href}>
                        <link.icon />
                      </a>
                    </Button>
                  ))}
                </div>
                <p className="text-left text-xs leading-normal lg:text-right">
                  © 2025 shadcnblocks.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export { Footer21 };
