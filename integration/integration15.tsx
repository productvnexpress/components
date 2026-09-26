import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const integrations = [
  {
    title: "Slack",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-3.svg",
    link: "#",
  },
  {
    title: "Stripe",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-6.svg",
    link: "#",
  },

  {
    title: "Drive",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-15.svg",
    link: "#",
  },
  {
    title: "Airtable",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-17.svg",
    link: "#",
  },
  {
    title: "Dropbox",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-8.svg",
    link: "#",
  },
  {
    title: "Shopify",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-13.svg",
    link: "#",
  },
  {
    title: "Discord",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-18.svg",
    link: "#",
  },
  {
    title: "Spotify",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-4.svg",
    link: "#",
  },
  {
    title: "Telegram",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/integration/integration-28.svg",
    link: "#",
  },
];

const Integration15 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
          <div className="flex max-w-xl flex-col items-start">
            <Badge variant="outline" className="mb-2">
              Integrations
            </Badge>
            <h2 className="mb-3 text-4xl font-bold">
              Effortlessly connect with powerful integrations
            </h2>
            <p className="mb-5 text-muted-foreground">
              Seamlessly link your favorite tools and services to enhance
              productivity and collaboration across your workflow.
            </p>
            <Button>Get Started</Button>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-3">
            {integrations.map((item, index) => (
              <a
                href={item.link}
                key={index}
                className="group flex items-center gap-2 rounded-md p-2 hover:bg-muted"
              >
                <img src={item.image} alt={item.title} className="size-10" />
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="flex max-h-0 items-center gap-1 overflow-hidden text-xs text-muted-foreground transition-all duration-150 group-hover:max-h-4">
                    View <span className="hidden sm:inline">Documentation</span>{" "}
                    <ArrowUpRight className="size-3" />
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Integration15 };
