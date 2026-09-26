"use client";
import { useEffect, useRef, useState } from "react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { cn } from "@/lib/utils";

interface CompareProducts4Props {
  className?: string;
  subtitle: string;
  title: string;
  list: {
    title: string;
    description: string;
  }[];
  images: {
    before: {
      src: string;
      alt: string;
    };
    after: {
      src: string;
      alt: string;
    };
  };
}

const SECTION_DATA = {
  subtitle: "See the Difference",
  title: "From Empty to Elevated",
  list: [
    {
      title: "Designed Living",
      description:
        "Experience how thoughtfully selected furniture transforms an empty room into a warm, functional living space.",
    },
    {
      title: "Smart Styling",
      description:
        "Compare layouts, proportions, and finishes to see how the right pieces bring balance and comfort to your home.",
    },
  ],
  images: {
    after: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/furniture/Elegant-Empty-Room-after.png",
      alt: "",
    },
    before: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/furniture/Elegant-Empty-Room-before.png",
      alt: "",
    },
  },
};

const CompareProducts4 = ({
  className,
  subtitle = SECTION_DATA.subtitle,
  title = SECTION_DATA.title,
  list = SECTION_DATA.list,
  images = SECTION_DATA.images,
}: CompareProducts4Props) => {
  const resizablePanelGroupWrapper = useRef<HTMLDivElement>(null);
  const [imageWidth, setImageWidth] = useState(686);

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

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="grid gap-x-25 gap-y-8 lg:grid-cols-2">
          <div>
            <div className="mb-8.5 max-w-112.5 space-y-3">
              <p className="font-serif text-base italic md:text-lg">
                {subtitle}
              </p>
              <h2 className="font-serif text-3xl font-medium lg:text-4xl xl:text-5xl">
                {title}
              </h2>
            </div>
            <ul>
              {list.map((item, index) => (
                <li
                  key={index}
                  className="space-y-3 py-5 not-last:border-b first:pt-0"
                >
                  <h3 className="font-serif text-3xl leading-tight text-primary">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <AspectRatio ratio={1.25} ref={resizablePanelGroupWrapper}>
            <ResizablePanelGroup
              direction="horizontal"
              className="rounded-lg border"
            >
              <ResizablePanel defaultSize={50} className="flex">
                <div className="relative size-full">
                  <div
                    style={{
                      backgroundImage: `url(${images.after.src})`,
                      width: imageWidth,
                    }}
                    className="absolute inset-y-0 left-0 h-full bg-cover bg-center bg-no-repeat"
                  ></div>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle={true} />
              <ResizablePanel defaultSize={50} className="flex">
                <div className="relative size-full">
                  <div
                    style={{
                      backgroundImage: `url(${images.before.src})`,
                      width: imageWidth,
                    }}
                    className="absolute inset-y-0 right-0 h-full bg-cover bg-center bg-no-repeat"
                  ></div>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};

export { CompareProducts4 };
