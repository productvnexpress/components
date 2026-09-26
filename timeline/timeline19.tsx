"use client";

import { motion } from "framer-motion";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface Timeline19Props {
  className?: string;
}

const Timeline19 = ({ className }: Timeline19Props) => {
  const currentPhase = 2;

  const timelinePhases = [
    {
      id: 0,
      date: "January 15, 2024",
      title: "Phase I",
      description:
        "Initial data collection and model architecture design for the AI system.",
    },
    {
      id: 1,
      date: "March 30, 2024",
      title: "Phase II",
      description:
        "Model training and validation with core dataset implementation.",
    },
    {
      id: 2,
      date: "June 15, 2024",
      title: "Phase III",
      description:
        "Integration of advanced features and performance optimization.",
    },
    {
      id: 3,
      date: "September 1, 2024",
      title: "Phase IV",
      description:
        "Final testing, deployment, and continuous improvement system launch.",
    },
  ];

  return (
    <section className={cn("bg-background py-32", className)}>
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 text-2xl font-bold tracking-tighter text-foreground sm:text-4xl">
            Timeline
          </h1>
          <div className="relative w-full">
            <Separator
              orientation="vertical"
              className="absolute top-2.5 bottom-2.5 left-0"
            />
            <motion.div
              initial={{ height: 0 }}
              whileInView={{
                height: `${(currentPhase / timelinePhases.length) * 100}%`,
              }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              className="absolute top-2.5 left-0 z-10 w-0.5 origin-top bg-foreground"
              style={{ maxHeight: "calc(100% - 1.25rem)" }}
            />
            <div className="flex flex-col gap-10">
              {timelinePhases.map((phase) => (
                <div key={phase.id} className="relative pl-7">
                  <div className="absolute top-0 -left-[9px] z-10 flex size-5 items-center justify-center rounded-full bg-foreground p-1">
                    <div className="size-full rounded-full bg-background" />
                  </div>
                  <p className="text-sm text-muted-foreground">{phase.date}</p>
                  <h2 className="text-xl font-bold tracking-tighter text-foreground">
                    {phase.title}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Timeline19 };
