import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

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
interface Logo {
  src: string;
  alt: string;
  srcDark?: string;
  className?: string;
}

interface HeroFullscreenProps {
  className?: string;
  heading: string;
  description: string;
  buttons?: Buttons;
  badge?: Badge | string;
  logos?: Logo[];
  logosLabel?: string;
}

interface Hero139Props extends HeroFullscreenProps {}
type Props = Partial<Hero139Props>;

const defaultProps: Hero139Props = {
  heading: "Unleash your data with insights",
  description: "Where creativity meets functionality. Unleash the potential of your ideas with cutting-edge strategies and flawless execution.",
  buttons: {
  primary: {
  text: "Contact us",
  url: "#",
},
},
  badge: {
  text: "Introducing",
},
  logosLabel: "Trusted by the fastest-growing healthtech companies",
  logos: [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-wordmark-white.svg",
      alt: "Vercel",
      className: "col-span-2 max-h-5 w-full object-contain lg:col-span-1",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark-white.svg",
      alt: "Tailwind CSS",
      className: "col-span-2 max-h-12 w-full object-contain lg:col-span-1",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark-white.svg",
      alt: "Supabase",
      className: "col-span-2 max-h-12 w-full object-contain lg:col-span-1",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark-white.svg",
      alt: "shadcn/ui",
      className:
        "col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark-white.svg",
      alt: "Supabase",
      className:
        "col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1",
    },
  ],
};

const MAX_LOGOS = 5;

function badgeText(badge: HeroFullscreenProps["badge"]): string | undefined {
  if (badge == null) return undefined;
  if (typeof badge === "string") return badge;
  return badge.text;
}

const Hero139 = (props: Props) => {
  const { badge, heading, description, buttons, logos, logosLabel, className } =
    {
      ...defaultProps,
      ...props,
    };

  const logoRow = (logos ?? []).slice(0, MAX_LOGOS);
  const kicker = badgeText(badge);

  return (
    <section
      className={cn(
        "dark relative isolate h-svh max-h-[1200px] min-h-[600px] overflow-hidden bg-background px-6 pt-14 lg:px-8",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-linear-to-b from-background via-background/75 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute -bottom-[46%] -left-[18%] h-[920px] w-[920px] rounded-full bg-chart-1/22 blur-[130px]" />
        <div className="absolute -bottom-[40%] left-1/2 h-[760px] w-[1200px] -translate-x-1/2 animate-pulse rounded-full bg-chart-2/28 blur-[100px]" />
        <div className="absolute -right-[12%] -bottom-[34%] h-[720px] w-[720px] rounded-full bg-chart-4/20 blur-[110px]" />
        <div className="absolute -bottom-[28%] left-[28%] h-[480px] w-[480px] rounded-full bg-chart-5/18 blur-[90px]" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2] bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/noise.png')] bg-repeat opacity-15"
      />
      <div className="relative z-10 container h-full">
        <div className="mx-auto max-w-3xl py-24 pt-48 text-center">
          {kicker && (
            <span className="rounded-full border border-muted-foreground/20 bg-muted/80 px-3 py-1 text-sm text-muted-foreground">
              {kicker}
            </span>
          )}
          <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-8xl">
            {heading}
          </h1>
          <p className="mt-6 mb-14 text-lg leading-8 text-muted-foreground">
            {description}
          </p>
          {buttons?.primary && (
            <Button
              asChild
              className="h-fit rounded-lg px-10 py-4 text-base font-semibold shadow-sm"
            >
              <a href={buttons.primary.url}>{buttons.primary.text}</a>
            </Button>
          )}
          {logosLabel && (
            <p className="relative px-4 py-1.5 pt-44 text-sm leading-6 text-muted-foreground">
              {logosLabel}
            </p>
          )}
          {logoRow.length > 0 && (
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              {logoRow.map((logo, index) => (
                <img
                  key={`${logo.src}-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  width={158}
                  height={48}
                  className={cn("w-full object-contain", logo.className)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export { Hero139 };
