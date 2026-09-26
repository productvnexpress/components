import { ArrowRight, Facebook, Github, Linkedin, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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

const NAVIGATION_1 = [
  {
    title: "AI Features",
    links: [
      { name: "Smart Cut", href: "#" },
      { name: "Auto Enhance", href: "#" },
      { name: "Voice Clarity", href: "#" },
      { name: "Scene Detection", href: "#" },
      { name: "Subtitle Generator", href: "#" },
      { name: "Background Blur", href: "#" },
      { name: "Color Correction", href: "#" },
      { name: "Motion Tracking", href: "#" },
      { name: "AI Transitions", href: "#" },
      { name: "Face Recognition", href: "#" },
      { name: "Audio Sync", href: "#" },
      { name: "3D Effects", href: "#" },
      { name: "AI Filters", href: "#" },
      { name: "Green Screen", href: "#" },
    ],
  },
  {
    title: "Product Info",
    links: [
      { name: "Pricing Plans", href: "#" },
      { name: "Download App", href: "#" },
      { name: "System Requirements", href: "#" },
      { name: "Release Notes", href: "#" },
      { name: "User Feedback", href: "#" },
      { name: "API Integrations", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "#" },
      { name: "Tutorials", href: "#" },
      { name: "Community Forum", href: "#" },
      { name: "Affiliate Program", href: "#" },
      { name: "Contact Support", href: "#" },
    ],
  },
  {
    title: "About Us",
    links: [
      { name: "Our Story", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Ethical AI", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  },
];

const NAVIGATION_2 = [
  {
    title: "Guides",
    links: [
      { name: "Getting Started with AI Editing", href: "#" },
      { name: "Advanced Editing Techniques", href: "#" },
      { name: "Creating Viral Videos", href: "#" },
      { name: "Improving Audio Quality", href: "#" },
      { name: "Reducing Background Noise", href: "#" },
      { name: "Sharing Your Content", href: "#" },
      { name: "All Guides", icon: ArrowRight, href: "#" },
    ],
  },
  {
    title: "Tools",
    links: [
      { name: "AI Video Editor", href: "#" },
      { name: "Voice Enhancer", href: "#" },
      { name: "Speech to Text", href: "#" },
      { name: "Audio to Text", href: "#" },
      { name: "Clip Maker", href: "#" },
      { name: "All Tools", icon: ArrowRight, href: "#" },
    ],
  },
];

interface Footer19Props {
  className?: string;
}

const Footer19 = ({ className }: Footer19Props) => {
  return (
    <section className={cn("pt-8 pb-0 lg:p-6", className)}>
      <footer className="dark rounded-tl-[0.75rem] rounded-tr-[0.75rem] bg-background px-8 py-24 lg:rounded-[0.75rem]">
        <div className="container flex w-full flex-col justify-between gap-5 lg:flex-row">
          <div className="flex basis-[33.33%] flex-col gap-[3.125rem]">
            <div className="w-32">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-white-9.svg"
                alt=""
                className="block size-full object-contain object-center"
              />
            </div>
            <ul className="flex items-center gap-4">
              {SOCIAL_LINKS.map((link, i) => (
                <li key={`social-link-${i}`}>
                  <Button size="icon" className="size-8" variant="ghost">
                    <link.icon className="size-5 stroke-foreground" />
                  </Button>
                </li>
              ))}
            </ul>
            <p className="text-xs">© Company Name 2025</p>
          </div>
          <div className="flex w-full basis-[66.66%] flex-col gap-16">
            <div className="mt-5 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
              {NAVIGATION_1.map((section) => (
                <ul
                  className="flex flex-col gap-2.5"
                  key={`footer-section-1-${section.title}`}
                >
                  <li className="mb-2.5 text-sm leading-normal text-foreground">
                    {section.title}
                  </li>
                  {section.links.map((link) => (
                    <li key={`footer-link-1-${section.title}-${link.name}`}>
                      <a
                        className="text-sm leading-normal text-muted-foreground"
                        href={link.href}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
            <div className="rounded-[0.625rem] bg-muted p-6 pb-8">
              <div className="grid gap-10 lg:grid-cols-[1fr_0.5fr_0.5fr] lg:gap-0">
                {NAVIGATION_2.map((section) => (
                  <ul
                    className="flex flex-col gap-2.5"
                    key={`footer-section-2-${section.title}`}
                  >
                    <li className="mb-2.5 text-sm leading-normal text-foreground">
                      {section.title}
                    </li>
                    {section.links.map((link) => (
                      <li key={`footer-link-2-${section.title}-${link.name}`}>
                        <a
                          className="flex items-center gap-1 text-[0.8125rem] leading-normal text-muted-foreground"
                          href={link.href}
                        >
                          {link.name}
                          {link.icon ? (
                            <link.icon className="size-3.5 stroke-[0.09375rem]" />
                          ) : (
                            <></>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                ))}
                <div className="flex flex-col gap-2.5">
                  <a href="#" className="text-sm text-foreground">
                    For Teams
                  </a>
                  <a href="#" className="text-sm text-foreground">
                    For Enterprise
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export { Footer19 };
