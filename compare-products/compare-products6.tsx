"use client";
import { useEffect, useRef, useState } from "react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { cn } from "@/lib/utils";

type ComparedItemContent = {
  src: string;
  alt: string;
  content: {
    text: string;
    title: string;
  };
};

interface ResizableTextContentProps {
  text: string;
  title: string;
  align?: "left" | "right";
  width?: number;
}

interface CompareProducts4Props {
  className?: string;
  description: string;
  title: string;
  cta?: {
    text: string;
    href: string;
  };
  images: {
    before: ComparedItemContent;
    after: ComparedItemContent;
  };
}

const SECTION_DATA = {
  description: "See the Results",
  title: "Before & After Glow",
  cta: {
    text: "Shop the Serum",
    href: "#",
  },
  images: {
    after: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/promotional/Skincare-Routine-Portrait-after.png",
      alt: "After skincare routine",
      content: {
        title: "After",
        text: "Skin looks visibly smoother, hydrated, and more radiant after consistent use.",
      },
    },
    before: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/promotional/Skincare-Routine-Portrait-before.jpg",

      alt: "Before skincare routine",
      content: {
        title: "Before",
        text: "Dull, uneven skin tone with visible dryness and lack of hydration.",
      },
    },
  },
};

const CompareProducts6 = ({
  className,
  description = SECTION_DATA.description,
  title = SECTION_DATA.title,
  images = SECTION_DATA.images,
  cta = SECTION_DATA.cta,
}: CompareProducts4Props) => {
  const resizablePanelGroupWrapper = useRef<HTMLDivElement>(null);
  const [imageWidth, setImageWidth] = useState<number>();

  useEffect(() => {
    const handleResize = () => {
      if (!resizablePanelGroupWrapper.current) return;

      const width =
        resizablePanelGroupWrapper.current.getBoundingClientRect().width;
      setImageWidth(width);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { before, after } = images;

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end">
          <div className="basis-1/4">
            <div className="max-w-112.5 space-y-7">
              <div className="space-y-2">
                <h2 className="font-serif text-3xl font-medium lg:text-4xl xl:text-5xl">
                  {title}
                </h2>
                <p className="font-serif text-base italic md:text-lg">
                  {description}
                </p>
              </div>
              {cta && (
                <Button asChild size="lg">
                  <a href={cta.href}>{cta.text}</a>
                </Button>
              )}
            </div>
          </div>
          <div className="basis-3/4">
            <AspectRatio ratio={1.25} ref={resizablePanelGroupWrapper}>
              {imageWidth && (
                <ResizablePanelGroup direction="horizontal" className="border">
                  <ResizablePanel defaultSize={50} className="flex">
                    <div className="relative size-full">
                      <div
                        style={{
                          backgroundImage: `url(${after.src})`,
                          width: imageWidth,
                        }}
                        className="absolute inset-y-0 left-0 h-full bg-cover bg-center bg-no-repeat"
                      >
                        <div className="size-full max-sm:hidden">
                          <ResizableTextContent
                            text={after.content.text}
                            title={after.content.title}
                            width={imageWidth / 2}
                          />
                        </div>
                      </div>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle withHandle={true} />
                  <ResizablePanel defaultSize={50} className="flex">
                    <div className="relative size-full">
                      <div
                        style={{
                          backgroundImage: `url(${before.src})`,
                          width: imageWidth,
                        }}
                        className="absolute inset-y-0 right-0 h-full bg-cover bg-center bg-no-repeat"
                      >
                        <div className="size-full max-sm:hidden">
                          <ResizableTextContent
                            align="right"
                            text={before.content.text}
                            title={before.content.title}
                            width={imageWidth / 2}
                          />
                        </div>
                      </div>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              )}
            </AspectRatio>
            <div className="space-y-2 sm:hidden">
              <ResizableTextContent
                align="right"
                text={before.content.text}
                title={before.content.title}
              />
              <ResizableTextContent
                text={after.content.text}
                title={after.content.title}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ResizableTextContent = ({
  title,
  text,
  align = "left",
  width,
}: ResizableTextContentProps) => {
  return (
    <div
      className={cn(
        "flex size-full",
        align === "left"
          ? "items-start justify-start"
          : "items-end justify-end",
      )}
    >
      <div
        className={cn(
          "flex flex-col space-y-1 p-3 sm:p-5 md:p-8",
          align === "left" ? "items-start text-left" : "items-end text-right",
        )}
        style={{
          width,
        }}
      >
        <h2 className="text-lg text-shadow-xs sm:text-2xl">{title}</h2>
        <div className="max-w-72">
          <p className="text-xs text-balance xl:text-sm">{text}</p>
        </div>
      </div>
    </div>
  );
};

export { CompareProducts6 };
