import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

interface Image {
  src: string;
  alt: string;
  srcDark?: string;
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
  images: [Image, Image, Image];
  className?: string;
}

interface Hero178Props extends HeroTriImageProps {}
type Props = Partial<Hero178Props>;

const defaultProps: Hero178Props = {
  badge: {
    text: "Your Website Builder",
    announcement: "Check out our latest updates",
  },
  heading: "Shadcn UI Components built for production",
  description:
    "Finely crafted components built with React, Tailwind and shadcn/ui. Developers can copy and paste these blocks directly into their project.",
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

const Hero178 = (props: Props) => {
  const { badge, heading, description, images, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section
      className={cn(
        "relative border-b border-muted bg-background pt-10",
        className,
      )}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-2 md:gap-4 lg:grid-cols-2">
          <div className="flex w-full max-w-[31.25rem] flex-col gap-9 lg:max-w-[37.5rem] lg:py-[20%] xl:py-[26%]">
            {badge && (
              <p className="font-mono text-[clamp(0.875rem,0.875vw,1rem)] text-muted-foreground">
                {badge.text}
              </p>
            )}
            <h1 className="text-[clamp(3.5rem,calc(6.5vw+2.3rem),9.5rem)] leading-[0.85] tracking-[-0.03em] text-foreground">
              {heading}
            </h1>
            <p className="text-[clamp(1.125rem,1.125vw,1.4rem)] leading-normal text-muted-foreground">
              {description}
            </p>
          </div>
          <div>
            <div className="relative ml-8 aspect-square w-full max-w-[56.25rem] overflow-hidden lg:absolute lg:right-0 lg:bottom-0 lg:w-1/2">
              <div className="absolute right-0 bottom-0 w-[85%] overflow-hidden rounded-lg">
                <AspectRatio ratio={0.918918919 / 1}>
                  <img
                    src={images[0].src}
                    alt={images[0].alt}
                    className="block size-full object-cover object-top-left"
                  />
                </AspectRatio>
              </div>
              <div className="absolute bottom-0 left-[0%] w-[70%] overflow-hidden rounded-tl-lg">
                <AspectRatio ratio={1.9 / 1}>
                  <img
                    src={images[1].src}
                    alt={images[1].alt}
                    className="block h-full w-full object-cover object-center"
                  />
                </AspectRatio>
              </div>
              <div className="absolute right-[5%] bottom-0 w-[40%] overflow-hidden rounded-tl-lg rounded-tr-lg shadow-md">
                <AspectRatio ratio={0.776119403 / 1}>
                  <img
                    src={images[2].src}
                    alt={images[2].alt}
                    className="block h-full w-full object-cover object-top"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero178 };
