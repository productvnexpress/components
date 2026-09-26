import { FaApple, FaWindows } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Download19Props {
  className?: string;
}

const Download19 = ({ className }: Download19Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <h1 className="text-center text-4xl md:text-6xl">
          Download for your platform
        </h1>
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border bg-border lg:grid-cols-3">
          <div className="flex flex-col justify-between gap-10 bg-background p-6 lg:p-10">
            <div>
              <FaApple className="h-auto w-9" />
              <h2 className="mt-4 text-3xl">Mac</h2>
              <div className="mt-8 flex flex-col gap-2">
                <Button size="lg">Download for macOS</Button>
                <Button variant="outline" size="lg">
                  Download for Intel Mac
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs font-medium text-muted-foreground">
                Minimum Requirements:
              </p>
              <p className="text-xs text-muted-foreground">
                macOS 10.15 or later with security updates.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-10 bg-background p-6 lg:p-10">
            <div>
              <FaWindows className="h-auto w-9" />
              <h2 className="mt-4 text-3xl">Windows</h2>
              <div className="mt-8 flex flex-col gap-2">
                <Button size="lg">Download for Windows</Button>
                <Button variant="outline" size="lg">
                  Download for Windows ARM
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs font-medium text-muted-foreground">
                Minimum Requirements:
              </p>
              <p className="text-xs text-muted-foreground">
                Windows 10 version 1903 or later.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-10 bg-background p-6 lg:p-10">
            <div>
              <FaApple className="h-auto w-9" />
              <h2 className="mt-4 text-3xl">Linux</h2>
              <div className="mt-8 flex flex-col gap-2">
                <Button size="lg">Download for Linux</Button>
                <Button variant="outline" size="lg">
                  Download for Linux ARM
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs font-medium text-muted-foreground">
                Minimum Requirements:
              </p>
              <p className="text-xs text-muted-foreground">
                Ubuntu 18.04+ or equivalent Linux distribution.
              </p>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Looking for previous versions?
          <a href="#" className="ml-2 whitespace-nowrap text-primary underline">
            Browse all releases
          </a>
        </p>
        <div className="mt-14 flex flex-col gap-2">
          <h2 className="text-2xl font-medium md:text-3xl">
            Want to try the latest features?
          </h2>
          <p className="text text-muted-foreground">
            Download{" "}
            <a href="#" className="text-primary underline">
              Beta Version
            </a>{" "}
            for early access to new features.
          </p>
        </div>
      </div>
    </section>
  );
};

export { Download19 };
