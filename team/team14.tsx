"use client";

import { CornerDownLeft } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    designation: "CEO & Founder",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img14.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "Design Director",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img4.png",
  },
  {
    id: 3,
    name: "Mike Johnson",
    designation: "Lead Developer",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img12.png",
  },
];

interface Team14Props {
  className?: string;
}

const Team14 = ({ className }: Team14Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="relative w-full">
          <div className="mt-12 flex flex-col items-end justify-between gap-4 lg:flex-row lg:gap-12">
            <div
              className={cn(
                "flex h-112 flex-col justify-between border p-10 lg:h-152 lg:w-1/3",
              )}
            >
              <div className="space-y-4">
                <h1 className="font-calSans text-5xl font-medium tracking-tight lg:text-6xl">
                  Belong. Grow. Succeed. Together
                </h1>
                <p className="text-muted-foreground/70">
                  If you're ready to shape the future with us, your journey
                  could start here.
                </p>
              </div>
              <Button
                variant="ghost"
                className="flex items-center justify-start gap-2"
              >
                <CornerDownLeft className="text-orange-500" />
                Let's talk
              </Button>
            </div>

            {/* Mobile Carousel */}
            <div className="block w-full lg:hidden">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {teamMembers.map((member) => (
                    <CarouselItem key={member.id}>
                      <div className="w-full">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="pointer-events-none h-90 w-full object-cover object-top"
                        />
                        <div className="pt-4 pb-1">
                          <p className="text-2xl font-medium tracking-tight text-foreground">
                            {member.name}
                          </p>
                          <p className="text-sm text-foreground/50">
                            {member.designation}
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>

            {/* Desktop Grid Layout */}
            <div className="hidden w-full gap-4 lg:flex">
              {teamMembers.map((member) => (
                <div key={member.id} className={cn("w-1/2")}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="pointer-events-none h-80 w-full object-cover object-top"
                  />
                  <div className="pt-4 pb-1">
                    <p className="font-medium tracking-tight text-foreground lg:text-2xl lg:text-lg">
                      {member.name}
                    </p>
                    <p className="text-sm text-foreground/50">
                      {member.designation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Team14 };
