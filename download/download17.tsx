"use client";

import { ArrowRight, Download } from "lucide-react";
import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Download17Props {
  logo?: string;
  title?: string;
  subtitle?: string;
  availableDownloads?: {
    version: number;
    badge?: string;
    downloads: {
      macOS: string[];
      Windows: string[];
      Linux: string[];
    };
  }[];
  defaultOpen?: boolean;
  className?: string;
}
const Download17 = ({
  logo = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  title = "Download DevTool",
  subtitle = "Cross-platform development tool for all major operating systems",
  availableDownloads = [
    {
      version: 2.1,
      badge: "Latest",
      downloads: {
        macOS: [
          "macOS (Apple Silicon)",
          "macOS (Intel)",
          "macOS (Universal Binary)",
        ],
        Windows: [
          "Windows 64-bit (System Install)",
          "Windows 64-bit (User Install)",
          "Windows ARM64 (System Install)",
          "Windows ARM64 (User Install)",
        ],
        Linux: [
          "Debian Package (ARM64)",
          "Debian Package (x64)",
          "RPM Package (ARM64)",
          "RPM Package (x64)",
          "AppImage (ARM64)",
          "AppImage (x64)",
        ],
      },
    },
    {
      version: 2.0,
      downloads: {
        macOS: [
          "macOS (Apple Silicon)",
          "macOS (Intel)",
          "macOS (Universal Binary)",
        ],
        Windows: [
          "Windows 64-bit (System Install)",
          "Windows 64-bit (User Install)",
          "Windows ARM64 (System Install)",
          "Windows ARM64 (User Install)",
        ],
        Linux: [
          "Debian Package (ARM64)",
          "Debian Package (x64)",
          "RPM Package (ARM64)",
          "RPM Package (x64)",
          "AppImage (ARM64)",
          "AppImage (x64)",
        ],
      },
    },
    {
      version: 1.9,
      downloads: {
        macOS: [
          "macOS (Apple Silicon)",
          "macOS (Intel)",
          "macOS (Universal Binary)",
        ],
        Windows: [
          "Windows 64-bit (System Install)",
          "Windows 64-bit (User Install)",
          "Windows ARM64 (System Install)",
          "Windows ARM64 (User Install)",
        ],
        Linux: [
          "Debian Package (ARM64)",
          "Debian Package (x64)",
          "RPM Package (ARM64)",
          "RPM Package (x64)",
          "AppImage (ARM64)",
          "AppImage (x64)",
        ],
      },
    },
    {
      version: 1.8,
      downloads: {
        macOS: [
          "macOS (Apple Silicon)",
          "macOS (Intel)",
          "macOS (Universal Binary)",
        ],
        Windows: [
          "Windows 64-bit (System Install)",
          "Windows 64-bit (User Install)",
          "Windows ARM64 (System Install)",
          "Windows ARM64 (User Install)",
        ],
        Linux: [
          "Debian Package (ARM64)",
          "Debian Package (x64)",
          "RPM Package (ARM64)",
          "RPM Package (x64)",
          "AppImage (ARM64)",
          "AppImage (x64)",
        ],
      },
    },
  ],
  defaultOpen = true,
  className,
}: Download17Props) => {
  const getUserDevice = (): string => {
    const userAgent = navigator.userAgent.toLowerCase();

    if (userAgent.includes("mac")) return "macOS";
    if (userAgent.includes("linux")) return "Linux";
    if (userAgent.includes("windows")) return "Windows";

    return "Desktop";
  };

  const [userDevice] = useState<string>(() => getUserDevice());

  const ICONS = {
    macOS: {
      url: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/apple.svg",
      className: "size-4.5",
    },
    Windows: {
      url: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/windows.svg",
      className: "size-3.5",
    },
    Linux: {
      url: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/linux.svg",
      className: "size-4",
    },
  };

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <img src={logo} alt={title} className="size-32 rounded-3xl" />
            <div className="flex flex-col">
              <h3 className="text-xl font-medium">{title}</h3>
              <p className="text-xl text-muted-foreground">{subtitle}</p>
              <Button className="mt-6 hidden w-fit sm:flex">
                Download for {userDevice} <Download />
              </Button>
              <Button className="mt-6 w-fit sm:hidden">
                Get mobile app <ArrowRight />
              </Button>
            </div>
          </div>
          <div className="border-y">
            <Accordion
              type="multiple"
              defaultValue={defaultOpen ? ["item-0"] : []}
            >
              {availableDownloads.map((item, idx1) => {
                const platforms = Object.keys(item.downloads);

                return (
                  <AccordionItem
                    key={`download-17-accordion-item-${idx1}`}
                    value={`item-${idx1}`}
                  >
                    <AccordionTrigger className="font-semibold hover:no-underline">
                      <div className="flex items-center gap-2 text-lg">
                        {item.version}
                        {item.badge && (
                          <Badge variant="outline">{item.badge}</Badge>
                        )}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 pt-4 pb-10">
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        {platforms.map((platform, idx2) => (
                          <div
                            key={`download-17-accordion-content-${platform}-${idx2}`}
                            className="flex flex-col gap-2 rounded border bg-muted p-4"
                          >
                            <div className="flex items-center gap-2 font-medium">
                              <img
                                src={ICONS[platform as keyof typeof ICONS].url}
                                alt={platform}
                                className={cn(
                                  ICONS[platform as keyof typeof ICONS]
                                    .className,
                                  "dark:invert",
                                )}
                              />
                              {platform}
                            </div>
                            <ul className="flex flex-col">
                              {item.downloads[
                                platform as keyof typeof ICONS
                              ].map((name, idx3) => {
                                return (
                                  <li
                                    key={`download-17-accordion-content-${platform}-${name}-${idx3}`}
                                    className="flex cursor-pointer items-center justify-between border-b py-3 transition-opacity duration-200 last:border-b-0 hover:opacity-70"
                                  >
                                    {name}
                                    <Download size={16} />
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <a
                        href="#"
                        className="flex items-center gap-2 hover:opacity-80"
                      >
                        View release notes <ArrowRight size={16} />
                      </a>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Download17 };
