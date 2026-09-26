import { ArrowRight } from "lucide-react";

import { PointerHighlight } from "@/components/aceternity/pointer-highlight";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";

interface Image {
  src: string;
  alt: string;
  srcDark?: string;
}

interface FeatureSingleFocusProps {
  heading: string;
  description: string;
  image: Image;
  headingAccent?: string;
  className?: string;
}

type Props = Partial<FeatureSingleFocusProps>;

const defaultProps: FeatureSingleFocusProps = {
  heading: "Elevate Your Next Project With,",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sed voluptate sequi molestias nam exercitationem.",
  image: {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-details/saas-detail-1-1x1.png",
    alt: "Shadcnblocks section preview in the explorer",
  },
  headingAccent: "Shadcnblocks",
};

const Feature292 = (props: Props) => {
  const { heading, headingAccent, description, image, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("relative grid overflow-hidden py-32", className)}>
      <div className="relative z-10 container h-full grid-cols-1 items-center justify-center gap-6 lg:grid lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
          <div className="mb-12 flex items-center justify-center gap-3 rounded-full bg-muted-foreground/5 p-1 pr-4 text-sm font-medium tracking-tight text-muted-foreground">
            <div className="flex items-center gap-3 rounded-full bg-muted-foreground/10 px-4 py-1.5">
              <span className="inline-block size-2 rounded-full bg-blue-500" />
              <span>We're Hiring</span>
            </div>
            <div className="flex items-center gap-2">
              Join Our Team <ArrowRight className="size-4" />
            </div>
          </div>
          <h2 className="text-5xl font-semibold tracking-tighter lg:text-6xl">
            {heading}{" "}
            <PointerHighlight containerClassName="inline-block">
              <span>Production-Ready</span>
            </PointerHighlight>{" "}
            {headingAccent}
          </h2>
          <p className="mt-10 max-w-lg text-muted-foreground">{description}</p>

          <div className="mt-10 flex w-full max-w-lg gap-2">
            <Input
              className="h-13 w-full rounded-full"
              placeholder="Enter your email"
            />
            <Button className="h-13 rounded-full">
              Get Started <ArrowRight className="-rotate-45" />
            </Button>
          </div>
        </div>
        <div className="relative mt-10 flex h-[80vh] w-full items-center justify-center overflow-hidden rounded-4xl border lg:mt-0 lg:h-[70vh]">
          <img
            src={image.src}
            alt={image.alt}
            className="size-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export { Feature292 };
