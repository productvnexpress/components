import { ChevronRight } from "lucide-react";

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

interface HeroIsometricProps {
  className?: string;
  heading: string;
  headingMobile?: string;
  description: string;
  buttons?: Buttons;
  image?: Image;
}

interface Hero142Props extends HeroIsometricProps {}
type Props = Partial<Hero142Props>;

const defaultProps: Hero142Props = {
  heading: "Incredible Applications built with Shadcn & Tailwind",
  description:
    "Finely crafted components built with React, Tailwind and shadcn/ui. Developers can copy and paste these blocks directly into their project.",
  buttons: {
    primary: {
      text: "Get Started",
      url: "https://www.shadcnblocks.com",
    },
    secondary: {
      text: "Learn More",
      url: "https://www.shadcnblocks.com",
    },
  },
  image: {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/dashboard/dashboard-1.png",
    srcDark:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/dashboard/dashboard-dark-1.png",
    alt: "Dashboard preview",
  },
  headingMobile: "Design and develop your product",
};

const Hero142 = (props: Props) => {
  const { heading, headingMobile, description, buttons, image, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-background pt-12 font-sans md:pt-20",
        className,
      )}
    >
      <div className="container max-w-[68rem]">
        <div className="relative z-20 flex flex-col gap-5">
          <h1 className="max-w-2xl text-5xl leading-[1.05] font-semibold text-foreground sm:text-[3.5rem]">
            {headingMobile ? (
              <>
                <span className="hidden md:block">{heading}</span>
                <span className="mx-auto block max-w-[31.25rem] text-center md:hidden">
                  {headingMobile}
                </span>
              </>
            ) : (
              heading
            )}
          </h1>
          <div className="max-w-2xl">
            <p className="text-center text-xl font-medium text-muted-foreground md:text-left">
              {description}
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 py-4 md:flex-row">
            {buttons?.primary && (
              <Button
                asChild
                className="block h-fit w-fit rounded-lg px-4 py-1.5 text-sm leading-loose font-medium"
              >
                <a href={buttons.primary.url}>{buttons.primary.text}</a>
              </Button>
            )}
            {buttons?.secondary && (
              <Button
                asChild
                variant="ghost"
                className="flex h-fit w-fit items-center gap-2 rounded-lg bg-transparent px-4 py-1.5"
              >
                <a href={buttons.secondary.url}>
                  <p className="bg-linear-to-br from-foreground to-muted-foreground bg-clip-text text-sm leading-loose font-medium text-transparent">
                    {buttons.secondary.text}
                  </p>
                  <ChevronRight className="size-4 stroke-foreground" />
                </a>
              </Button>
            )}
          </div>
          {image && (
            <div className="pointer-events-none relative -mt-[8.75rem] w-full">
              <div className="h-[37.5rem] w-full md:h-[56.25rem]">
                <div className="relative size-full [perspective-origin:100%_0] [perspective:4000px] [transform-style:preserve-3d]">
                  <div className="absolute inset-0 mx-auto mt-[11.25rem] h-[63rem] w-[100rem] [transform-origin:top_left] [transform:scale(.7)_rotateX(47deg)_rotateY(21deg)_rotate(330deg)] rounded-xl border border-muted shadow-[-24px_-28px_48px_rgba(0,0,0,0.15)] md:mt-[17.5rem] md:[transform:translateX(2%)_scale(1.2)_rotateX(47deg)_rotateY(31deg)_rotate(324deg)] dark:shadow-[-24px_-28px_48px_rgba(0,0,0,0.45)]">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="block h-full w-full rounded-xl object-cover object-top-left"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-linear-to-r from-transparent from-80% to-background"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-30 bg-linear-to-b from-transparent from-50% to-background"
      />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 h-[81.25rem] w-[35rem] -translate-y-[21.875rem] rotate-[-45deg] rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="absolute top-0 left-0 h-[81.25rem] w-[15rem] origin-top-left translate-x-[5%] translate-y-[-5%] rotate-[-45deg] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        <div className="absolute top-0 left-0 h-[81.25rem] w-[15rem] origin-top-left translate-x-[180%] translate-y-[70%] rotate-[-45deg] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>
    </section>
  );
};

export { Hero142 };
