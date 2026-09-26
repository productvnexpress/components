import { ArrowRight, ChevronRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
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
interface Badge {
  text: string;
  announcement?: string;
  url?: string;
}

interface HeroBasicProps {
  badge?: Badge;
  heading: string;
  description: string;
  buttons?: Buttons;
  image: Image;
  byline?: string;
  className?: string;
}

interface Hero192Props extends HeroBasicProps {}
type Props = Partial<Hero192Props>;

const defaultProps: Hero192Props = {
  badge: {
    text: "Changelog v1.1",
    announcement: "Check out our latest updates",
  },
  heading: "Blocks Built With Shadcn & Tailwind",
  description:
    "Finely crafted components built with React, Tailwind and shadcn/ui. Developers can copy and paste these blocks directly into their project.",
  buttons: {
    primary: {
      text: "Browse Components",
      url: "https://shadcnblocks.com",
    },
    secondary: {
      text: "View GitHub",
      url: "https://shadcnblocks.com",
    },
  },
  image: {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-hero/saas-hero-1-16x9.png",
    srcDark: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-hero/saas-hero-1-16x9-dark.png",
    alt: "Hero Image Placeholder",
  },
  byline: "Trusted by 25,000+ businesses worldwide",
};

const Hero192 = (props: Props) => {
  const { badge, heading, description, buttons, image, byline, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("py-12 md:py-16 lg:py-32", className)}>
      <div className="container mx-auto">
        <div className="mx-auto mb-12 flex max-w-5xl flex-col items-center gap-6">
          {badge && (
            <a
              href={badge.url ?? "#"}
              className="flex max-w-full min-w-0 items-center gap-2 rounded-full bg-muted py-1 pr-4 pl-1"
            >
              <Badge variant="outline" className="shrink-0 bg-background">
                {badge.text}
              </Badge>
              {badge.announcement && (
                <div className="flex min-w-0 flex-1 items-center gap-1">
                  <p className="min-w-0 truncate text-xs font-semibold md:overflow-visible md:text-sm md:text-clip md:whitespace-normal">
                    {badge.announcement}
                  </p>
                  <ChevronRight className="size-4 shrink-0" />
                </div>
              )}
            </a>
          )}
          <h1 className="mx-auto max-w-xl text-center text-4xl font-semibold tracking-tight text-pretty md:text-5xl lg:max-w-3xl lg:text-6xl">
            {heading}
          </h1>
          <p className="mx-auto max-w-5xl text-center text-lg text-balance text-muted-foreground md:text-xl">
            {description}
          </p>
          <div className="flex w-full flex-col gap-2 sm:flex-row sm:justify-center">
            {buttons?.primary && (
              <Button size="lg" asChild className="w-full sm:w-auto">
                <a href={buttons.primary.url}>
                  {buttons.primary.text}
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            )}
            {buttons?.secondary && (
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto"
              >
                <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
              </Button>
            )}
          </div>
          {byline && <p className="text-sm text-muted-foreground">{byline}</p>}
        </div>
        {image.srcDark ? (
          <>
            <img
              src={image.src}
              alt={image.alt}
              className="mx-auto aspect-3/4 w-full max-w-5xl rounded-lg border border-border object-cover object-top-left md:aspect-video md:object-top dark:hidden"
            />
            <img
              src={image.srcDark}
              alt={image.alt}
              className="mx-auto hidden aspect-3/4 w-full max-w-5xl rounded-lg border border-border object-cover object-top-left md:aspect-video md:object-top dark:block"
            />
          </>
        ) : (
          <img
            src={image.src}
            alt={image.alt}
            className="mx-auto aspect-3/4 w-full max-w-5xl rounded-lg border border-border object-cover object-top-left md:aspect-video md:object-top"
          />
        )}
      </div>
    </section>
  );
};

export { Hero192 };
