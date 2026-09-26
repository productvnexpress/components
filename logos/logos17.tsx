"use client";

import Marquee from "react-fast-marquee";

import { cn } from "@/lib/utils";

type LogosDoubleRowStaticLogo = Logo & {
  href?: string;
};
interface Logo {
  src: string;
  alt: string;
  srcDark?: string;
  className?: string;
}

interface LogosDoubleRowStaticProps {
  heading: string;
  subtitle?: string;
  topRow: LogosDoubleRowStaticLogo[];
  bottomRow: LogosDoubleRowStaticLogo[];
  className?: string;
}

type Props = Partial<LogosDoubleRowStaticProps>;

const defaultProps: LogosDoubleRowStaticProps = {
  heading: "Trusted by these companies",
  subtitle: "Used by the world's leading teams & startups",
  topRow: [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-1.svg",
      alt: "Company logo 1",
      className: "h-7 w-auto",
      href: "https://www.shadcnblocks.com",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-2.svg",
      alt: "Company logo 2",
      className: "h-7 w-auto",
      href: "https://www.shadcnblocks.com",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-3.svg",
      alt: "Company logo 3",
      className: "h-7 w-auto",
      href: "https://www.shadcnblocks.com",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-4.svg",
      alt: "Company logo 4",
      className: "h-7 w-auto",
      href: "https://www.shadcnblocks.com",
    },
  ],
  bottomRow: [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-5.svg",
      alt: "Company logo 5",
      className: "h-5 w-auto",
      href: "https://www.shadcnblocks.com",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-6.svg",
      alt: "Company logo 6",
      className: "h-7 w-auto",
      href: "https://www.shadcnblocks.com",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-7.svg",
      alt: "Company logo 7",
      className: "h-7 w-auto",
      href: "https://www.shadcnblocks.com",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-8.svg",
      alt: "Company logo 8",
      className: "h-7 w-auto",
      href: "https://www.shadcnblocks.com",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-9.svg",
      alt: "Company logo 9",
      className: "h-7 w-auto",
      href: "https://www.shadcnblocks.com",
    },
  ],
};

const Logos17 = (props: Props) => {
  const { heading, subtitle, topRow, bottomRow, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("overflow-hidden py-32", className)}>
      <div className="container space-y-10 lg:space-y-16">
        <div className="text-center">
          <h2 className="text-xl font-semibold tracking-tight text-balance md:text-2xl lg:text-3xl">
            {heading}
          </h2>
          {subtitle ? (
            <p className="mt-2 text-lg text-muted-foreground">{subtitle}</p>
          ) : null}
        </div>

        <div className="flex w-full flex-col items-center gap-8">
          <LogoRow logos={topRow} gridClassName="grid-cols-4" />
          <LogoRow
            logos={bottomRow}
            gridClassName="grid-cols-5"
            direction="right"
          />
        </div>
      </div>
    </section>
  );
};

interface LogoRowProps {
  logos: LogosDoubleRowStaticLogo[];
  gridClassName: string;
  direction?: "left" | "right";
}

const LogoRow = ({ logos, gridClassName, direction }: LogoRowProps) => {
  return (
    <>
      <div className="hidden md:block">
        <div
          className={cn(
            "grid items-center justify-items-center gap-x-20 lg:gap-x-28",
            gridClassName,
          )}
        >
          {logos.map((logo, index) => (
            <div
              key={`${logo.src}-${index}`}
              className="flex aspect-3/1 w-28 items-center justify-center sm:w-32"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={cn(
                  logo.className,
                  "h-auto max-h-7 w-auto object-contain dark:invert",
                )}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden">
        <Marquee direction={direction} pauseOnHover autoFill speed={40}>
          {logos.map((logo, index) => (
            <div
              key={`${logo.src}-${index}`}
              className="mx-8 flex aspect-3/1 w-28 items-center justify-center lg:mx-10"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={cn(
                  logo.className,
                  "h-auto max-h-7 w-auto object-contain dark:invert",
                )}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
};

export { Logos17 };
