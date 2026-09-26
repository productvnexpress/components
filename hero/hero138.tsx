import { ArrowRight } from "lucide-react";

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

interface HeroSaasProps {
  className?: string;
  heading: string;
  description: string;
  buttons?: Buttons;
  images?: Image[];
}

interface Hero138Props extends HeroSaasProps {
  /** Muted first line of the two-tone headline. */
  headingMuted?: string;
  /** Emphasized trailing phrase in the description column. */
  descriptionHighlight?: string;
  /** Footnote below the CTA row. */
  byline?: string;
}
type Props = Partial<Hero138Props>;

const defaultProps: Hero138Props = {
  heading: "Designed to help you grow your scalable service.",
  description: "Easily accept payments, manage tasks, communicate with clients, and deliver top-notch service—all through your personalized client portal.",
  buttons: {
  primary: {
  text: "Set up your service",
  url: "#",
},
  secondary: {
  text: "See our guides",
  url: "#",
},
},
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
  headingMuted: "The first comprehensive, all-inclusive toolkit",
  descriptionHighlight: "Get started in under 5 minutes.",
  byline: "Free until your first subscriber",
};

const Hero138 = (props: Props) => {
  const {
    headingMuted,
    heading,
    description,
    descriptionHighlight,
    buttons,
    byline,
    images,
    className,
  } = {
    ...defaultProps,
    ...props,
  };

  const heroImage = images?.[0];

  return (
    <section
      className={cn(
        "dark relative overflow-hidden bg-background pt-12 before:absolute before:top-0 before:right-0 before:z-20 before:h-full before:w-[6.25rem] before:bg-linear-to-l before:from-background before:to-transparent before:content-[''] after:absolute after:bottom-0 after:left-0 after:z-20 after:block after:h-[200px] after:w-full after:bg-linear-to-t after:from-background after:to-transparent after:content-[''] md:pt-20 lg:before:w-[43.75rem]",
        className,
      )}
    >
      <div className="container w-full max-w-[75rem]">
        <div className="relative z-30">
          <h1 className="text-3xl font-medium text-foreground md:text-6xl md:leading-tight xl:text-7xl">
            {headingMuted && (
              <>
                <span className="text-foreground/60">{headingMuted}</span>
                <br />
              </>
            )}
            {heading}
          </h1>
          <div className="mt-10 flex flex-col-reverse justify-between gap-10 lg:flex-row">
            <div className="">
              <div className="flex flex-wrap items-center gap-2">
                {buttons?.primary && (
                  <Button
                    asChild
                    className="block h-fit w-fit rounded-xl px-6 py-3 text-center text-sm font-medium transition hover:shadow-[0_0_0_4px_#ffffff40]"
                  >
                    <a href={buttons.primary.url}>{buttons.primary.text}</a>
                  </Button>
                )}
                {buttons?.secondary && (
                  <Button
                    variant="ghost"
                    asChild
                    className="group flex h-fit w-fit items-center gap-2 rounded-xl px-6 py-3 text-center text-sm font-medium text-foreground transition hover:bg-foreground/20"
                  >
                    <a href={buttons.secondary.url}>
                      <div>{buttons.secondary.text}</div>
                      <ArrowRight className="h-[0.875rem]! w-[0.875rem]! stroke-foreground transition group-hover:translate-x-1" />
                    </a>
                  </Button>
                )}
              </div>
              {byline && (
                <p className="mt-4 text-xs text-muted-foreground">{byline}</p>
              )}
            </div>
            <div className="max-w-[32rem]">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {description}{" "}
                {descriptionHighlight && (
                  <span className="font-medium text-foreground">
                    {descriptionHighlight}
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="relative mt-32 h-[18.75rem] w-full md:h-[37.5rem]">
          <div className="absolute left-0 z-10 h-full min-w-[50rem] md:min-w-[100rem]">
            <div className="h-full overflow-hidden rounded-xl border border-background">
              {heroImage && (
                <AspectRatio ratio={2.666666667 / 1}>
                  {heroImage.srcDark ? (
                    <>
                      <img
                        src={heroImage.src}
                        alt={heroImage.alt}
                        className="w-full object-cover object-top md:border-0 dark:hidden"
                      />
                      <img
                        src={heroImage.srcDark}
                        alt={heroImage.alt}
                        className="hidden w-full object-cover object-top md:border-0 dark:block"
                      />
                    </>
                  ) : (
                    <img
                      src={heroImage.src}
                      alt={heroImage.alt}
                      className="w-full object-cover object-top md:border-0"
                    />
                  )}
                </AspectRatio>
              )}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 h-full w-full">
            <div className="flex h-full w-full blur-[180px]">
              <div className="flex-1 -translate-x-[55%]">
                <AspectRatio
                  ratio={1 / 3}
                  className="overflow-hidden rounded-3xl bg-teal-200"
                />
              </div>
              <div className="flex-1 -translate-y-[33%]">
                <AspectRatio
                  ratio={1 / 3}
                  className="overflow-hidden rounded-3xl bg-orange-300"
                />
              </div>
              <div className="flex-1">
                <AspectRatio
                  ratio={1 / 3}
                  className="overflow-hidden rounded-3xl bg-cyan-300"
                />
              </div>
              <div className="flex-1 -translate-y-[20%]">
                <AspectRatio
                  ratio={1 / 3}
                  className="overflow-hidden rounded-3xl bg-purple-300"
                />
              </div>
              <div className="flex-1">
                <AspectRatio
                  ratio={1 / 3}
                  className="overflow-hidden rounded-3xl bg-pink-200"
                />
              </div>
              <div className="flex-1 -translate-y-[23%]">
                <AspectRatio
                  ratio={1 / 3}
                  className="overflow-hidden rounded-3xl bg-red-900"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero138 };
