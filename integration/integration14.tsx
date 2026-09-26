"use client";

import { Blocks, ChevronRight } from "lucide-react";
import type { AnimationDefinition } from "motion/react";
import { motion, useAnimation } from "motion/react";
import React, { useEffect, useMemo, useRef, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Integration14Props {
  className?: string;
  badge?: string;
  badgeIcon?: React.ReactNode;
  title?: string;
  description?: string;
  logos?: {
    url: string;
    alt: string;
    name: string;
    link: string;
    className?: string;
    highlightColor?: string;
  }[];
}
const Integration14 = ({
  badge = "Easy Setup",
  badgeIcon = <Blocks />,
  title = "Integrate with your favorite tools",
  description = "Seamlessly connect with your existing workflow and the tools you already use daily.",
  logos = [
    {
      url: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/apple.svg",
      alt: "apple",
      name: "Apple",
      link: "https://shadcnblocks.com",
      className: "dark:invert",
      highlightColor: "bg-foreground",
    },
    {
      url: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-icon.svg",
      alt: "astro",
      name: "Astro",
      link: "https://shadcnblocks.com",
      className: "dark:invert",
      highlightColor: "bg-foreground",
    },
    {
      url: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/brave-icon.svg",
      alt: "brave",
      name: "Brave",
      link: "https://shadcnblocks.com",
      highlightColor: "bg-orange-500",
    },
    {
      url: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/claude-icon.svg",
      alt: "claude",
      name: "Claude",
      link: "https://shadcnblocks.com",
      highlightColor: "bg-amber-500",
    },
    {
      url: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/cursor-icon.svg",
      alt: "cursor",
      className: "dark:invert",
      name: "Cursor",
      link: "https://shadcnblocks.com",
      highlightColor: "bg-foreground",
    },
    {
      url: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/facebook-icon.svg",
      alt: "facebook",
      name: "Facebook",
      link: "https://shadcnblocks.com",
      highlightColor: "bg-blue-500",
    },
    {
      url: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/gemini-icon.svg",
      alt: "gemini",
      name: "Gemini",
      link: "https://shadcnblocks.com",
      highlightColor: "bg-green-500",
    },
    {
      url: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/github-icon.svg",
      alt: "github",
      className: "dark:invert",
      name: "GitHub",
      link: "https://shadcnblocks.com",
      highlightColor: "bg-foreground",
    },
  ],
  className,
}: Integration14Props) => {
  const [width, setWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const controls = useAnimation();

  useEffect(() => {
    if (!carouselRef.current || !containerRef.current) return;

    setWidth(carouselRef.current.clientWidth);
    setContainerWidth(containerRef.current.clientWidth);

    const resizeObserver = new ResizeObserver((entries) => {
      for (let i = 0; i < entries.length; i++) {
        setWidth(carouselRef.current?.clientWidth ?? 0);
        setContainerWidth(containerRef.current?.clientWidth ?? 0);
      }
    });

    resizeObserver.observe(carouselRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  const marqueeAnimation: AnimationDefinition = useMemo(
    () => ({
      x: -(width / 2 + 16),
      transition: {
        duration: 6 * logos.length,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    }),
    [width, logos.length],
  );

  useEffect(() => {
    if (width > 0 && !isDragging) {
      controls.start(marqueeAnimation);
    }
  }, [width, controls, logos.length, isDragging, marqueeAnimation]);

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-12">
          <div className="flex flex-col items-center justify-center gap-4">
            <Badge variant="outline">
              {badgeIcon} {badge}
            </Badge>
            <h3 className="max-w-sm bg-gradient-to-br from-foreground to-foreground/30 bg-clip-text pb-1 text-center text-5xl font-medium text-transparent">
              {title}
            </h3>
            <p className="mt-1 max-w-md text-center text-lg text-muted-foreground">
              {description}
            </p>
          </div>

          <div
            ref={containerRef}
            className="w-full max-w-5xl overflow-x-hidden overflow-y-visible pt-3 pb-12"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, white, white, transparent)",
            }}
            onMouseEnter={() => !isDragging && controls.stop()}
            onMouseLeave={() => {
              if (width > 0 && !isDragging) {
                controls.start(marqueeAnimation);
              }
            }}
          >
            <motion.div
              ref={carouselRef}
              initial={{ x: 0 }}
              animate={controls}
              drag="x"
              dragConstraints={{
                left: -(width / 2 - containerWidth),
                right: 0,
              }}
              dragElastic={0.2}
              dragTransition={{
                bounceStiffness: 200,
                bounceDamping: 20,
                power: 0.3,
              }}
              onDragStart={() => {
                setIsDragging(true);
                controls.stop();
              }}
              onDragTransitionEnd={() => {
                setIsDragging(false);
              }}
              className="flex w-max cursor-grab items-center justify-start gap-8 active:cursor-grabbing"
            >
              {[...logos, ...logos].map((logo, idx) => {
                return (
                  <a
                    key={`integration-14-logo-${idx}`}
                    className={cn(
                      "group size-38 shrink-0",
                      isDragging && "pointer-events-none",
                    )}
                    onDragStart={() => {
                      setIsDragging(true);
                      controls.stop();
                    }}
                    onDragEnd={() => {
                      setIsDragging(false);
                    }}
                    href={logo.link}
                  >
                    <div className="relative size-38 h-full shrink-0 p-0.5 transition-transform duration-[400ms] ease-in-out group-hover:-translate-y-3">
                      <div
                        className={cn(
                          "absolute inset-4 translate-y-3 rounded-full opacity-0 blur-xl transition-opacity duration-[400ms] ease-in-out group-hover:opacity-100",
                          logo.highlightColor,
                        )}
                      />
                      <div className="absolute inset-0 z-0 rounded-3xl bg-gradient-to-b from-muted-foreground/30 to-muted-foreground/10 brightness-110" />
                      <div className="relative z-10 h-full w-full rounded-[22px] bg-background p-10">
                        <img
                          src={logo.url}
                          alt={logo.alt}
                          className={cn("relative z-10 h-full", logo.className)}
                        />
                      </div>
                    </div>
                    <div className="flex w-full translate-y-3 justify-center transition-all duration-[400ms] ease-in-out group-hover:translate-y-3 group-hover:opacity-100 md:translate-y-0 md:opacity-0">
                      <Button>
                        {logo.name}
                        <ChevronRight />
                      </Button>
                    </div>
                  </a>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Integration14 };
