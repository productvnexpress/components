"use client";

import {
  BadgeCheck,
  Bell,
  Briefcase,
  Brush,
  Building,
  CalendarCheck2,
  Check,
  CheckSquare,
  Code,
  Database,
  FileText,
  GitBranch,
  GitPullRequest,
  LayoutGrid,
  Minus,
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
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

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

interface Pricing45Props extends Pricing3PlansProps {
  featureTable: FeatureCategory[];
}
type Props = Partial<Pricing45Props>;

export function pricing3PlanFeatureText(feature: Pricing3PlanFeature): string {
  return typeof feature === "string" ? feature : feature.text;
}
export function pricing3PlanFeatureIcon(
  feature: Pricing3PlanFeature,
): IconComponent | undefined {
  return typeof feature === "string" ? undefined : feature.icon;
}
const defaultProps: Pricing45Props = {
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
  featureTable: defaultFeatureTable,
};

interface FeatureRow {
  name: string;
  values: (string | boolean)[];
}

interface FeatureCategory {
  category: string;
  features: FeatureRow[];
}

const defaultFeatureTable: FeatureCategory[] = [
  {
    category: "Core",
    features: [
      { name: "Components", values: ["Up to 5", "Unlimited", "Unlimited"] },
      { name: "Storage", values: ["100MB", "10GB", "Unlimited"] },
      { name: "Team members", values: ["1", "Up to 10", "Unlimited"] },
      { name: "Projects", values: ["2", "20", "Unlimited"] },
    ],
  },
  {
    category: "Support",
    features: [
      { name: "Community support", values: [true, true, true] },
      { name: "Priority support", values: [false, true, true] },
      { name: "Dedicated account manager", values: [false, false, true] },
      { name: "SLA guarantee", values: [false, false, true] },
    ],
  },
  {
    category: "Advanced",
    features: [
      { name: "Analytics", values: ["Basic", "Advanced", "Custom"] },
      { name: "API access", values: [false, true, true] },
      { name: "Custom integrations", values: [false, false, true] },
      { name: "SSO / SAML", values: [false, false, true] },
      { name: "Audit logs", values: [false, true, true] },
    ],
  },
];

const PlanCard = ({
  plan,
  billingCycle,
}: {
  plan: Pricing3PlansPlan;
  billingCycle: string;
}) => (
  <Card
    className={cn(
      "rounded-xl border border-border bg-card text-card-foreground shadow-sm ring-0",
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
      <p className="text-sm text-muted-foreground">
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

const FeatureCell = ({ value }: { value: string | boolean }) => {
  if (value === true) {
    return <Check className="mx-auto size-5 text-primary" />;
  }
  if (value === false) {
    return <Minus className="mx-auto size-4 text-muted-foreground/40" />;
  }
  return <span className="text-sm text-muted-foreground">{value}</span>;
};

const Pricing45 = (props: Props) => {
  const { heading, plans, featureTable, className } = {
    ...defaultProps,
    ...props,
  };

  const [billingCycle, setBillingCycle] = useState("monthly");

  const highlightedIndex = plans.findIndex((p) => p.highlighted);
  const startIndex = highlightedIndex >= 0 ? highlightedIndex : 0;

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <h2 className="mb-4 text-center text-4xl font-semibold tracking-tight text-balance lg:mb-8 lg:text-5xl">
          {heading}
        </h2>

        <div className="mb-6 flex justify-center lg:mb-12">
          <ToggleGroup
            type="single"
            value={billingCycle}
            onValueChange={(value: string) => {
              if (value && value !== billingCycle) {
                setBillingCycle(value);
              }
            }}
            className="rounded-lg bg-muted p-1"
          >
            <ToggleGroupItem
              value="monthly"
              className="h-8 w-32 rounded-md data-[state=on]:bg-background"
            >
              Monthly
            </ToggleGroupItem>
            <ToggleGroupItem
              value="yearly"
              className="h-8 w-32 rounded-md data-[state=on]:bg-background"
            >
              Yearly
            </ToggleGroupItem>
          </ToggleGroup>
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

        <div className="hidden gap-10 lg:grid lg:grid-cols-3 lg:gap-6">
          {plans.map((plan, index) => (
            <PlanCard key={index} plan={plan} billingCycle={billingCycle} />
          ))}
        </div>

        {/* Feature comparison table */}
        <div className="mt-16 lg:mt-24">
          <h3 className="mb-8 text-center text-2xl font-semibold lg:text-3xl">
            Compare plans
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 pr-4 text-sm font-medium text-muted-foreground">
                    Feature
                  </th>
                  {plans.map((plan) => (
                    <th
                      key={plan.name}
                      className={cn(
                        "py-4 text-center text-sm font-medium",
                        plan.highlighted
                          ? "text-foreground"
                          : "text-muted-foreground",
                      )}
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureTable.map((group) => (
                  <>
                    <tr key={group.category}>
                      <td
                        colSpan={plans.length + 1}
                        className="pt-8 pb-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase"
                      >
                        {group.category}
                      </td>
                    </tr>
                    {group.features.map((feature) => (
                      <tr
                        key={feature.name}
                        className="border-b border-border/50"
                      >
                        <td className="py-3.5 pr-4 text-sm">{feature.name}</td>
                        {feature.values.map((value, i) => (
                          <td key={i} className="py-3.5 text-center">
                            <FeatureCell value={value} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing45 };
