import type { ElementType } from "react";

import { BadgeCheck, Clock, Handshake, Snowflake, Star } from "lucide-react";

import { CardSpotlight } from "@/components/aceternity/card-spotlight";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

interface PricingSinglePlan {
  name: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
  period?: { monthly: string; yearly: string };
  features: string[];
  button: { text: string; url: string };
  secondaryButton?: { text: string; url: string };
  featureListLabel?: string;
  image?: string;
  badge?: string;
  priceNote?: string;
}

interface PricingSingleProps {
  heading: string;
  description: string;
  plan: PricingSinglePlan;
  className?: string;
}

interface Pricing37Props extends PricingSingleProps {
  iconFeatures?: Pricing37Feature[];
}
type Props = Partial<Pricing37Props>;

const defaultProps: Pricing37Props = {
  heading: "Our Pricing",
  description: "One plan with the tools you need to ship interfaces faster.",
  plan: {
    name: "Pro",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/pricing-plans/plan2.svg",
    description:
      "For individual developers and side projects shipping real interfaces.",
    monthlyPrice: "$49",
    yearlyPrice: "$129",
    period: { monthly: "/month", yearly: "/year" },
    badge: "Most popular",
    featureListLabel: "Includes",
    features: [
      "Up to 5 team members",
      "Advanced components library",
      "Priority support",
      "2GB storage space",
      "Team collaboration",
      "Custom branding",
    ],
    button: {
      text: "Get started",
      url: "#",
    },
    secondaryButton: {
      text: "Talk to sales",
      url: "#",
    },
  },
  iconFeatures: [
    { icon: Snowflake, label: "All Premium components" },
    { icon: Handshake, label: "Early access" },
    { icon: Star, label: "Component Request" },
    { icon: Clock, label: "Free Lifetime updates" },
    { icon: BadgeCheck, label: "Shadcnblocks support" },
  ],
};

interface Pricing37Feature {
  icon: ElementType<{ className?: string }>;
  label: string;
}

const Pricing37 = (props: Props) => {
  const { heading, description, plan, iconFeatures, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("overflow-hidden py-32", className)}>
      <div className="container flex w-full flex-col items-center justify-center px-4">
        <p className="rounded-full bg-muted px-2 py-1 text-xs uppercase">
          PRICING
        </p>
        <h2 className="relative py-2 text-center font-sans text-5xl font-semibold tracking-tighter lg:text-6xl">
          {heading}
        </h2>
        <p className="text-md mx-auto max-w-xl px-5 text-center text-muted-foreground lg:text-lg">
          {description}
        </p>

        <CardSpotlight className="relative mt-14 w-full max-w-md overflow-hidden rounded-3xl text-background">
          <div className="relative z-10 flex h-full flex-col">
            <div>
              <p className="text-md font-semibold">{plan.name}</p>
              <h3 className="mt-[11px] text-4xl font-semibold tracking-tight">
                {plan.monthlyPrice}
              </h3>
              <ul className="mt-[30px] space-y-[10px]">
                {(iconFeatures ?? []).map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <item.icon className="size-4 shrink-0" />
                    <p className="text-[15px] font-medium tracking-tight opacity-50">
                      {item.label}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <Button
              className="mt-8 w-full rounded-xl font-semibold"
              variant="secondary"
              asChild
            >
              <a href={plan.button.url} target="_blank" rel="noreferrer">
                {plan.button.text}
              </a>
            </Button>
          </div>
        </CardSpotlight>
      </div>
    </section>
  );
};

export { Pricing37 };
