import { ArrowRight, Check } from "lucide-react";

import { Separator } from "@/components/ui/separator";

import { cn } from "@/lib/utils";

interface PricingCards2CardsPlan {
  name: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
  features: string[];
  button: {
    text: string;
    url: string;
  };
  highlighted?: boolean;
  featureListLabel?: string;
  image?: string;
}

interface PricingCards2CardsProps {
  plans: PricingCards2CardsPlan[];
  className?: string;
}

interface Pricing36Props extends PricingCards2CardsProps {}
type Props = Partial<Pricing36Props>;

const defaultProps: Pricing36Props = {
  plans: [
    {
      name: "Free",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/pricing-plans/plan1.svg",
      description: "For individuals getting started",
      monthlyPrice: "$0",
      yearlyPrice: "$0",
      features: [
        "Single user",
        "Basic components library",
        "Community support",
        "1GB storage space",
      ],
      button: {
        text: "Get Started",
        url: "https://shadcnblocks.com",
      },
    },
    {
      name: "Pro",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/pricing-plans/plan2.svg",
      description: "For professionals",
      monthlyPrice: "$49",
      yearlyPrice: "$359",
      features: [
        "Up to 5 team members",
        "Advanced components library",
        "Priority support",
        "2GB storage space",
        "Team collaboration",
        "Custom branding",
      ],
      button: {
        text: "Purchase",
        url: "https://shadcnblocks.com",
      },
      highlighted: true,
    },
  ],
};

const Pricing36 = (props: Props) => {
  const { plans, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {(plans ?? []).map((plan) => (
            <div key={plan.name} className="flex flex-col gap-4">
              <div
                className={cn(
                  "flex h-full flex-col rounded-4xl p-px",
                  plan.highlighted ? "bg-primary" : "bg-border",
                )}
              >
                <div className="h-full rounded-[31px] bg-background p-8">
                  <p className="text-xl font-semibold">{plan.name}</p>
                  <div className="mt-6 flex flex-col gap-2">
                    <p className="text-6xl font-bold">
                      {plan.monthlyPrice}
                      <span className="text-base font-semibold text-muted-foreground">
                        /month
                      </span>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {plan.description}
                    </p>
                  </div>
                  <Separator className="my-6" />
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex gap-1.5">
                        <Check className="mt-0.5 size-4 shrink-0 text-foreground" />
                        <p className="font-medium">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={plan.button.url}
                  className={cn(
                    "group flex items-center justify-center gap-1.5 py-3 text-center font-medium",
                    plan.highlighted ? "text-background" : "text-foreground",
                  )}
                >
                  {plan.button.text}
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Pricing36 };
