import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "End-to-end encryption",
    description:
      "All data is encrypted in transit and at rest using industry-standard protocols.",
  },
  {
    title: "Regular security audits",
    description:
      "Continuous third-party assessments ensure ongoing compliance and security.",
  },
  {
    title: "Automated compliance reporting",
    description:
      "Generate comprehensive reports for audits and regulatory requirements.",
  },
];

const certifications = [
  {
    name: "ISO 27001",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/ISO-27001.svg",
  },
  {
    name: "GDPR",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/GDPR.svg",
  },
  {
    name: "CCPA",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/CCPA.svg",
  },
  {
    name: "SOC 2",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/AICPA-SOC.svg",
  },
];

interface Compliance3Props {
  className?: string;
}

const Compliance3 = ({ className }: Compliance3Props) => {
  return (
    <section className={cn("bg-muted/50 py-32", className)}>
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <Badge variant="outline" className="mb-4">
              Security & Compliance
            </Badge>
            <h1 className="mb-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Trusted by enterprises worldwide
            </h1>
            <p className="mx-auto max-w-2xl text-pretty text-muted-foreground md:text-lg">
              Our platform meets the highest standards for security, privacy,
              and regulatory compliance. Rest assured your data is protected.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-border bg-background p-6 md:p-8">
              <h2 className="mb-6 text-xl font-semibold">Security Features</h2>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <Check className="mt-1 size-5 shrink-0" />
                    <div className="flex flex-col gap-1">
                      <h3 className="font-medium">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-background p-6 md:p-8">
              <h2 className="mb-6 text-xl font-semibold">
                Certifications & Standards
              </h2>
              <div className="grid grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-3 rounded-lg border border-border bg-muted/50 p-4"
                  >
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="h-16 w-auto dark:invert"
                    />
                    <p className="text-sm font-medium">{cert.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Compliance3 };
