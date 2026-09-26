"use client";

import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/kibo-ui/marquee";
import { BorderBeam } from "@/components/magicui/border-beam";
import { AspectRatio } from "@/components/ui/aspect-ratio";
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
interface Logo {
  src: string;
  alt: string;
  srcDark?: string;
  className?: string;
}

interface HeroSaasProps {
  className?: string;
  heading: string;
  description: string;
  buttons?: Buttons;
  logos?: Logo[];
  logosLabel?: string;
  images?: Image[];
}

interface Hero105Props extends HeroSaasProps {
  backgroundImage: Image;
}
type Props = Partial<Hero105Props>;

const defaultProps: Hero105Props = {
  heading: "Use tools to speed up your revenue growth",
  description: "Join millions of businesses of all sizes using the service to accept online and in-person payments, integrate financial services, power unique revenue models, and build a more profitable future.",
  buttons: {
  primary: {
  text: "Start now",
  url: "https://www.shadcnblocks.com",
},
  secondary: {
  text: "Learn more",
  url: "https://www.shadcnblocks.com",
},
},
  logos: [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-1.svg",
      alt: "Company logo 1",
      className: "h-7 w-auto",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-2.svg",
      alt: "Company logo 2",
      className: "h-7 w-auto",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-3.svg",
      alt: "Company logo 3",
      className: "h-7 w-auto",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-4.svg",
      alt: "Company logo 4",
      className: "h-7 w-auto",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-5.svg",
      alt: "Company logo 5",
      className: "h-5 w-auto",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-6.svg",
      alt: "Company logo 6",
      className: "h-7 w-auto",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-7.svg",
      alt: "Company logo 7",
      className: "h-7 w-auto",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-8.svg",
      alt: "Company logo 8",
      className: "h-7 w-auto",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-9.svg",
      alt: "Company logo 9",
      className: "h-7 w-auto",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-10.svg",
      alt: "Company logo 10",
      className: "h-7 w-auto",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-11.svg",
      alt: "Company logo 11",
      className: "h-7 w-auto",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-12.svg",
      alt: "Company logo 12",
      className: "h-7 w-auto",
    },
  ],
  images: [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-hero/saas-hero-6-1x1.png",
      srcDark: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-hero/saas-hero-6-1x1-dark.png",
      alt: "Product interface preview",
    },
  ],
  backgroundImage: {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/hero105/background.png",
    alt: "",
  },
};

const MAX_LOGOS = 8;

const Hero105 = (props: Props) => {
  const {
    heading,
    description,
    buttons,
    logos,
    logosLabel,
    images,
    backgroundImage,
    className,
  } = {
    ...defaultProps,
    ...props,
  };

  const logoRow = (logos ?? []).slice(0, MAX_LOGOS);
  const marqueeLogos = [...logoRow, ...logoRow];
  const heroImage = images?.[0];

  return (
    <section className={cn(className)}>
      <div className="relative isolate min-h-[37.5rem] overflow-hidden pb-14 md:pb-4 lg:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div
            className="absolute top-0 left-0 w-full bg-cover bg-no-repeat max-md:h-[40%] max-md:origin-top-left max-md:-skew-y-6 max-md:bg-top md:-top-[16%] md:h-[122%] md:-translate-y-[58%] md:-skew-y-12 md:bg-center lg:-top-[10%] lg:h-[115%]"
            style={{ backgroundImage: `url('${backgroundImage.src}')` }}
          />
        </div>
        <div className="relative container mx-auto">
          <div className="grid w-full min-w-0 grid-cols-1 items-stretch gap-10 pt-20 pb-14 md:grid-cols-2 md:gap-14 md:pb-6 lg:pt-28 lg:pb-20">
            <div className="flex h-full min-h-0 w-full flex-col items-start pt-8 md:pt-12 lg:pt-16">
              <h1 className="relative max-w-xl font-sans text-5xl leading-none font-bold tracking-tighter text-pretty sm:text-6xl md:text-5xl lg:text-7xl xl:text-8xl">
                <div className="relative z-20 text-black mix-blend-multiply dark:text-white dark:mix-blend-overlay">
                  {heading}
                </div>
                <div className="absolute top-0 left-0 z-10 text-black opacity-20 dark:text-white">
                  {heading}
                </div>
              </h1>
              <div className="relative z-10 flex w-full flex-col gap-6 pt-6 md:mt-auto md:pt-10">
                <p className="max-w-2xl text-lg leading-normal text-pretty text-muted-foreground">
                  {description}
                </p>
                {(buttons?.primary || buttons?.secondary) && (
                  <div className="flex flex-wrap items-center gap-4">
                    {buttons?.primary && (
                      <Button
                        asChild
                        size="lg"
                        className="h-12 rounded-full px-8 text-base"
                      >
                        <a href={buttons.primary.url}>{buttons.primary.text}</a>
                      </Button>
                    )}
                    {buttons?.secondary && (
                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="h-12 rounded-full bg-background px-8 text-base dark:bg-background"
                      >
                        <a href={buttons.secondary.url}>
                          {buttons.secondary.text}
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="relative w-full min-w-0 max-md:mx-auto max-md:max-w-sm md:pt-12 lg:pt-16">
              {heroImage && (
                <div className="relative w-full overflow-hidden rounded-xl border border-border shadow-2xl md:rounded-2xl">
                  <AspectRatio ratio={1}>
                    {heroImage.srcDark ? (
                      <>
                        <img
                          src={heroImage.src}
                          alt={heroImage.alt}
                          className="size-full object-cover object-top-left dark:hidden"
                        />
                        <img
                          src={heroImage.srcDark}
                          alt={heroImage.alt}
                          className="hidden size-full object-cover object-top-left dark:block"
                        />
                      </>
                    ) : (
                      <img
                        src={heroImage.src}
                        alt={heroImage.alt}
                        className="size-full object-cover object-top-left"
                      />
                    )}
                  </AspectRatio>
                  <BorderBeam
                    duration={8}
                    size={120}
                    colorFrom="var(--chart-1)"
                    colorTo="var(--chart-5)"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {marqueeLogos.length > 0 && (
        <div className="w-full bg-background pb-14 md:pt-2 lg:pt-6">
          <div className="container mx-auto min-w-0">
            {logosLabel && (
              <p className="mb-8 text-center text-sm text-muted-foreground">
                {logosLabel}
              </p>
            )}
            <Marquee className="relative">
              <MarqueeContent>
                {marqueeLogos.map((logo, index) => (
                  <MarqueeItem key={`${logo.src}-${index}`}>
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className={cn(
                        "mx-8 block w-32 opacity-80 md:w-40 dark:invert",
                        logo.className,
                      )}
                    />
                  </MarqueeItem>
                ))}
              </MarqueeContent>
              <MarqueeFade
                side="left"
                className="pointer-events-none w-12 md:w-20"
              />
              <MarqueeFade
                side="right"
                className="pointer-events-none w-12 md:w-20"
              />
            </Marquee>
          </div>
        </div>
      )}
    </section>
  );
};

export { Hero105 };
