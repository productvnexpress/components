"use client";

import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
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

interface HeroTriImageProps {
  badge?: Badge;
  heading: string;
  description: string;
  buttons?: Buttons;
  images: [Image, Image, Image];
  className?: string;
}

interface Hero183Props extends HeroTriImageProps {}
type Props = Partial<Hero183Props>;

const defaultProps: Hero183Props = {
  badge: {
  text: "Premium",
  announcement: "Check out our latest updates",
},
  heading: "Shadcn UI Components built for production",
  description: "Finely crafted components built with React, Tailwind and shadcn/ui. Developers can copy and paste these blocks directly into their project.",
  buttons: {
    primary: {
      text: "Discover all components",
      url: "https://www.shadcnblocks.com",
    },
    secondary: {
      text: "View on GitHub",
      url: "https://www.shadcnblocks.com",
    },
  },
  images: [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/photos4/photo1.png",
      alt: "Portrait photo one",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/photos4/photo2.png",
      alt: "Portrait photo two",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/photos4/photo3.png",
      alt: "Portrait photo three",
    },
  ],
};

const Hero183 = (props: Props) => {
  const { badge, heading, description, buttons, images, className } = {
    ...defaultProps,
    ...props,
  };

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    updateCurrent();
    api.on("select", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
    };
  }, [api]);

  return (
    <section className={cn("overflow-hidden py-32", className)}>
      <div className="container mx-auto">
        <div className="mx-auto max-w-5xl text-center">
          {badge?.text && <Badge variant="outline">{badge.text}</Badge>}
          <h1 className="mt-6 text-4xl font-bold md:text-6xl">{heading}</h1>
          <p className="mt-5 text-lg text-muted-foreground md:text-xl lg:px-32">
            {description}
          </p>
          <div className="mt-8 flex justify-center gap-2">
            {buttons?.primary && (
              <Button size="lg" asChild>
                <a href={buttons.primary.url}>{buttons.primary.text}</a>
              </Button>
            )}
            {buttons?.secondary && (
              <Button variant="outline" size="lg" asChild>
                <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
              </Button>
            )}
          </div>
        </div>
        <div className="relative mx-10 mt-16 hidden md:block">
          <div className="absolute top-0 -right-20 -left-20 z-10 h-px bg-[linear-gradient(to_right,transparent,hsl(var(--border))_4%,hsl(var(--border))_96%,transparent)]"></div>
          <div className="absolute -right-20 bottom-0 -left-20 z-10 h-px bg-[linear-gradient(to_right,transparent,hsl(var(--border))_4%,hsl(var(--border))_96%,transparent)]"></div>
          <div className="relative grid grid-cols-7 grid-rows-9 gap-4 lg:gap-6">
            <img
              src={images[1].src}
              alt={images[1].alt}
              className="col-span-2 row-span-5 row-start-3 aspect-video h-full self-center rounded-lg border border-border object-cover"
            />
            <div className="col-span-3 col-start-3 row-span-full row-start-1 m-px rounded-lg bg-muted p-2.5">
              <img
                src={images[0].src}
                alt={images[0].alt}
                className="aspect-video h-full rounded-lg border border-border object-cover"
              />
            </div>
            <img
              src={images[2].src}
              alt={images[2].alt}
              className="col-span-2 col-start-6 row-span-5 row-start-3 aspect-video h-full self-center rounded-lg border border-border object-cover"
            />
            <div className="absolute -top-[10%] -bottom-[10%] col-start-3 row-span-full row-start-1 w-px bg-[linear-gradient(to_bottom,transparent,hsl(var(--border))_5%,hsl(var(--border))_95%,transparent)]"></div>
            <div className="absolute -top-[10%] -bottom-[10%] -left-[17px] col-start-6 row-span-full row-start-1 w-px bg-[linear-gradient(to_bottom,transparent,hsl(var(--border))_5%,hsl(var(--border))_95%,transparent)] lg:-left-[25px]"></div>
          </div>
          <div className="absolute -top-full -bottom-1/2 -left-6 w-px bg-linear-to-b from-transparent via-border via-60% to-transparent"></div>
          <div className="absolute -top-full -right-6 -bottom-1/2 w-px bg-linear-to-b from-transparent via-border via-60% to-transparent"></div>
        </div>
        <div className="mt-16 md:hidden">
          <Carousel setApi={setApi} className="mx-auto max-w-md">
            <CarouselContent className="max-h-full">
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="aspect-video rounded-lg border border-border object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-6 flex justify-center">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={cn(
                    "mx-1.5 inline-block size-2 cursor-pointer rounded-full bg-muted-foreground/20 transition-colors duration-300",
                    index + 1 === current && "bg-muted-foreground/60",
                  )}
                  onClick={() => api && api.scrollTo(index)}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { Hero183 };
