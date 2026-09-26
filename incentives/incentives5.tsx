"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import type { LucideIcon } from "lucide-react";
import {
  CheckCircle2Icon,
  Globe,
  Handshake,
  Headset,
  Shield,
  Sprout,
  Truck,
  Zap,
} from "lucide-react";
import { useState } from "react";

import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { cn } from "@/lib/utils";

type Incentive = {
  icon: LucideIcon;
  text: string;
  description: string;
};

type IncentivesSection = {
  list: Incentive[];
};

interface Incentives5Props extends IncentivesSection {
  className?: string;
}

const INCENTIVES_SECTION: IncentivesSection = {
  list: [
    {
      text: "Free Shipping",
      icon: Truck,
      description:
        "Enjoy fast, free delivery on qualifying orders with no hidden fees.",
    },
    {
      text: "Secure Checkout",
      icon: Shield,
      description:
        "Your payments are protected with industry-standard encryption.",
    },
    {
      text: "Eco-Conscious Design",
      icon: Sprout,
      description:
        "Thoughtfully designed products with sustainability in mind.",
    },
    {
      text: "Easy Returns",
      icon: Handshake,
      description: "Return or exchange items easily within our return window.",
    },
    {
      text: "Dedicated Support",
      icon: Headset,
      description:
        "Our support team is here to help whenever you need assistance.",
    },
    {
      text: "Worldwide Shipping",
      icon: Globe,
      description:
        "We ship to multiple countries so you can shop from anywhere.",
    },
    {
      text: "Quality Guaranteed",
      icon: CheckCircle2Icon,
      description: "Every product is tested to meet our quality standards.",
    },
    {
      text: "Fast Processing",
      icon: Zap,
      description:
        "Orders are packed and shipped quickly for minimal wait time.",
    },
  ],
};

const Incentives5 = ({
  list = INCENTIVES_SECTION.list,
  className,
}: Incentives5Props) => {
  const [api, setApi] = useState<CarouselApi>();

  const handelMouseOver = () => {
    if (!api) return;

    api.plugins().autoScroll?.stop();
  };

  const handleMouseLeave = () => {
    if (!api) return;

    api.plugins().autoScroll?.play();
  };

  return (
    <section className={cn("overflow-hidden py-32", className)}>
      <div className="container">
        <div
          className={cn(
            "relative",
            "before:absolute before:inset-y-0 before:start-0 before:z-10 before:w-10 before:bg-linear-to-r before:from-background",
            "after:absolute after:inset-y-0 after:end-0 after:z-10 after:w-10 after:bg-linear-to-l after:from-background",
          )}
        >
          <Carousel
            plugins={[AutoScroll()]}
            opts={{
              loop: true,
              watchDrag: false,
            }}
            setApi={setApi}
            onMouseOver={handelMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            <CarouselContent className="-ml-0">
              {list.map(({ icon: Icon, text, description }, index) => (
                <CarouselItem
                  key={index}
                  className="basis-9/12 pl-0 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <Item className="flex-nowrap px-2">
                    <ItemMedia
                      variant="icon"
                      className="size-10.5 rounded-full"
                    >
                      <Icon className="size-5.5" />
                    </ItemMedia>
                    <ItemContent>
                      <ItemTitle>{text}</ItemTitle>
                      <ItemDescription className="max-w-80">
                        {description}
                      </ItemDescription>
                    </ItemContent>
                  </Item>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { Incentives5 };
