"use client";

import {
  BadgeCheck,
  Bell,
  Briefcase,
  Brush,
  Building,
  CalendarCheck2,
  CheckSquare,
  Code,
  Database,
  FileText,
  GitBranch,
  GitPullRequest,
  LayoutGrid,
  MonitorSmartphone,
  Rocket,
  Settings2,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

import { cn } from "@/lib/utils";

type IconComponent = ElementType<{ className?: string }>;
type Pricing3PlanFeature = | string
  | {
      text: string;
      icon?: IconComponent;
    };
interface Pricing3PlansPlan {
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  period: {
    monthly: string;
    yearly: string;
  };
  description: {
    monthly: string;
    yearly: string;
  };
  buttonText: string;
  buttonUrl?: string;
  highlighted?: boolean;
  highlightedLabel?: string;
  icon?: IconComponent;
  image?: string;
  features: Pricing3PlanFeature[];
  tagline?: string;
  bestFor?: string;
  planCode?: string;
}

interface Pricing3PlansProps {
  heading: string;
  plans: Pricing3PlansPlan[];
  className?: string;
}

interface Pricing44Props extends Pricing3PlansProps {}
type Props = Partial<Pricing44Props>;

export function pricing3PlanFeatureText(feature: Pricing3PlanFeature): string {
  return typeof feature === "string" ? feature : feature.text;
}
export function pricing3PlanFeatureIcon(
  feature: Pricing3PlanFeature,
): IconComponent | undefined {
  return typeof feature === "string" ? undefined : feature.icon;
}
const defaultProps: Pricing44Props = {
  heading: "Simple Pricing Plans",
  plans: [
    {
      icon: Rocket,
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/pricing-plans/plan1.svg",
      name: "Basic Plan",
      monthlyPrice: "$0",
      yearlyPrice: "$0",
      period: {
        monthly: "Per month",
        yearly: "Per year",
      },
      description: {
        monthly:
          "Ideal for individuals getting started. No credit card required.",
        yearly:
          "Ideal for individuals getting started. No credit card required.",
      },
      buttonText: "Start for Free",
      buttonUrl: "#",
      highlighted: false,
      planCode: "BASIC",
      tagline: "Great for solo developers",
      bestFor: "Freelancers just starting out",
      features: [
        { icon: Code, text: "Up to 5 components" },
        { icon: LayoutGrid, text: "Community support" },
        { icon: MonitorSmartphone, text: "Weekly updates" },
        { icon: FileText, text: "100MB storage" },
        { icon: GitBranch, text: "Basic analytics" },
      ],
    },
    {
      icon: Briefcase,
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/pricing-plans/plan2.svg",
      name: "Standard Plan",
      monthlyPrice: "$20",
      yearlyPrice: "$200",
      period: {
        monthly: "Per month",
        yearly: "Per year",
      },
      description: {
        monthly:
          "For growing teams that need more power. Start with a 30-day free trial.",
        yearly:
          "For growing teams that need more power. Save 16% compared to monthly.",
      },
      buttonText: "Get Started",
      buttonUrl: "#",
      highlighted: true,
      highlightedLabel: "Most popular",
      planCode: "STANDARD",
      tagline: "Best for growing teams",
      bestFor: "Small dev teams and startups",
      features: [
        { icon: Code, text: "Unlimited components" },
        { icon: Brush, text: "Priority support" },
        { icon: Settings2, text: "Daily updates" },
        { icon: CheckSquare, text: "10GB storage" },
        { icon: Zap, text: "Advanced analytics" },
      ],
    },
    {
      icon: Building,
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/pricing-plans/plan3.svg",
      name: "Premium Plan",
      monthlyPrice: "$80",
      yearlyPrice: "$800",
      period: {
        monthly: "Per month",
        yearly: "Per year",
      },
      description: {
        monthly:
          "For large organizations with advanced needs. Everything in Standard plus dedicated support.",
        yearly:
          "For large organizations with advanced needs. Save 16% compared to monthly.",
      },
      buttonText: "Buy Now",
      buttonUrl: "#",
      highlighted: false,
      planCode: "PREMIUM",
      tagline: "Collaborate and scale fast",
      bestFor: "Product teams with multiple projects",
      features: [
        { icon: Users, text: "Unlimited components" },
        { icon: GitPullRequest, text: "Dedicated support" },
        { icon: CalendarCheck2, text: "Real-time updates" },
        { icon: Bell, text: "Unlimited storage" },
        { icon: Database, text: "Custom integrations" },
      ],
    },
  ],
};

const PlanCard = ({
  plan,
  billingCycle,
}: {
  plan: Pricing3PlansPlan;
  billingCycle: string;
}) => (
  <Card
    className={cn(
      "rounded-xl border border-border bg-card text-card-foreground shadow-none ring-0",
      plan.highlighted && "bg-muted/35",
    )}
  >
    <CardHeader>
      <CardTitle className="text-lg font-medium">{plan.name}</CardTitle>
      <div className="mt-4">
        <div className="text-5xl font-semibold tracking-tight">
          {billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
        </div>
        <div className="text-xs text-muted-foreground">
          {billingCycle === "monthly"
            ? plan.period.monthly
            : plan.period.yearly}
        </div>
      </div>
    </CardHeader>

    <CardContent className="px-7 pt-6">
      <p className="line-clamp-2 text-sm text-muted-foreground">
        {billingCycle === "monthly"
          ? plan.description.monthly
          : plan.description.yearly}
      </p>

      <Button
        className="mt-6 w-full"
        variant={plan.highlighted ? "default" : "outline"}
      >
        {plan.buttonText}
      </Button>

      <div className="relative mt-12 mb-4 flex items-center justify-center overflow-hidden">
        <Separator />
        <span className="px-3 text-xs text-muted-foreground opacity-50">
          FEATURES
        </span>
        <Separator />
      </div>

      <ul className="mt-6 space-y-4">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3">
            <BadgeCheck className="size-5 shrink-0 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {pricing3PlanFeatureText(feature)}
            </span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const Pricing44 = (props: Props) => {
  const { heading, plans, className } = {
    ...defaultProps,
    ...props,
  };

  const [isYearly, setIsYearly] = useState(false);
  const billingCycle = isYearly ? "yearly" : "monthly";

  const highlightedIndex = plans.findIndex((p) => p.highlighted);
  const startIndex = highlightedIndex >= 0 ? highlightedIndex : 0;

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-5xl flex-col gap-8">
          <h2 className="text-center text-4xl font-medium tracking-tight text-balance lg:text-5xl">
            {heading}
          </h2>

          <div className="flex justify-center">
            <div className="flex items-center gap-4">
              <span
                className={cn(
                  "text-base font-medium",
                  !isYearly ? "text-foreground" : "text-muted-foreground",
                )}
              >
                Monthly
              </span>
              <span className="inline-flex origin-center scale-150">
                <Switch
                  checked={isYearly}
                  onCheckedChange={setIsYearly}
                  aria-label="Switch between monthly and yearly billing"
                />
              </span>
              <span
                className={cn(
                  "text-base font-medium",
                  isYearly ? "text-foreground" : "text-muted-foreground",
                )}
              >
                Yearly
              </span>
            </div>
          </div>

          <div className="relative sm:mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] lg:hidden">
            <Carousel
              opts={{
                align: "center",
                startIndex,
                loop: true,
              }}
            >
              <CarouselContent className="-ml-4">
                {plans.map((plan, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-full pl-4 sm:basis-[70%] md:basis-[55%]"
                  >
                    <PlanCard plan={plan} billingCycle={billingCycle} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-8 flex justify-center gap-2">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>

          <div className="hidden gap-4 lg:grid lg:grid-cols-3">
            {plans.map((plan, index) => (
              <PlanCard key={index} plan={plan} billingCycle={billingCycle} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing44 };
