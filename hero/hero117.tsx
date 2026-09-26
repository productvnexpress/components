import { MoveRight } from "lucide-react";

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

interface Hero117Props extends HeroTriImageProps {}
type Props = Partial<Hero117Props>;

const defaultProps: Hero117Props = {
  badge: {
    text: "Your Website Builder",
    announcement: "Check out our latest updates",
  },
  heading: "Shadcn UI Components built for production",
  description:
    "Finely crafted components built with React, Tailwind and shadcn/ui. Developers can copy and paste these blocks directly into their project.",
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

const Hero117 = (props: Props) => {
  const { badge, heading, description, buttons, images, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("bg-background", className)}>
      <div className="container mx-auto flex flex-col justify-between gap-10 py-12 lg:flex-row">
        <div className="flex flex-col items-start gap-6 lg:w-[45%]">
          {badge?.text && (
            <p className="flex items-center gap-2 text-lg font-medium text-foreground">
              <span>{badge.text}</span>
              <MoveRight className="size-6" />
            </p>
          )}
          <h1 className="text-4xl font-semibold text-foreground md:text-6xl">
            {heading}
          </h1>
          <p className="text-lg font-medium text-muted-foreground">
            {description}
          </p>
          <div className="flex items-center gap-4 self-stretch">
            {buttons?.primary && (
              <Button
                asChild
                className="h-fit max-w-52 flex-1 rounded-full px-6 py-3 text-lg"
              >
                <a href={buttons.primary.url}>{buttons.primary.text}</a>
              </Button>
            )}
            {buttons?.secondary && (
              <Button
                asChild
                variant="ghost"
                className="flex items-center gap-2 text-base font-medium"
              >
                <a href={buttons.secondary.url}>
                  <span>{buttons.secondary.text}</span>
                  <MoveRight className="size-6!" />
                </a>
              </Button>
            )}
          </div>
        </div>
        <div className="w-full lg:max-w-[668px]">
          <AspectRatio ratio={1.374485597}>
            <div className="grid size-full grid-cols-2 grid-rows-2 gap-5">
              <div>
                <img
                  src={images[0].src}
                  alt={images[0].alt}
                  className="size-full rounded-xl border border-border object-cover"
                />
              </div>
              <div className="col-start-2 row-span-2">
                <img
                  src={images[1].src}
                  alt={images[1].alt}
                  className="size-full rounded-xl border border-border object-cover"
                />
              </div>
              <div>
                <img
                  src={images[2].src}
                  alt={images[2].alt}
                  className="size-full rounded-xl border border-border object-cover"
                />
              </div>
            </div>
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};

export { Hero117 };
