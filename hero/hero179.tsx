import { Fragment } from "react";

import { cn } from "@/lib/utils";

interface Image {
  src: string;
  alt: string;
  srcDark?: string;
}

interface HeroLayeredProps {
  eyebrow?: string;
  heading: string;
  description: string;
  images: Image[];
  className?: string;
}

interface Hero179Props extends HeroLayeredProps {}
type Props = Partial<Hero179Props>;

const defaultProps: Hero179Props = {
  eyebrow: "Built with shadcn/ui",
  heading: "Blocks Built With Shadcn & Tailwind",
  description: "Finely crafted components built with React, Tailwind and shadcn/ui. Developers can copy and paste these blocks directly into their project.",
  images: [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/images/2-16x9.jpg",
      alt: "Hero image placeholder",
    },
  ],
  buttons: undefined,
  pill: undefined,
};

const Hero179 = (props: Props) => {
  const { eyebrow, heading, description, images, className } = {
    ...defaultProps,
    ...props,
  };

  const image = images[0];

  return (
    <section
      className={cn(
        "relative border-b border-muted bg-background py-32",
        className,
      )}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-2 md:gap-4 lg:grid-cols-2">
          <div className="flex w-full max-w-lg flex-col gap-9 lg:max-w-xl lg:py-28 xl:py-36">
            {eyebrow && (
              <p className="font-mono text-sm text-muted-foreground">
                {eyebrow}
              </p>
            )}
            <h1 className="text-6xl leading-none font-medium tracking-tight text-pretty text-foreground md:text-8xl lg:text-9xl">
              {heading.split("\n").map((line, index) => (
                <Fragment key={index}>
                  {index > 0 ? <br /> : null}
                  {line}
                </Fragment>
              ))}
            </h1>
            <p className="text-lg leading-normal text-balance text-muted-foreground md:text-xl">
              {description}
            </p>
          </div>
          <div>
            <div className="relative ml-8 aspect-square w-full overflow-hidden lg:absolute lg:right-0 lg:bottom-0 lg:w-1/2">
              <div className="absolute inset-0 rounded-tl-lg bg-muted" />
              <div className="absolute right-0 bottom-0 w-11/12 overflow-hidden rounded-tl-lg shadow-md">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="aspect-4/3 w-full rounded-md border border-border object-cover object-top-left"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero179 };
