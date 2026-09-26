import React from "react";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const awards = [
  {
    title: "KeyTech Expo",
    description: "Product of the Year - Flagship Mechanical Model",
    year: "2025",
  },
  {
    title: "Red Dot Design",
    description: "Best Ergonomics - Premium Series",
    year: "2025",
  },
  {
    title: "Gadget Awards",
    description: "Top Innovation - SilentSwitch Technology",
    year: "2024",
  },
  {
    title: "European Hardware Awards",
    description: "Gold - Mechanical Keyboard Design",
    year: "2024",
  },
  {
    title: "Keyboard of the Year",
    description: "Community Choice - Flagship Model",
    year: "2024",
  },
];

interface Awards7Props {
  className?: string;
}

const Awards7 = ({ className }: Awards7Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-2">
          <div className="flex flex-col justify-between gap-20">
            <div className="flex flex-col gap-10 md:gap-14">
              <div className="flex flex-col gap-2">
                <p className="text-lg font-medium text-muted-foreground md:text-xl">
                  Accolades
                </p>
                <h1 className="text-4xl font-medium tracking-tight md:text-5xl">
                  Excellence in Typing
                </h1>
              </div>
              <p className="text-2xl font-medium tracking-tight text-muted-foreground md:text-3xl">
                Our keyboards redefine performance and comfort, earning praise
                from users and industry experts alike. Here’s a look at our
                journey of innovation and recognition.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between text-sm font-medium text-muted-foreground">
                <p>Award</p>
                <p>Year</p>
              </div>
              <Separator />
              {awards.map((award, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-xl font-medium">{award.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {award.description}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {award.year}
                    </p>
                  </div>
                  <Separator />
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="flex flex-col bg-muted dark:bg-card">
            <div className="relative h-fit">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/peppy-toad-G3nIIvVqhJQ-unsplash.jpg"
                alt="keyboard product"
                className="aspect-video w-full object-cover brightness-50"
              />
              <p className="absolute inset-0 m-auto flex items-center justify-center text-center text-3xl font-medium tracking-tight text-white md:text-4xl">
                Mechanical Keyboard
              </p>
            </div>
            <div className="px-8 pt-14 pb-8">
              <p className="mb-5 text-3xl font-semibold tracking-tight">
                Best Mechanical Keyboard 2025
              </p>
              <p className="text-muted-foreground">
                This launch set new standards for typing comfort and speed,
                impressing reviewers and enthusiasts worldwide.
              </p>
              <div className="mt-8 flex flex-col gap-6">
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1.5">
                    <p className="text-xl font-medium tracking-tight">
                      Typist Satisfaction
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Positive feedback from daily users
                    </p>
                  </div>
                  <p className="text-5xl font-medium md:text-7xl">92%</p>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1.5">
                    <p className="text-xl font-medium tracking-tight">
                      Online Reach
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Social impressions in first month
                    </p>
                  </div>
                  <p className="text-5xl font-medium md:text-7xl">1.5M</p>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1.5">
                    <p className="text-xl font-medium tracking-tight">
                      Market Growth
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Increase in market share
                    </p>
                  </div>
                  <p className="text-5xl font-medium md:text-7xl">120%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Awards7 };
