"use client";
import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, Circle } from "lucide-react";

import { BorderBeam } from "@/components/magicui/border-beam";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

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
interface Badge {
  text: string;
  announcement?: string;
  url?: string;
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
  badge?: Badge;
  images?: Image[];
}

interface Hero118Props extends HeroSaasProps {}
type Props = Partial<Hero118Props>;

const defaultProps: Hero118Props = {
  heading: "The AI-powered CRM solution.",
  description:
    "Let AI help you manage accounts, deals, and handoffs in one place. Experience the future of CRM with AI-powered insights and automation.",
  buttons: {
    primary: {
      text: "Signup",
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
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-hero/saas-hero-1-16x9.png",
      srcDark: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-hero/saas-hero-1-16x9-dark.png",
      alt: "Product interface preview",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-hero/saas-hero-2-16x9.png",
      srcDark: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-hero/saas-hero-2-16x9-dark.png",
      alt: "Dashboard layout preview",
    },
  ],
  badge: { text: "Changelog v1.1" },
};

const Hero118 = (props: Props) => {
  const {
    heading,
    description,
    buttons,
    badge,
    images,
    logos,
    logosLabel,
    className,
  } = {
    ...defaultProps,
    ...props,
  };

  const heroImage = images?.[0];
  const carouselLogos = [...(logos ?? []), ...(logos ?? [])];

  return (
    <section
      className={cn(
        "overflow-hidden bg-background py-12 font-sans md:py-20",
        className,
      )}
    >
      <div className="container">
        <div className="flex flex-col gap-20">
          <div className="grid grid-cols-1 items-center gap-10 xl:grid-cols-2">
            <div className="flex h-full flex-col justify-center">
              <div className="flex w-full flex-col items-start gap-10">
                <div className="flex w-full max-w-2xl flex-col items-start gap-6">
                  {badge?.text && (
                    <div className="flex w-fit items-center gap-2 rounded-md bg-muted px-[0.625rem] py-1">
                      <Circle className="h-2 w-2 fill-green-500 text-green-500" />
                      <div className="font-mono text-xs leading-relaxed text-muted-foreground uppercase">
                        {badge.text}
                      </div>
                    </div>
                  )}
                  <h1 className="text-4xl leading-none font-semibold tracking-tighter text-foreground md:text-7xl">
                    {heading}
                  </h1>
                  <div className="text-base leading-snug text-muted-foreground md:text-lg">
                    {description}
                  </div>
                </div>
                <div className="flex w-full flex-col items-stretch gap-4 sm:flex-row sm:items-center">
                  {buttons?.secondary && (
                    <div className="w-full flex-1 xl:w-fit xl:flex-initial">
                      <Button
                        asChild
                        variant="secondary"
                        className="border-muted2 block h-fit w-full rounded-xl border px-5 py-3 text-center text-[0.9375rem] leading-normal font-medium xl:w-fit"
                      >
                        <a href={buttons.secondary.url}>
                          {buttons.secondary.text}
                        </a>
                      </Button>
                    </div>
                  )}
                  {buttons?.primary && (
                    <div className="w-full flex-1 xl:w-fit xl:flex-initial">
                      <Button
                        asChild
                        className="group flex h-fit w-full items-center justify-center gap-1 rounded-xl py-3 pr-4 pl-5 text-[0.9375rem] leading-normal font-medium transition-all duration-300 hover:pr-7 xl:w-fit"
                      >
                        <a href={buttons.primary.url}>
                          <div>{buttons.primary.text}</div>
                          <ArrowRight className="size-6! transition-transform duration-300 group-hover:translate-x-3" />
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div>
              <div className="border-muted2 relative overflow-hidden rounded-[1.25rem] border md:w-253.75">
                <AspectRatio ratio={1.5378787878787878}>
                  <div className="relative size-full">
                    {heroImage && (
                      <img
                        src={heroImage.src}
                        alt={heroImage.alt}
                        className="size-full object-cover object-top-left"
                      />
                    )}
                  </div>
                </AspectRatio>
                <BorderBeam duration={8} size={100} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {logos && logos.length > 0 && (
        <div className="mt-10 w-full py-12">
          <div className="container">
            <div className="mx-auto flex max-w-[72.5rem] flex-col gap-4">
              {logosLabel && (
                <p className="text-center text-lg text-foreground">
                  {logosLabel}
                </p>
              )}
              <div className="py-14">
                <Carousel
                  opts={{
                    loop: true,
                    align: "center",
                  }}
                  plugins={[
                    AutoScroll({
                      speed: 1,
                    }),
                    Autoplay({
                      playOnInit: true,
                      delay: 1000,
                    }),
                  ]}
                  className="relative w-full max-w-(--breakpoint-2xl) overflow-hidden mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
                >
                  <CarouselContent className="items-center">
                    {carouselLogos.map((logo, index) => (
                      <CarouselItem
                        key={`${logo.src}-${index}`}
                        className="w-fit basis-auto px-7"
                      >
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className={cn(
                            "h-8 w-auto object-contain opacity-60 dark:invert",
                            logo.className,
                          )}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export { Hero118 };
