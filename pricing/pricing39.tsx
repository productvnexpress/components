"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface PricingFeature {
  text: string;
  hasTag?: boolean;
  tagText?: string;
}

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string[];
  priceDescription?: string[];
  buttonText: string;
  buttonVariant: "default" | "outline" | "secondary";
  features: PricingFeature[];
  planTag?: string;
  isCustom?: boolean;
}

interface Pricing39Props {
  heading: string;
  description: string;
  tooltipText: string;
  tooltipDescription: string;
  defaultSliderValue?: number;
  sliderLabels: string[];
  plans: PricingPlan[];
  className?: string;
}

const Pricing39 = ({
  heading = "Scale your AI infrastructure",
  description = "Select your monthly",
  tooltipDescription = "AI model inference calls",
  tooltipText = "Select your monthly AI model inference calls",
  defaultSliderValue = 2,
  sliderLabels = ["5K", "25K", "100K", "500K", "2M+"],
  plans = [
    {
      id: "hobbyist",
      name: "Hobbyist",
      description: "Perfect for personal projects and experimentation.",
      price: ["$19", "$49", "$89", "$199", "$399"],
      priceDescription: [
        "up to 5,000 inference calls per month",
        "up to 25,000 inference calls per month",
        "up to 100,000 inference calls per month",
        "up to 500,000 inference calls per month",
        "up to 2,000,000 inference calls per month",
      ],
      buttonText: "Start Building",
      buttonVariant: "default",
      features: [
        { text: "14-day free trial" },
        { text: "Access to 50+ pre-trained models" },
        { text: "Community support" },
        { text: "Basic model fine-tuning" },
        { text: "99.0% uptime guarantee", hasTag: true, tagText: "Free!" },
        { text: "Standard response times" },
      ],
    },
    {
      id: "developer",
      name: "Developer",
      description: "Built for developers and small teams.",
      price: ["$49", "$129", "$249", "$499", "$999"],
      priceDescription: [
        "then $0.02 per additional call",
        "then $0.015 per additional call",
        "then $0.01 per additional call",
        "then $0.008 per additional call",
        "then $0.005 per additional call",
      ],
      buttonText: "Try Free",
      buttonVariant: "outline",
      features: [
        { text: "Everything in Hobbyist" },
        { text: "Access to 200+ premium models" },
        { text: "Priority support & documentation" },
        { text: "Advanced model fine-tuning" },
        { text: "API rate limiting controls" },
        { text: "99.5% uptime guarantee", hasTag: true, tagText: "Free!" },
        { text: "Faster response times" },
      ],
    },
    {
      id: "business",
      name: "Business",
      description: "Enterprise-grade AI infrastructure.",
      planTag: "New!",
      price: ["Custom"],
      priceDescription: ["Unlimited calls with volume discounts"],
      buttonText: "Schedule Demo",
      buttonVariant: "outline",
      features: [
        { text: "Everything in Developer" },
        { text: "Unlimited model access" },
        { text: "Dedicated infrastructure" },
        { text: "Custom model training" },
        { text: "SLA with guaranteed response times" },
        { text: "24/7 technical support" },
        { text: "Advanced security & compliance" },
        { text: "White-label solutions" },
      ],
      isCustom: true,
    },
  ],
  className,
}: Pricing39Props) => {
  const [sliderValue, setSliderValue] = useState([defaultSliderValue]);

  return (
    <section className={cn("py-32", className)}>
      <div className="grid grid-cols-14 items-center">
        {/* Header Section */}
        <div className="col-span-12 col-start-2 col-end-14 container mx-auto flex flex-col items-center gap-6 border border-b-0 border-dashed border-border py-8">
          <h2 className="text-4xl font-bold text-pretty lg:text-6xl">
            {heading}
          </h2>
          <p className="text-lg">
            {description}{" "}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="underline">
                  {tooltipDescription}
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tooltipText}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </p>

          {/* Slider Section */}
          <div className="w-full max-w-md">
            <Slider
              value={sliderValue}
              onValueChange={setSliderValue}
              max={4}
              min={0}
              step={1}
              className="w-full"
            />
            <div className="mt-2 flex justify-between">
              {sliderLabels.map((label, index) => (
                <span
                  key={index}
                  className={`text-sm font-medium ${
                    index === sliderValue[0]
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="col-span-12 col-start-2 col-end-14 container mx-auto grid grid-cols-12 border border-dashed border-border">
          <div className="col-start-1 col-end-13 grid grid-cols-1 border border-y-0 border-dashed border-border md:col-start-2 md:col-end-12 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className="h-full border-dashed border-none border-border p-2 lg:[&:nth-child(2)]:border-r lg:[&:nth-child(2)]:border-l"
              >
                <Card
                  className={`relative flex h-full flex-col shadow-none ${index % 2 === 0 ? "bg-muted" : ""}`}
                >
                  <CardHeader className="text-left">
                    <CardTitle className="relative text-2xl font-bold">
                      <div className="flex items-center gap-2">
                        <p>{plan.name}</p>
                        {plan.planTag && (
                          <div className="rounded bg-gradient-to-r from-primary/5 to-primary/20 px-2 py-0.5 text-xs font-medium text-primary">
                            {plan.planTag}
                          </div>
                        )}
                      </div>
                    </CardTitle>
                    <p className="text-xs text-muted-foreground">
                      {plan.description}
                    </p>

                    <div className="">
                      <div className="flex text-left">
                        <span className="text-xl font-bold">
                          {plan.price[sliderValue[0]] ?? plan.price[0]}
                        </span>
                        <span className="ml-1 text-lg text-muted-foreground">
                          /month
                        </span>
                      </div>
                      {plan.priceDescription && (
                        <p className="mt-1 text-sm text-muted-foreground">
                          {plan.priceDescription[sliderValue[0]] ??
                            plan.priceDescription[0]}
                        </p>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 text-left">
                    <Button
                      className={`w-fit ${
                        plan.buttonVariant === "default"
                          ? "bg-primary text-primary-foreground"
                          : plan.buttonVariant === "outline"
                            ? plan.isCustom
                              ? "border-border text-primary"
                              : "border-border text-muted-foreground hover:bg-muted"
                            : ""
                      }`}
                      variant={plan.buttonVariant}
                    >
                      {plan.buttonText}
                    </Button>

                    <div className="mt-6">
                      <h4 className="mb-4 text-xs text-muted-foreground">
                        {plan.isCustom ? "Customize your plan:" : "Includes:"}
                      </h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature, index) => (
                          <li
                            key={index}
                            className="relative flex items-start gap-3"
                          >
                            <Check className="mt-0.5 size-4 flex-shrink-0 text-primary" />
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-muted-foreground">
                                {feature.text}
                              </span>
                              {feature.hasTag && (
                                <span className="absolute -right-2 rounded bg-gradient-to-r from-primary/5 to-primary/20 px-2 py-0.5 text-xs font-medium text-primary">
                                  {feature.tagText}
                                </span>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 col-start-2 col-end-14 container grid grid-cols-12 border border-t-0 border-dashed border-border">
          <div className="col-start-1 col-end-13 grid border border-y-0 border-dashed border-border md:col-start-2 md:col-end-12">
            <div className="border-dashed border-border p-4">
              <a href="#" className="flex items-center gap-2 text-primary">
                View all plans <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing39 };
