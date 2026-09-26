import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Stat {
  value: string;
  label: string;
}

interface Framework {
  id: string;
  name: string;
  description: string;
  status: string;
  image: string;
  url: string;
}

interface Compliance9Props {
  tagline?: string;
  heading?: string;
  description?: string;
  stats?: Stat[];
  frameworks?: Framework[];
  primaryButtonText?: string;
  primaryButtonUrl?: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
  className?: string;
}

type Props = Partial<Compliance9Props>;

const defaultProps: Compliance9Props = {
  tagline: "Trust Center",
  heading: "Compliance you can verify",
  description:
    "Our security program is built around independent audits, transparent controls, and continuous monitoring so your team can adopt the platform with confidence.",
  stats: [
    { value: "256-bit", label: "AES encryption at rest" },
    { value: "100%", label: "Audit-ready controls" },
    { value: "24/7", label: "Security monitoring" },
  ],
  frameworks: [
    {
      id: "soc2",
      name: "SOC 2 Type II",
      description:
        "Annual third-party attestation covering security, availability, and confidentiality controls across production systems.",
      status: "Certified",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/AICPA-SOC.svg",
      url: "https://shadcnblocks.com",
    },
    {
      id: "iso27001",
      name: "ISO 27001",
      description:
        "Information security management aligned with international standards for risk assessment and operational safeguards.",
      status: "Certified",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/ISO-27001.svg",
      url: "https://shadcnblocks.com",
    },
    {
      id: "gdpr",
      name: "GDPR",
      description:
        "Privacy-by-design workflows, data subject request tooling, and regional data residency options for EU customers.",
      status: "Compliant",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/GDPR.svg",
      url: "https://shadcnblocks.com",
    },
    {
      id: "ccpa",
      name: "CCPA",
      description:
        "Consumer rights tooling and disclosure practices that support California privacy obligations for enterprise accounts.",
      status: "Compliant",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/CCPA.svg",
      url: "https://shadcnblocks.com",
    },
  ],
  primaryButtonText: "Visit trust center",
  primaryButtonUrl: "https://shadcnblocks.com",
  secondaryButtonText: "Download security overview",
  secondaryButtonUrl: "https://shadcnblocks.com",
};

const Compliance9 = (props: Props) => {
  const {
    tagline,
    heading,
    description,
    stats,
    frameworks,
    primaryButtonText,
    primaryButtonUrl,
    secondaryButtonText,
    secondaryButtonUrl,
    className,
  } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-5xl flex-col gap-16">
          <div className="grid gap-4 sm:grid-cols-3">
            {stats?.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-muted/30 px-6 py-8 text-center"
              >
                <p className="text-3xl font-semibold tracking-tight md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
              <Badge variant="outline">{tagline}</Badge>
              <h2 className="text-4xl font-semibold tracking-tight text-balance md:text-5xl">
                {heading}
              </h2>
              <p className="text-pretty text-muted-foreground md:text-lg">
                {description}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <a href={primaryButtonUrl} target="_blank">
                    {primaryButtonText}
                    <ArrowRight className="ml-2 size-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={secondaryButtonUrl} target="_blank">
                    {secondaryButtonText}
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {frameworks?.map((framework) => (
                <a
                  key={framework.id}
                  href={framework.url}
                  target="_blank"
                  className="group flex gap-5 rounded-xl border border-border bg-background p-5 transition-colors hover:bg-muted/30 sm:p-6"
                >
                  <img
                    src={framework.image}
                    alt={framework.name}
                    className="size-16 shrink-0 object-contain sm:size-20 dark:invert"
                  />
                  <div className="flex min-w-0 flex-col gap-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-semibold">{framework.name}</h3>
                      <Badge variant="secondary">{framework.status}</Badge>
                    </div>
                    <p className="text-sm text-pretty text-muted-foreground">
                      {framework.description}
                    </p>
                    <span className="inline-flex items-center text-sm font-medium group-hover:underline">
                      View details
                      <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Compliance9 };
