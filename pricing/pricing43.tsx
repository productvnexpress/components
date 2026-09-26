"use client";

import {
  Bell,
  Briefcase,
  Brush,
  Building,
  CalendarCheck2,
  Check,
  CheckSquare,
  Clock,
  Code,
  Crown,
  Database,
  FileText,
  GitBranch,
  GitPullRequest,
  Headphones,
  LayoutGrid,
  LineChart,
  Lock,
  MonitorSmartphone,
  Rocket,
  Settings2,
  Shield,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { cn } from "@/lib/utils";

type IconComponent = ElementType<{ className?: string }>;
type Pricing3PlanFeature = | string
  | {
      text: string;
      icon?: IconComponent;
    };
type Pricing4PlansPlan = Pricing3PlansPlan;
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

interface Pricing4PlansProps {
  plans: Pricing4PlansPlan[];
}

interface Pricing43Plan extends Pricing4PlansPlan {
  compareAtMonthly?: string;
  compareAtYearly?: string;
  plusLine?: string;
  accent?: boolean;
}
interface Pricing43Props extends Omit<Pricing4PlansProps, "plans"> {
  plans: Pricing43Plan[];
}
type Props = Partial<Pricing43Props>;

export function pricing3PlanFeatureText(feature: Pricing3PlanFeature): string {
  return typeof feature === "string" ? feature : feature.text;
}
export function pricing3PlanFeatureIcon(
  feature: Pricing3PlanFeature,
): IconComponent | undefined {
  return typeof feature === "string" ? undefined : feature.icon;
}
const defaultProps: Pricing43Props = {
  heading: "Simple Pricing Plans",
  description:
    "Choose the plan that fits your needs. Start free and scale as you grow.",
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
    {
      icon: Shield,
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/pricing-plans/plan4.svg",
      name: "Enterprise",
      monthlyPrice: "$199",
      yearlyPrice: "$1,990",
      period: {
        monthly: "Per month",
        yearly: "Per year",
      },
      description: {
        monthly:
          "For organizations that need governance, security reviews, and hands-on rollout support.",
        yearly:
          "For organizations that need governance and dedicated support. Save compared to monthly.",
      },
      buttonText: "Contact sales",
      buttonUrl: "#",
      highlighted: false,
      planCode: "ENT",
      tagline: "Security and scale",
      bestFor: "Compliance-heavy teams",
      features: [
        { icon: Shield, text: "SSO and audit logs" },
        { icon: Lock, text: "Data residency options" },
        { icon: Headphones, text: "Dedicated success manager" },
        { icon: LineChart, text: "Custom reporting and SLAs" },
        { icon: Workflow, text: "Workflow automation at scale" },
        { icon: Crown, text: "Executive business reviews" },
        { icon: Sparkles, text: "Early access to beta features" },
      ],
    },
  ],
};

type BillingPeriod = "monthly" | "yearly";

function useCountdown(targetMs: number) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return useMemo(() => {
    const remaining = Math.max(0, targetMs - now);
    const totalSeconds = Math.floor(remaining / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const pad = (n: number) => n.toString().padStart(2, "0");
    return `${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
  }, [now, targetMs]);
}

const Pricing43 = (props: Props) => {
  const { heading, description, plans, className } = {
    ...defaultProps,
    ...props,
  };

  const [billing, setBilling] = useState<BillingPeriod>("monthly");
  const offerEndsAt = useMemo(
    () => Date.now() + (6 * 60 * 60 + 37 * 60 + 8) * 1000,
    [],
  );
  const countdown = useCountdown(offerEndsAt);

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <h1 className="text-3xl font-bold tracking-tight text-balance text-foreground md:text-4xl lg:text-5xl">
            {heading}
          </h1>
          {description && (
            <p className="mt-4 text-pretty text-muted-foreground md:text-lg">
              {description}
            </p>
          )}
        </div>

        <div className="mb-12 flex justify-center lg:mb-20">
          <Tabs
            value={billing}
            onValueChange={(v) => setBilling(v as BillingPeriod)}
            className="w-full max-w-md"
          >
            <TabsList className="w-full">
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="yearly">
                <span className="inline-flex flex-wrap items-center justify-center gap-1">
                  Yearly
                  <span className="font-semibold text-foreground">
                    Save 10%
                  </span>
                </span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 xl:items-stretch">
          {plans.map((plan) => {
            const price =
              billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
            const compareAt =
              billing === "monthly"
                ? plan.compareAtMonthly
                : plan.compareAtYearly;
            return (
              <div key={plan.name}>
                <div
                  className={cn(
                    "relative flex h-full flex-col gap-0 rounded-lg py-0 shadow-none",
                    plan.highlighted
                      ? "mt-10 rounded-t-none border-2 border-t-0 border-primary md:mt-0"
                      : "border border-border",
                  )}
                >
                  {plan.highlighted ? (
                    <div className="absolute top-0 -right-0.5 -left-0.5 flex -translate-y-full items-center justify-center gap-2 rounded-t-lg border-2 border-b border-primary bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                      <Clock className="size-4 shrink-0" aria-hidden />
                      <span className="tabular-nums">
                        Limited time: {countdown} left
                      </span>
                    </div>
                  ) : null}
                  <div className="gap-3 border-b border-border px-6 pt-6 pb-4">
                    <p
                      className={cn(
                        "text-sm font-semibold tracking-tight",
                        plan.accent && "text-primary",
                      )}
                    >
                      {plan.name}
                    </p>
                    <div className="mt-5 flex flex-wrap items-end gap-2">
                      <span className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                        {price}
                      </span>
                      {compareAt ? (
                        <span className="mb-1 text-lg text-muted-foreground line-through">
                          {compareAt}
                        </span>
                      ) : null}
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {billing === "monthly"
                        ? plan.period.monthly
                        : plan.period.yearly}
                    </p>
                  </div>

                  <div className="flex flex-1 flex-col gap-4 px-6 pt-6">
                    {plan.plusLine ? (
                      <p className="text-sm font-medium text-foreground">
                        {plan.plusLine}
                      </p>
                    ) : null}
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex gap-2">
                          <Check
                            className="mt-0.5 size-4 shrink-0 text-primary"
                            aria-hidden
                          />
                          <span className="leading-snug">
                            {pricing3PlanFeatureText(feature)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto px-6 pb-6">
                    <Button
                      variant={plan.highlighted ? "default" : "secondary"}
                      asChild
                      className="mt-4 w-full"
                    >
                      <a href={plan.buttonUrl ?? "#"}>{plan.buttonText}</a>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Pricing43 };
