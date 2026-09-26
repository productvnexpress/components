"use client";

import { ArrowRight, Check, ExternalLink, Search } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const integrations = [
  {
    name: "Slack",
    description:
      "Streamline team communication and project coordination workflows",
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-3.svg",
    link: "#",
  },
  {
    name: "Spotify",
    description:
      "Enhance productivity with curated music and ambient soundscapes",
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-4.svg",
    link: "#",
  },
  {
    name: "Stripe",
    description:
      "Automate payment processing and optimize your financial workflow",
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-6.svg",
    link: "#",
  },
  {
    name: "Dropbox",
    description:
      "Centralize file management and streamline document collaboration",
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-8.svg",
    link: "#",
  },
  {
    name: "Shopify",
    description:
      "Optimize e-commerce operations and automate your sales workflow",
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-13.svg",
    link: "#",
  },
  {
    name: "Google Drive",
    description:
      "Synchronize documents and streamline your content management workflow",
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-15.svg",
    link: "#",
  },
  {
    name: "Airtable",
    description:
      "Organize data and automate your information management workflow",
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-17.svg",
    link: "#",
  },
];

interface Download18Props {
  className?: string;
}

const Download18 = ({ className }: Download18Props) => {
  const [search, setSearch] = useState("");
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <h1 className="text-center text-4xl font-medium md:text-6xl">
          Choose your solution
        </h1>
        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <div className="flex flex-col gap-8 rounded-lg border p-8 sm:p-10 lg:col-span-3">
            <div>
              <div className="flex flex-col gap-3">
                <h2 className="text-3xl">Workflow Pro</h2>
                <p className="text-muted-foreground">
                  Professional tool designed to enhance your workflow. Powerful,
                  intelligent assistance that adapts to your needs and
                  preferences.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button size="lg">Download for Windows (64-bit)</Button>
                  <Button variant="outline" size="lg">
                    Download Preview (64-bit)
                  </Button>
                </div>
                <a href="#" className="text-sm text-muted-foreground underline">
                  More download options
                </a>
              </div>
            </div>
            <Separator />
            <div>
              <p className="text-sm text-muted-foreground">FEATURE OVERVIEW</p>
              <ul className="mt-2 flex flex-col gap-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="size-3.5 shrink-0 text-primary" />
                  Intelligent assistant that handles complex tasks automatically
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-3.5 shrink-0 text-primary" />
                  Smart recommendations based on your workflow
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-3.5 shrink-0 text-primary" />
                  Access live data from your connected applications
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-3.5 shrink-0 text-primary" />
                  Voice commands and conversational interface
                </li>
              </ul>
            </div>
            <a
              href="#"
              className="flex items-center gap-1 text-sm text-muted-foreground underline"
            >
              Learn more about Workflow Pro
              <ArrowRight className="size-3.5" />
            </a>
          </div>
          <div className="rounded-lg border pt-8 sm:pt-10 lg:col-span-2">
            <div className="flex flex-col gap-3 px-8 sm:px-10">
              <h2 className="text-3xl">Product Integrations</h2>
              <p className="text-muted-foreground">
                Install extensions to integrate with your favorite applications.
              </p>
            </div>
            <div className="px-8 sm:px-10">
              <InputGroup className="mt-4">
                <InputGroupInput
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <InputGroupAddon>
                  <Search />
                </InputGroupAddon>
              </InputGroup>
            </div>
            <ScrollArea className="mt-4 h-full max-h-[330px] px-4 sm:px-6">
              {integrations
                .filter((integration) =>
                  integration.name.toLowerCase().includes(search.toLowerCase()),
                )
                .map((integration, index) => (
                  <a
                    key={index}
                    className="group flex items-center justify-between gap-4 rounded-lg p-4 hover:bg-muted"
                    href={integration.link}
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={integration.icon}
                        alt={integration.name}
                        className="w-8"
                      />
                      <div>
                        <p className="text-lg font-medium">
                          {integration.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {integration.description}
                        </p>
                      </div>
                    </div>
                    <ExternalLink className="size-5 shrink-0 text-muted-foreground group-hover:text-primary" />
                  </a>
                ))}
            </ScrollArea>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Download18 };
