"use client";

import NumberFlow from "@number-flow/react";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Stats22Props {
  className?: string;
}

const RULER_TICKS = 28;

const RulerTicks = () => (
  <div className="w-full" aria-hidden>
    <div className="flex h-5 w-full items-end justify-between">
      {Array.from({ length: RULER_TICKS }, (_, i) => (
        <div
          key={i}
          className={cn(
            "w-px shrink-0 bg-border",
            i % 5 === 0 ? "h-5" : "h-2",
            i % 10 === 0 && "bg-foreground/25",
          )}
        />
      ))}
    </div>
    <div className="mt-0.5 h-px w-full bg-border" />
    <div className="mt-1 flex h-3 w-full items-start justify-between opacity-60">
      {Array.from({ length: RULER_TICKS }, (_, i) => (
        <div
          key={i}
          className={cn(
            "w-px shrink-0 bg-border",
            i % 5 === 0 ? "h-3" : "h-1.5",
          )}
        />
      ))}
    </div>
  </div>
);

const Stats22 = ({ className }: Stats22Props) => {
  const [selectedYear, setSelectedYear] = useState(2021);

  const Stats = {
    2021: {
      TotalUsers: 0.3,
      CompanyGrowth: 300,
      NewCustomers: 100,
      BigCorpClients: 10,
    },
    2022: {
      TotalUsers: 50,
      CompanyGrowth: 30,
      NewCustomers: 1.5,
      BigCorpClients: 75,
    },
    2023: {
      TotalUsers: 120,
      CompanyGrowth: 45,
      NewCustomers: 2.8,
      BigCorpClients: 150,
    },
    2024: {
      TotalUsers: 300,
      CompanyGrowth: 65,
      NewCustomers: 4.2,
      BigCorpClients: 250,
    },
  };

  const years = Object.keys(Stats).map(Number);

  return (
    <section className={cn("py-32", className)}>
      <div className="container flex flex-col">
        <div className="max-w-xl">
          <h2 className="font-cal max-w-xl text-5xl font-medium tracking-tighter md:text-6xl">
            Numbers don&apos;t Lie
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground/80">
            Compare performance across fiscal years in one glance. Slide the
            timeline to animate revenue, adoption, growth, customers, and
            enterprise traction.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild>
              <a href="#">
                Get Started
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button variant="secondary" asChild>
              <a href="#">Documentation</a>
            </Button>
          </div>
        </div>

        <div>
          <div className="relative">
            <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between md:gap-12">
              <div className="max-w-3xl min-w-0 flex-1">
                <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4">
                  <div className="w-full text-left">
                    <p className="text-4xl font-medium lg:text-5xl">
                      <NumberFlow
                        value={
                          Stats[selectedYear as keyof typeof Stats].TotalUsers
                        }
                        suffix="k+"
                      />
                    </p>
                    <p className="text-sm whitespace-pre text-muted-foreground/70">
                      {" "}
                      Team Members{" "}
                    </p>
                  </div>
                  <div className="w-full text-left">
                    <p className="text-4xl font-medium lg:text-5xl">
                      <NumberFlow
                        value={
                          Stats[selectedYear as keyof typeof Stats]
                            .CompanyGrowth
                        }
                        suffix="%"
                      />
                    </p>
                    <p className="text-sm whitespace-pre text-muted-foreground/70">
                      {" "}
                      Company Growth{" "}
                    </p>
                  </div>
                  <div className="w-full text-left">
                    <p className="text-4xl font-medium lg:text-5xl">
                      <NumberFlow
                        value={
                          Stats[selectedYear as keyof typeof Stats].NewCustomers
                        }
                        suffix="M"
                      />
                    </p>
                    <p className="text-sm whitespace-pre text-muted-foreground/70">
                      {" "}
                      New Customers{" "}
                    </p>
                  </div>
                  <div className="w-full text-left">
                    <p className="text-4xl font-medium lg:text-5xl">
                      <NumberFlow
                        value={
                          Stats[selectedYear as keyof typeof Stats]
                            .BigCorpClients
                        }
                        prefix="~"
                        suffix="+"
                      />
                    </p>
                    <p className="text-sm whitespace-pre text-muted-foreground/70">
                      {" "}
                      Revenue{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 flex w-full flex-col items-center gap-2 md:w-auto md:items-end">
                {years.map((year) => (
                  <div key={year} className="group">
                    <button
                      type="button"
                      onClick={() => setSelectedYear(year)}
                      className={cn(
                        "relative rounded-full px-4 py-1 text-sm whitespace-nowrap transition duration-300 ease-out motion-reduce:transition-none",
                        selectedYear === year
                          ? "bg-primary text-primary-foreground opacity-100 md:-translate-x-8"
                          : "bg-muted/80 text-foreground opacity-90 shadow-sm hover:bg-muted hover:opacity-100 md:group-hover:-translate-x-4",
                      )}
                    >
                      {year} - {year + 1}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="pointer-events-none mt-8 md:mt-10">
              <RulerTicks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Stats22 };
