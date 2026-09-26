import { Download, Smartphone } from "lucide-react";

import { Iphone } from "@/components/magicui/iphone";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Download20Props {
  className?: string;
}

const Download20 = ({ className }: Download20Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5 text-center lg:max-w-xl lg:gap-6 lg:text-left">
            <Badge
              variant="outline"
              className="mx-auto w-fit gap-1.5 px-3 py-1 text-xs font-medium lg:mx-0"
            >
              <Smartphone className="size-3.5" />
              Mobile app
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-balance text-foreground md:text-5xl">
              Close more deals from anywhere
            </h1>
            <p className="text-pretty text-muted-foreground md:text-lg">
              Your pipeline, contacts, and quotes in one place. Update deals on
              the road, get alerts when leads respond, and never miss a
              follow-up.
            </p>
            <div className="flex flex-col items-center gap-6 lg:items-start">
              <Button
                size="lg"
                className="gap-2 shadow-lg shadow-primary/20"
                asChild
              >
                <a href="#">
                  <Download className="size-4" />
                  Download the app
                </a>
              </Button>
              <div className="hidden w-fit flex-col gap-2 rounded-lg border border-border bg-card/50 p-3 shadow-sm md:flex">
                <span className="text-center text-xs font-medium text-muted-foreground">
                  Scan to download
                </span>
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/qr-code.png"
                  alt="Scan to download"
                  className="size-24 rounded sm:size-28"
                />
              </div>
            </div>
          </div>
          <div className="dark relative mx-auto w-full max-w-80 drop-shadow-2xl">
            <Iphone
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/dashboard/dashboard-mobile-light-1.png"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Download20 };
