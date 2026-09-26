import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

const compliances = [
  {
    title: "Risk assessment tools",
    description:
      "Comprehensive risk analysis and vulnerability scanning to identify compliance gaps and security threats.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/ISO-27001.svg",
  },

  {
    title: "Policy management",
    description:
      "Centralized policy framework with automated updates to maintain alignment with evolving regulations.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/ISO-27017.svg",
  },

  {
    title: "Incident response",
    description:
      "Streamlined incident handling with automated workflows to address compliance violations quickly.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/ISO-27018.svg",
  },
  {
    title: "Access governance",
    description:
      "Granular permission controls and user access reviews to ensure authorization and prevent unauthorized entry.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/GDPR.svg",
  },
  {
    title: "Data retention",
    description:
      "Automated data lifecycle management with retention policies to comply with legal and regulatory obligations.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/CCPA.svg",
  },
];

interface Compliance2Props {
  className?: string;
}

const Compliance2 = ({ className }: Compliance2Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col gap-5 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Enterprise Compliance & Risk Management
          </h1>
          <p className="text-pretty text-muted-foreground sm:text-lg">
            Achieve comprehensive compliance across financial and healthcare
            sectors. Our solution supports SOC 2 and PCI DSS standards,
            delivering enterprise-grade security and regulatory adherence for
            mission-critical operations.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-px border bg-border bg-clip-padding md:grid-cols-2 lg:grid-cols-3">
          {compliances.map((compliance, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 bg-background px-7 py-6"
            >
              <img
                src={compliance.image}
                alt={compliance.title}
                className="size-24 object-contain dark:invert"
              />
              <div className="flex flex-col gap-1.5">
                <h2 className="font-medium">{compliance.title}</h2>
                <p className="text-sm text-muted-foreground md:text-base">
                  {compliance.description}
                </p>
              </div>
            </div>
          ))}
          <a
            href="#"
            className="group flex flex-col justify-center bg-background px-7 py-6 text-left"
          >
            <div className="flex items-center gap-2 text-sm font-medium group-hover:underline md:text-base">
              <span>Talk to a compliance expert</span>
              <ArrowUpRight className="size-4" />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Get a tailored readiness checklist for GDPR, HIPAA, SOC 2, and
              additional standards.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export { Compliance2 };
