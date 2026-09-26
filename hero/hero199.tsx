import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

interface Image {
  src: string;
  alt: string;
  srcDark?: string;
}
interface Button {
  text: string;
  url: string;
  icon?: React.ReactNode;
}
interface Buttons {
  primary?: Button;
  secondary?: Button;
}

interface HeroFullscreenProps {
  className?: string;
  backgroundImage: Image;
  heading: string;
  description: string;
  buttons?: Buttons;
}

interface Hero199Props extends HeroFullscreenProps {
  headingEmphasisParts?: Hero199HeadingEmphasis;
}
type Props = Partial<Hero199Props>;

const defaultProps: Hero199Props = {
  backgroundImage: {
  src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/fullscreen/andrew-kliatskyi-2Ub95fXBDNc-unsplash.jpg",
  alt: "Full-bleed background",
},
  heading: "Build experiences that feel inevitable",
  description: "From first impression to lasting habit — craft every surface with intention.",
  buttons: {
    primary: { text: "Explore work", url: "#" },
  },
  headingEmphasisParts: {
    before: "Build experiences that feel ",
    emphasis: "inevitable",
    after: "",
  },
};

interface Hero199HeadingEmphasis {
  before: string;
  emphasis: string;
  after: string;
}

const Hero199 = (props: Props) => {
  const {
    backgroundImage,
    heading,
    headingEmphasisParts,
    description,
    buttons,
    className,
  } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section
      style={{
        backgroundImage: `url('${backgroundImage.src}')`,
      }}
      className={cn(
        "dark relative h-svh min-h-[37.5rem] w-full bg-cover bg-center bg-no-repeat",
        className,
      )}
    >
      <div aria-hidden className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex size-full items-start justify-end px-12 py-8 md:px-24 md:py-16">
        <div className="m-0 flex w-full max-w-2xl flex-col items-end gap-8 md:max-w-3xl">
          <h1 className="font-playfair text-right text-5xl leading-none font-normal text-foreground md:text-7xl md:leading-tight">
            {headingEmphasisParts ? (
              <>
                {headingEmphasisParts.before}
                <span className="italic">{headingEmphasisParts.emphasis}</span>
                {headingEmphasisParts.after}
              </>
            ) : (
              heading
            )}
          </h1>
          <p className="w-full max-w-[80%] text-right text-2xl font-medium text-muted-foreground md:max-w-2xl">
            {description}
          </p>
          <div className="flex w-full flex-wrap items-end justify-end gap-4">
            {buttons?.primary && (
              <Button
                asChild
                className="h-fit rounded-full py-3.5 ps-7! pe-7! text-base"
              >
                <a href={buttons.primary.url}>{buttons.primary.text}</a>
              </Button>
            )}
            {buttons?.secondary && (
              <Button
                asChild
                variant="secondary"
                className="h-fit rounded-full py-3.5 ps-7! pe-7! text-base"
              >
                <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero199 };
