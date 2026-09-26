import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Data Protection",
    description:
      "Enterprise-grade encryption for all data, both in transit and at rest, using industry-standard AES-256 protocols.",
  },
  {
    title: "Access Management",
    description:
      "Granular role-based access controls (RBAC) and mandatory multi-factor authentication (MFA).",
  },
  {
    title: "Real-time Monitoring",
    description:
      "Continuous security monitoring and automated incident response workflows to mitigate threats instantly.",
  },
  {
    title: "Global Compliance",
    description:
      "Fully compliant with GDPR, CCPA, and HIPAA, ensuring your operations meet regional privacy standards.",
  },
];

const certifications = [
  {
    name: "ISO 27001",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/ISO-27001.svg",
    description: "Information Security",
  },
  {
    name: "SOC 2 Type II",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/AICPA-SOC.svg",
    description: "Security & Trust",
  },
  {
    name: "GDPR",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/GDPR.svg",
    description: "Data Privacy",
  },
  {
    name: "CCPA",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/CCPA.svg",
    description: "California Privacy",
  },
];

interface Compliance4Props {
  className?: string;
}

const Compliance4 = ({ className }: Compliance4Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <Badge variant="outline" className="mb-6">
              Compliance Framework
            </Badge>
            <h2 className="mb-6 text-4xl font-semibold tracking-tight text-balance md:text-5xl xl:text-6xl">
              Secure by design, compliant by default.
            </h2>
            <p className="mb-10 text-pretty text-muted-foreground md:text-lg">
              We provide the tools and certifications you need to operate
              globally with confidence. Our platform is built to satisfy the
              most demanding security requirements of modern enterprises.
            </p>
            <div className="grid gap-8 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg">View Trust Center</Button>
              <Button size="lg" variant="ghost">
                Download Report <ArrowRight />
              </Button>
            </div>
          </div>
          <div className="relative grid grid-cols-2 gap-4 sm:gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex flex-col justify-between gap-4 rounded-2xl border border-border bg-card p-6 sm:p-8"
              >
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="mx-auto max-h-40 object-contain dark:invert"
                />
                <div>
                  <h4 className="font-semibold">{cert.name}</h4>
                  <p className="text-xs text-muted-foreground">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Compliance4 };
