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

interface Hero185Props extends HeroTriImageProps {}
type Props = Partial<Hero185Props>;

const defaultProps: Hero185Props = {
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

const Hero185 = (props: Props) => {
  const { badge, heading, description, buttons, images, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            {badge?.text && (
              <p className="text-sm font-medium text-muted-foreground">
                {badge.text}
              </p>
            )}
            <h1 className="text-4xl font-bold text-pretty lg:text-6xl">
              {heading}
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground">
              {description}
            </p>
            {(buttons?.primary || buttons?.secondary) && (
              <div className="flex flex-col gap-2 sm:flex-row">
                {buttons?.primary && (
                  <Button asChild className="w-full sm:w-auto">
                    <a href={buttons.primary.url}>{buttons.primary.text}</a>
                  </Button>
                )}
                {buttons?.secondary && (
                  <Button
                    asChild
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
                  </Button>
                )}
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="row-span-2 overflow-hidden rounded-xl border border-border">
              <img
                src={images[0].src}
                alt={images[0].alt}
                className="size-full min-h-64 object-cover object-center sm:min-h-80 lg:h-full lg:min-h-0"
              />
            </div>
            <div className="aspect-4/3 overflow-hidden rounded-xl border border-border">
              <img
                src={images[1].src}
                alt={images[1].alt}
                className="size-full object-cover object-center"
              />
            </div>
            <div className="aspect-4/3 overflow-hidden rounded-xl border border-border">
              <img
                src={images[2].src}
                alt={images[2].alt}
                className="size-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero185 };
