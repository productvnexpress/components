import { Star } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    heading: "Features",
    items: [
      { title: "Dashboard", href: "#" },
      { title: "Analytics", href: "#" },
      { title: "Reports", href: "#" },
      { title: "Projects", href: "#" },
      { title: "Tasks", href: "#" },
      { title: "Plans", href: "#" },
      { title: "API", href: "#" },
      { title: "Install", href: "#" },
    ],
  },
  {
    heading: "Resources",
    items: [
      { title: "Documentation", href: "#" },
      { title: "Help Center", href: "#" },
      { title: "Security", href: "#" },
      { title: "Terms of Service", href: "#" },
      { title: "Media Kit", href: "#" },
    ],
  },
  {
    heading: "Company",
    items: [
      { title: "About Us", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Transparency", href: "#" },
      { title: "Partners", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: FaFacebook, href: "#" },
  { icon: FaInstagram, href: "#" },
  { icon: FaLinkedin, href: "#" },
  { icon: FaXTwitter, href: "#" },
  { icon: FaYoutube, href: "#" },
];

interface Footer28Props {
  className?: string;
}

const Footer28 = ({ className }: Footer28Props) => {
  return (
    <footer className={cn("py-32", className)}>
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
            alt="logo"
            className="h-10 dark:invert"
          />
          <p className="text-xl sm:text-2xl">Build products that matter.</p>
        </div>
        <Separator className="my-10 sm:my-16" />
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-32">
            {menuItems.map((item) => (
              <div key={item.heading}>
                <h3 className="mb-2">{item.heading}</h3>
                <ul className="flex flex-col gap-2 text-muted-foreground">
                  {item.items.map((link) => (
                    <li key={link.title}>
                      <a href={link.href} className="hover:text-primary">
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-between gap-8">
            <div>
              <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                <a
                  href="#"
                  className="flex items-center gap-px overflow-hidden rounded-md border border-border bg-border text-sm font-medium"
                >
                  <div className="flex items-center gap-2 bg-background px-3 py-1.5">
                    <Star className="size-4" />
                    <span>Star</span>
                  </div>
                  <div className="flex items-center gap-2 bg-background px-3 py-1.5">
                    <span>15.2K</span>
                  </div>
                </a>
                <div className="flex items-center gap-1">
                  {socialLinks.map((link, index) => (
                    <Button key={index} variant="ghost" size="icon" asChild>
                      <a href={link.href}>
                        <link.icon className="size-5" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
              <form className="mt-8 flex max-w-sm items-center gap-2">
                <Input
                  type="email"
                  placeholder="Join our newsletter"
                  className="bg-background text-sm"
                />
                <Button>Subscribe</Button>
              </form>
            </div>
            <Badge variant="outline" className="gap-2 px-3 py-1.5 lg:self-end">
              Online
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex size-1.5 rounded-full bg-green-500"></span>
              </span>
            </Badge>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer28 };
