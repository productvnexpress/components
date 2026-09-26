import { ArrowDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Hero88Props {
  className?: string;
}

const Hero88 = ({ className }: Hero88Props) => {
  return (
    <section
      className={cn("font-dm_sans bg-background py-12 md:py-32", className)}
    >
      <div className="container">
        <div className="flex w-full flex-col gap-6">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            <span className="bg-linear-to-t from-primary to-primary/70 bg-clip-text text-transparent">
              Hi, we&apos;re Shadcnblocks
            </span>
            <br />
            <span className="text-foreground">
              Transforming ideas into stunning digital experiences.
            </span>
          </h1>

          <p className="text-xl text-muted-foreground sm:text-3xl">
            With over{" "}
            <strong className="font-semibold text-foreground">
              20 years of expertise
            </strong>
            , we specialize in crafting high-quality digital products that
            captivate your audience and drive business growth.
          </p>

          <div className="flex flex-col items-center gap-4 py-4 sm:flex-row sm:flex-wrap">
            <Button className="w-full rounded-full px-8 py-6 text-lg font-bold sm:w-fit sm:px-12 sm:py-8">
              Let&apos;s Collaborate
            </Button>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-lg text-muted-foreground transition-colors hover:text-foreground sm:text-xl"
            >
              <span>or explore our work</span>
              <ArrowDown className="size-4 shrink-0 sm:size-6" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero88 };
