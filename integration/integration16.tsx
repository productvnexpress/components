"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = [
  "Sales & Marketing Tools",
  "Communication",
  "Productivity",
  "Artificial Intelligence",
];

interface integration {
  name: string;
  description: string;
  icon: string;
  link: string;
  category: (typeof categories)[number];
}

const integrations: integration[] = [
  {
    name: "Slack",
    description:
      "Team messaging and collaboration platform for seamless communication.",
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-3.svg",
    link: "#",
    category: "Communication",
  },
  {
    name: "Gmail",
    description:
      "Email service integration for managing communications efficiently.",
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-22.svg",
    link: "#",
    category: "Sales & Marketing Tools",
  },
  {
    name: "Stripe",
    description: "Payment processing platform for secure online transactions.",
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-6.svg",
    link: "#",
    category: "Sales & Marketing Tools",
  },
  {
    name: "Dropbox",
    description: "Cloud storage solution for file sharing and collaboration.",
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-8.svg",
    link: "#",
    category: "Productivity",
  },
  {
    name: "Shopify",
    description: "E-commerce platform for building and managing online stores.",
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-13.svg",
    link: "#",
    category: "Sales & Marketing Tools",
  },
  {
    name: "Google Drive",
    description: "Cloud-based file storage and synchronization service.",
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-15.svg",
    link: "#",
    category: "Productivity",
  },
  {
    name: "Airtable",
    description: "Flexible database and spreadsheet tool for organizing data.",
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-17.svg",
    link: "#",
    category: "Productivity",
  },
  {
    name: "Trello",
    description: "Project management tool with boards, lists, and cards.",
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-23.svg",
    link: "#",
    category: "Productivity",
  },
  {
    name: "ChatGPT",
    description: "AI-powered assistant for conversations and task automation.",
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-10.svg",
    link: "#",
    category: "Artificial Intelligence",
  },
  {
    name: "Zoom",
    description:
      "Video conferencing platform for remote meetings and webinars.",
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-24.svg",
    link: "#",
    category: "Communication",
  },
  {
    name: "Microsoft Teams",
    description: "Collaboration hub for chat, meetings, and file sharing.",
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-25.svg",
    link: "#",
    category: "Communication",
  },
  {
    name: "Claude",
    description:
      "Advanced AI assistant for intelligent conversations and analysis.",
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-26.svg",
    link: "#",
    category: "Artificial Intelligence",
  },
  {
    name: "Gemini",
    description: "AI-powered assistant for creative tasks and problem-solving.",
    icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-27.svg",
    link: "#",
    category: "Artificial Intelligence",
  },
];

const Integration16 = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <h2 className="text-5xl font-medium text-balance md:text-6xl">
            Connect your favorite tools and boost productivity
          </h2>
          <p className="mt-4 text-lg text-balance text-muted-foreground md:text-xl">
            Discover powerful integrations that seamlessly connect with your
            platform, streamlining workflows and enhancing team collaboration
          </p>
          <div className="mt-12 flex gap-4">
            <Button>Get started</Button>
            <Button variant="outline">View all</Button>
          </div>
        </div>
        <Tabs
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          className="mx-auto mt-16 max-w-4xl"
        >
          <div className="mb-7 block md:hidden">
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Integrations</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <TabsList className="mb-7 grid hidden !h-fit grid-cols-5 gap-px rounded-none bg-border p-0 p-px md:grid">
            <TabsTrigger
              value="all"
              className="h-full rounded-none !border-none bg-background px-2 py-3 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-background"
            >
              All Integrations
            </TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="h-full rounded-none !border-none bg-background px-2 py-3 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-background hover:data-[state=active]:text-background"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent
            value="all"
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            {integrations.map((integration) => (
              <IntegrationCard
                key={integration.name}
                integration={integration}
              />
            ))}
          </TabsContent>
          {categories.map((category) => (
            <TabsContent
              key={category}
              value={category}
              className="grid grid-cols-1 gap-6 md:grid-cols-2"
            >
              {integrations
                .filter((integration) => integration.category === category)
                .map((integration) => (
                  <IntegrationCard
                    key={integration.name}
                    integration={integration}
                  />
                ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export { Integration16 };

const IntegrationCard = ({ integration }: { integration: integration }) => {
  return (
    <a href={integration.link} className="group flex items-center gap-5">
      <span className="grid size-16 shrink-0 place-items-center border">
        <img src={integration.icon} alt={integration.name} className="size-7" />
      </span>
      <div>
        <h3 className="text-lg font-medium group-hover:underline">
          {integration.name}
        </h3>
        <p className="text-sm text-muted-foreground">
          {integration.description}
        </p>
      </div>
    </a>
  );
};
