import React from "react";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const awards = [
  {
    title: "Launched mobile app",
    nomination: "Product Release Milestone",
    year: "2025",
  },
  {
    title: "Reached 1M users",
    nomination: "Growth Achievement",
    year: "2024",
  },
  {
    title: "Opened new office",
    nomination: "Expansion Milestone",
    year: "2024",
  },
  {
    title: "Completed Series B",
    nomination: "Funding Success",
    year: "2020",
  },
];

interface Awards6Props {
  className?: string;
}

const Awards6 = ({ className }: Awards6Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="grid-cols-4 items-start gap-4 lg:grid">
          <div className="flex items-center gap-1"></div>
          <h1 className="col-span-3 font-semibold tracking-tight">
            <span className="text-7xl md:text-8xl lg:text-9xl">Milestones</span>
            <br />
            <span className="text-xl md:text-2xl lg:text-3xl">
              & Achievements.
            </span>
          </h1>
        </div>
        <div className="mt-16 flex flex-col gap-6 md:mt-20">
          <div className="grid grid-cols-3 gap-2 text-sm text-muted-foreground lg:grid-cols-4">
            <div className="hidden lg:block" />
            <p className="lg:col-span-2">Milestone</p>
            <div className="col-span-2 flex items-center justify-between gap-4 lg:col-span-1">
              <p>Type</p>
              <p>Year</p>
            </div>
          </div>
          <Separator />
          {awards.map((award, index) => (
            <React.Fragment key={index}>
              <div className="grid grid-cols-3 gap-2 lg:grid-cols-4">
                <span className="hidden font-mono text-xs text-muted-foreground lg:block">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-medium lg:col-span-2 lg:text-lg">
                  {award.title}
                </p>
                <div className="col-span-2 flex items-center justify-between gap-4 lg:col-span-1">
                  <p className="font-medium text-muted-foreground">
                    {award.nomination}
                  </p>
                  <p>{award.year}</p>
                </div>
              </div>
              <Separator />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Awards6 };
