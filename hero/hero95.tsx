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

interface HeroTriImageProps {
  heading: string;
  description: string;
  buttons?: Buttons;
  images: [Image, Image, Image];
  className?: string;
}

interface Hero95Props extends HeroTriImageProps {}
type Props = Partial<Hero95Props>;

const defaultProps: Hero95Props = {
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

const Hero95 = (props: Props) => {
  const { heading, description, buttons, images, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("bg-background py-12 md:pt-24", className)}>
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-7">
          <div className="mb-12 max-w-3xl">
            <h1 className="pb-6 text-center text-5xl leading-none font-semibold text-foreground md:text-6xl md:leading-tight">
              {heading}
            </h1>
            <p className="pb-10 text-center text-2xl leading-tight text-muted-foreground">
              {description}
            </p>
            <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
              {buttons?.primary && (
                <Button
                  asChild
                  className="h-fit rounded-lg px-6 py-4 text-xl leading-normal font-medium"
                >
                  <a href={buttons.primary.url}>{buttons.primary.text}</a>
                </Button>
              )}
              {buttons?.secondary && (
                <Button
                  asChild
                  variant="outline"
                  className="h-fit rounded-lg px-6 py-4 text-xl leading-normal font-medium"
                >
                  <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
                </Button>
              )}
            </div>
          </div>

          <div className="relative h-[524px] w-full max-w-[1000px]">
            <div className="absolute top-2 left-0">
              <div className="relative mt-6 ml-6 h-[351px] w-[261px] overflow-hidden rounded-[20px] bg-background">
                <img
                  src={images[1].src}
                  alt={images[1].alt}
                  className="size-full object-cover"
                />
              </div>
            </div>
            <div className="absolute top-[70px] left-1/2 -translate-x-1/2">
              <div className="relative h-[430px] w-[319px] overflow-hidden rounded-[20px] bg-background">
                <img
                  src={images[0].src}
                  alt={images[0].alt}
                  className="size-full object-cover"
                />
              </div>
            </div>
            <div className="absolute top-[33px] right-0">
              <div className="relative h-[351px] w-[261px] overflow-hidden rounded-[20px] bg-background">
                <img
                  src={images[2].src}
                  alt={images[2].alt}
                  className="size-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero95 };
