import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Compliance8Props {
  className?: string;
}

const Compliance8 = ({ className }: Compliance8Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs text-muted-foreground uppercase">
            trusted certifications
          </p>
          <h1 className="my-3 text-4xl font-bold">
            Industry-leading compliance standards
          </h1>
          <p className="text-muted-foreground">
            Maintain confidence in your data security with our comprehensive
            compliance portfolio. We continuously undergo rigorous third-party
            audits and assessments to validate our adherence to international
            security, privacy, and regulatory frameworks.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 place-items-center gap-4 md:grid-cols-4">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/ISO-27001.svg"
            alt="ISO 27001"
            className="max-h-24 dark:invert"
          />
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/GDPR.svg"
            alt="GDPR"
            className="max-h-24 dark:invert"
          />
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/CCPA.svg"
            alt="CCPA"
            className="max-h-24 dark:invert"
          />
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/AICPA-SOC.svg"
            alt="AICPA SOC"
            className="max-h-24 dark:invert"
          />
        </div>
        <Button variant="link" className="mx-auto mt-10 flex" asChild>
          <a href="#">
            View compliance documentation
            <ArrowUpRight />
          </a>
        </Button>
      </div>
    </section>
  );
};

export { Compliance8 };
