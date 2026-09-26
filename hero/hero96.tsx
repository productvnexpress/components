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
  description: string;
  buttons?: Buttons;
  byline?: string;
  image?: Image;
}

interface Hero96Props extends HeroIsometricProps {}
type Props = Partial<Hero96Props>;

const defaultProps: Hero96Props = {
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
  byline: "No credit card required, seriously.",
};

function PreviewImage({
  image,
  className,
}: {
  image: Image;
  className?: string;
}) {
  const imgClass = "w-full object-cover";
  const imgs = image.srcDark ? (
    <>
      <img
        src={image.src}
        alt={image.alt}
        className={cn(imgClass, "dark:hidden")}
      />
      <img
        src={image.srcDark}
        alt={image.alt}
        className={cn(imgClass, "hidden dark:block")}
      />
    </>
  ) : (
    <img src={image.src} alt={image.alt} className={imgClass} />
  );

  return (
    <div
      className={cn(
        "rounded-xl shadow-[-12px_-14px_28px_rgba(0,0,0,0.09)] dark:shadow-[-12px_-14px_28px_rgba(0,0,0,0.28)]",
        className,
      )}
    >
      <div className="overflow-hidden rounded-xl border border-muted">
        {imgs}
      </div>
    </div>
  );
}

const Hero96 = (props: Props) => {
  const { heading, description, buttons, byline, image, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section
      className={cn(
        "overflow-hidden border-b bg-background pt-32 pb-8 md:pb-12 lg:pb-0",
        className,
      )}
    >
      <div className="relative container min-h-[42rem] pb-0 md:min-h-[46rem] lg:min-h-[40rem]">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col gap-7 pb-14 lg:max-w-[36rem] lg:pb-10">
            <h1 className="text-4xl leading-14 font-semibold tracking-tighter text-foreground md:text-5xl lg:text-4xl xl:text-6xl">
              {heading}
            </h1>
            <p className="text-lg text-muted-foreground">{description}</p>
            <div className="flex flex-wrap items-center gap-3">
              {buttons?.primary && (
                <Button
                  asChild
                  className="block h-fit rounded-md px-5 py-3 text-lg font-semibold"
                >
                  <a href={buttons.primary.url}>{buttons.primary.text}</a>
                </Button>
              )}
              {buttons?.secondary && (
                <Button
                  asChild
                  variant="secondary"
                  className="block h-fit rounded-md px-5 py-3 text-lg font-semibold"
                >
                  <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
                </Button>
              )}
            </div>
            {byline && (
              <p className="text-lg text-muted-foreground">{byline}</p>
            )}
          </div>
        </div>
        {image && (
          <PreviewImage
            image={image}
            className="relative z-0 mt-12 -mb-10 w-[calc(100%+(100vw-100%)/2)] max-w-none min-w-[50vw] rotate-1 skew-x-[-6deg] skew-y-[0.5deg] sm:-mb-14 md:-mb-20 lg:absolute lg:top-0 lg:left-1/2 lg:mt-0 lg:mb-0 lg:w-[max(93.75rem,50vw)] lg:min-w-0 lg:skew-x-[-8deg]"
          />
        )}
      </div>
    </section>
  );
};

export { Hero96 };
