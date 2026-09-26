import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Pricing17Props {
  className?: string;
}

interface Feature {
  name: string;
  standard: boolean;
  premium: boolean;
}

const features: Feature[] = [
  { name: "Project listing on platform", standard: true, premium: true },
  { name: "AI powered matching", standard: true, premium: true },
  {
    name: "Interviews with pre-vetted candidates",
    standard: true,
    premium: true,
  },
  {
    name: "Dedicated Customer Success Manager",
    standard: true,
    premium: true,
  },
  { name: "External recruitment services", standard: false, premium: true },
];

const plans = [
  {
    name: "Standard",
    highlighted: true,
    duration: "3 months",
    numberOfListings: "10",
    pricing: "$99",
  },
  {
    name: "Premium",
    highlighted: false,
    duration: "Unlimited",
    numberOfListings: "50",
    pricing: "$149",
  },
];

const planDetails = [
  { label: "Duration", key: "duration" as const },
  { label: "Number of listing", key: "numberOfListings" as const },
  { label: "Pricing", key: "pricing" as const, isPricing: true },
];

const Pricing17 = ({ className }: Pricing17Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-3xl font-bold text-pretty sm:mb-10 sm:text-4xl lg:mb-12 lg:text-5xl">
            Choose Your Plan
          </h2>
          <div className="space-y-6 lg:hidden">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  "rounded-lg border p-5",
                  plan.highlighted &&
                    "border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950/20",
                )}
              >
                <div
                  className={cn(
                    "border-b pb-4",
                    plan.highlighted && "bg-green-50 dark:bg-transparent",
                  )}
                >
                  <h3 className="text-center text-xl font-semibold">
                    {plan.name}
                  </h3>
                </div>
                <div className="pt-6">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      {features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between gap-2"
                        >
                          <span className="text-sm">{feature.name}</span>
                          {feature.standard ? (
                            <span className="flex size-5 items-center justify-center rounded-full bg-emerald-700">
                              <Check
                                className="size-3.5 text-white"
                                strokeWidth={3}
                              />
                            </span>
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3 border-t pt-4">
                      {planDetails.map(({ label, key, isPricing }) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-sm font-medium">{label}</span>
                          <span className="text-sm">
                            {isPricing ? (
                              <>
                                <span className="text-base">
                                  {plan.pricing}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  /mo
                                </span>
                              </>
                            ) : (
                              plan[key]
                            )}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full">Get started</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden overflow-hidden rounded-lg lg:block">
            <table className="w-full table-fixed border-collapse overflow-hidden">
              <thead>
                <tr className="h-16">
                  <th className="w-1/2 px-6 text-left text-sm font-semibold dark:bg-background">
                    <span className="sr-only">Features</span>
                  </th>
                  <th className="w-1/4 bg-green-100 px-6 text-center text-lg font-semibold dark:bg-green-950/40">
                    {plans[0].name}
                  </th>
                  <th className="w-1/4 bg-muted px-6 text-center text-lg font-semibold">
                    {plans[1].name}
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className="h-16 border-b">
                    <td className="px-6 text-sm">{feature.name}</td>
                    <td className="bg-green-50 text-center dark:bg-green-950/20">
                      {feature.standard ? (
                        <span className="mx-auto flex size-5 items-center justify-center rounded-full bg-emerald-700">
                          <Check
                            className="size-3.5 text-white"
                            strokeWidth={3}
                          />
                        </span>
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </td>
                    <td className="bg-muted/40 px-6 py-4 text-center">
                      {feature.premium ? (
                        <span className="mx-auto flex size-5 items-center justify-center rounded-full bg-emerald-700">
                          <Check
                            className="size-3.5 text-white"
                            strokeWidth={3}
                          />
                        </span>
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </td>
                  </tr>
                ))}
                {planDetails.map(({ label, key, isPricing }) => (
                  <tr key={key} className="h-16 border-b text-sm font-medium">
                    <td className="px-6">{label}</td>
                    <td className="h-16 bg-green-50 text-center text-sm dark:bg-green-950/20">
                      {isPricing ? (
                        <>
                          <span className="text-lg">{plans[0].pricing}</span>
                          <span className="text-xs text-muted-foreground">
                            /mo
                          </span>
                        </>
                      ) : (
                        plans[0][key]
                      )}
                    </td>
                    <td className="bg-muted/40 px-6 text-center text-sm">
                      {isPricing ? (
                        <>
                          <span className="text-lg">{plans[1].pricing}</span>
                          <span className="text-xs text-muted-foreground">
                            /mo
                          </span>
                        </>
                      ) : (
                        plans[1][key]
                      )}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="px-6"></td>
                  <td className="bg-green-50 px-6 py-4 dark:bg-green-950/20">
                    <Button className="w-full">Get started</Button>
                  </td>
                  <td className="bg-muted/40 px-6 py-4">
                    <Button variant="outline" className="w-full">
                      Get started
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 space-y-4 sm:mt-10 lg:mt-12">
            <h3 className="text-xl font-semibold sm:text-2xl">
              Pricing Transparency
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground sm:text-base">
              <p>
                Our pricing is fully transparent to all our clients and
                partners.
              </p>
              <p>
                We believe in fair and straightforward pricing that helps you
                maximize your budget while eliminating hidden fees and
                unnecessary costs.
              </p>
              <p>
                You have full control over your budget - set your preferred
                range and we'll match you with the best options that fit your
                needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing17 };
