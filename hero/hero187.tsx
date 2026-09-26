"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  ArrowRight,
  Braces,
  Cpu,
  Keyboard,
} from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { cn } from "@/lib/utils";

type HeroFeatureSliderImage = Image & {
  label?: string;
};
interface HeroFeatureSliderFeature {
  title: string;
  description: string;
  icon: ElementType<{ className?: string }>;
  color?: string;
  href?: string;
}
interface Image {
  src: string;
  alt: string;
  srcDark?: string;
}

interface HeroFeatureSliderProps {
  heading: string;
  description?: string;
  buttonPrimary?: {
    text: string;
    href: string;
  };
  buttonSecondary?: {
    text: string;
    href: string;
  };
  features?: HeroFeatureSliderFeature[];
  images: [HeroFeatureSliderImage, ...HeroFeatureSliderImage[]];
  className?: string;
}

interface Hero187Props extends HeroFeatureSliderProps {}
type Props = Partial<Hero187Props>;

const defaultProps: Hero187Props = {
  heading: "Shadcn UI Components built for the modern stack.",
  description:
    "Components built with a modern, performant, and accessible foundation.",
  buttonPrimary: {
    text: "Browse blocks",
    href: "https://www.shadcnblocks.com",
  },
  buttonSecondary: {
    text: "View docs",
    href: "https://www.shadcnblocks.com",
  },
  features: [
    {
      title: "Composable patterns",
      description:
        "Ship faster with structured sections and consistent spacing.",
      icon: Braces,
    },
    {
      title: "Design tokens",
      description:
        "Theme and scale colors, type, and radii from a single coherent system.",
      icon: Cpu,
    },
    {
      title: "Accessible defaults",
      description:
        "Keyboard and screen-reader friendly building blocks out of the box.",
      icon: Keyboard,
    },
  ],
  images: [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-hero/saas-hero-2-16x9.png",
      srcDark: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-hero/saas-hero-2-16x9-dark.png",
      alt: "Product preview",
      label: "Overview",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-hero/saas-hero-3-16x9.png",
      srcDark: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-hero/saas-hero-3-16x9-dark.png",
      alt: "Product detail",
      label: "Workflow",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-hero/saas-hero-4-16x9.png",
      srcDark: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-hero/saas-hero-4-16x9-dark.png",
      alt: "Product context",
      label: "Insights",
    },
  ],
};

/** Left column uses `grid-cols-2`. */
const MAX_FEATURES = 3;
/** Right-side carousel: three slides (matches feature count). */
const MAX_IMAGES = 3;

const Hero187 = (props: Props) => {
  const {
    heading,
    description,
    buttonPrimary,
    buttonSecondary,
    features,
    images,
    className,
  } = {
    ...defaultProps,
    ...props,
  };

  const visibleFeatures = (features ?? []).slice(0, MAX_FEATURES);

  const resolvedImages =
    images.length > 0 ? images : defaultProps.images;
  const activeImages = resolvedImages.slice(0, MAX_IMAGES);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className={cn("relative overflow-hidden py-32", className)}>
      {/* Gradient border */}
      <div className="relative container mx-auto grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div className="absolute inset-x-0 bottom-0 z-10 h-px bg-linear-to-r from-transparent via-border to-border" />
        {/* Left side - Content */}
        <div className="space-y-8 lg:space-y-12">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-pretty sm:text-4xl md:text-5xl lg:text-6xl">
              {heading}
            </h1>

            {description && (
              <p className="mt-6 text-xl text-balance text-muted-foreground lg:text-2xl">
                {description}
              </p>
            )}
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-5">
            {visibleFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                  <Icon className="mt-0.5 size-3 shrink-0 lg:size-3.5" />
                  <div>
                    <h3 className="font-semibold tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-balance text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {buttonPrimary && (
              <Button
                asChild
                aria-label={buttonPrimary.text}
                size="lg"
                className="gap-2"
              >
                <a href={buttonPrimary.href}>
                  {buttonPrimary.text}
                  <ArrowRight className="size-4" aria-hidden />
                </a>
              </Button>
            )}
            {buttonSecondary && (
              <Button
                asChild
                variant="outline"
                className="max-sm:hidden"
                size="lg"
              >
                <a href={buttonSecondary.href}>{buttonSecondary.text}</a>
              </Button>
            )}
          </div>

          <SlideIndicator
            currentSlide={currentSlide}
            images={activeImages}
            className="mb-4! max-lg:hidden"
            api={api}
          />
        </div>

        {/* Right side - Carousel */}
        <div className="relative -mr-[max(2rem,calc((100vw-80rem)/2+2rem))] max-lg:translate-x-10">
          <Carousel
            className="size-full [&>div]:size-full"
            setApi={setApi}
            opts={{
              loop: true,
            }}
            plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
          >
            <CarouselContent className="size-full">
              {activeImages.map((image, index) => (
                <CarouselItem key={index}>
                  {image.srcDark ? (
                    <>
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="size-full min-h-120 overflow-hidden rounded-t-xl border border-border object-contain dark:hidden"
                      />
                      <img
                        src={image.srcDark}
                        alt={image.alt}
                        className="hidden size-full min-h-120 overflow-hidden rounded-t-xl border border-border object-contain dark:block"
                      />
                    </>
                  ) : (
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="size-full min-h-120 overflow-hidden rounded-t-xl border border-border object-contain"
                    />
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      <SlideIndicator
        currentSlide={currentSlide}
        images={activeImages}
        className="mt-6 mb-8 lg:hidden"
        api={api}
      />
    </section>
  );
};

interface SlideIndicatorProps {
  currentSlide: number;
  images: Array<{ label?: string }>;
  className?: string;
  api: CarouselApi | null;
}

const SlideIndicator = ({
  currentSlide,
  images,
  className,
  api,
}: SlideIndicatorProps) => {
  return (
    <div
      className={cn("flex flex-col items-center gap-2 font-medium", className)}
    >
      <div className="">
        <span className="text-muted-foreground">
          {currentSlide + 1} of {images.length} —{" "}
        </span>
        <span className="text-primary">
          {images[currentSlide]?.label ?? ""}
        </span>
      </div>
      <div className="flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={cn(
              "h-0.5 w-6 rounded-full transition-colors",
              index === currentSlide
                ? "bg-primary"
                : "bg-primary/20 hover:bg-primary/40",
            )}
          />
        ))}
      </div>
    </div>
  );
};

export { Hero187 };
