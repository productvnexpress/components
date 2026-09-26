"use client";

import {
  ArrowRight,
  Braces,
  Cpu,
  Keyboard,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
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

interface Hero186Props extends HeroFeatureSliderProps {}
type Props = Partial<Hero186Props>;

const defaultProps: Hero186Props = {
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

/** Right-column list; cap matches carousel image count from pack. */
const MAX_FEATURES = 3;

const Hero186 = (props: Props) => {
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
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const featureCount = visibleFeatures.length;

  return (
    <section
      className={cn(
        "relative mx-2.5 mt-2.5 rounded-t-2xl rounded-b-[36px] bg-linear-to-b from-background via-background to-background lg:mx-4",
        className,
      )}
    >
      <div className="py-32">
        <div className="container mx-auto">
          <div className="flex flex-col justify-between gap-8 md:gap-14 lg:flex-row">
            {/* Left side - Main content */}
            <div className="flex-1">
              <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-pretty text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                {heading}
              </h1>

              {description && (
                <p className="mt-5 text-2xl text-balance text-muted-foreground">
                  {description}
                </p>
              )}

              <div className="mt-8 flex w-full flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
                {buttonPrimary && (
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <a href={buttonPrimary.href}>
                      {buttonPrimary.text}
                      <ArrowRight className="size-4" />
                    </a>
                  </Button>
                )}
                {buttonSecondary && (
                  <Button
                    variant="outline"
                    asChild
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <a href={buttonSecondary.href}>{buttonSecondary.text}</a>
                  </Button>
                )}
              </div>
            </div>

            {/* Right side - Features */}
            <div
              className="flex flex-1 flex-col justify-center gap-1 max-lg:pt-4"
              onMouseLeave={() => setActiveImageIndex(0)}
            >
              {visibleFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="flex cursor-default items-start gap-2.5 rounded-xl px-4 py-3.5 transition-colors hover:bg-muted/40 lg:gap-5"
                    onMouseEnter={() => setActiveImageIndex(index)}
                  >
                    <Icon className="mt-0.5 size-3 shrink-0 text-primary lg:size-3.5" />
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="max-w-sm text-sm text-balance text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="container mx-auto mt-12 md:mt-20 lg:mt-24">
          <div className="relative aspect-video w-full mask-[linear-gradient(black_80%,transparent_100%)]">
            {Array.from({ length: Math.max(featureCount, 1) }, (_, i) => {
              const heroImage = images[Math.min(i, images.length - 1)];
              const isActive = activeImageIndex === i;
              return (
                <div
                  key={`${heroImage.src}-${i}`}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-500 ease-out",
                    isActive
                      ? "z-10 opacity-100"
                      : "pointer-events-none z-0 opacity-0",
                  )}
                  aria-hidden={!isActive}
                >
                  {heroImage.srcDark ? (
                    <>
                      <img
                        src={heroImage.src}
                        alt={heroImage.alt}
                        className="absolute inset-0 size-full rounded-2xl border border-border object-cover object-center dark:hidden"
                      />
                      <img
                        src={heroImage.srcDark}
                        alt={heroImage.alt}
                        className="absolute inset-0 hidden size-full rounded-2xl border border-border object-cover object-center dark:block"
                      />
                    </>
                  ) : (
                    <img
                      src={heroImage.src}
                      alt={heroImage.alt}
                      className="absolute inset-0 size-full rounded-2xl border border-border object-cover object-center"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero186 };
