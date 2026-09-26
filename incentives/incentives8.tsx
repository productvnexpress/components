import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CreditCard,
  Lock,
  Package,
  PackageMinus,
  Phone,
  Smartphone,
  Truck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

type Incentive = {
  title: string;
  icon: LucideIcon;
  text: string;
  link: string;
};

type IncentivesSection = {
  list: Incentive[];
  title: string;
  cta: {
    link: string;
    text: string;
  };
};

interface Incentives8Props extends IncentivesSection {
  className?: string;
}

type IncentiveCardProps = Incentive;

const INCENTIVES_SECTION: IncentivesSection = {
  title: "Services and Support",
  cta: {
    link: "#",
    text: "Explore all services",
  },
  list: [
    {
      title: "Customer Care",
      text: "Browse common questions and discover the best ways to contact us.",
      icon: Phone,
      link: "#",
    },
    {
      title: "Our Apps",
      text: "Transform your space and shop smarter with our easy-to-use apps.",
      icon: Smartphone,
      link: "#",
    },
    {
      title: "Ways to Pay",
      text: "Discover all available payment methods for online and in-store shopping.",
      icon: CreditCard,
      link: "#",
    },
    {
      title: "Data & Privacy",
      text: "Review our privacy practices and learn how we protect your information.",
      icon: Lock,
      link: "#",
    },
    {
      title: "Help & Guides",
      text: "Access helpful resources—from assembly instructions to smart-home assistance.",
      icon: Package,
      link: "#",
    },
    {
      title: "Returns & Issues",
      text: "See how to return an item or report an issue if something isn’t right.",
      icon: PackageMinus,
      link: "#",
    },
    {
      title: "Order Tracking",
      text: "Stay updated—track, modify, or cancel your order anytime.",
      icon: Truck,
      link: "#",
    },
  ],
};

const Incentives8 = ({
  list = INCENTIVES_SECTION.list,
  title = INCENTIVES_SECTION.title,
  cta = INCENTIVES_SECTION.cta,
  className,
}: Incentives8Props) => {
  return (
    <section className={cn("overflow-hidden py-32", className)}>
      <div className="container mb-8 flex justify-between gap-5">
        <h2 className="flex-1 text-2xl font-bold">{title}</h2>
        <Button asChild variant="outline">
          <a href={cta.link}>{cta.text}</a>
        </Button>
      </div>
      <div className="group/carousel container">
        <Carousel
          opts={{
            align: "start",
          }}
        >
          <CarouselContent className="pb-1.5">
            {list.map((item, index) => (
              <CarouselItem
                className="basis-80 lg:basis-1/3 xl:basis-1/4"
                key={index}
              >
                <IncentiveCard {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="opacity-0 transition-all duration-300 group-hover/carousel:opacity-100">
            <CarouselNext variant="default" />
            <CarouselPrevious variant="default" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

const IncentiveCard = ({
  icon: Icon,
  title,
  text,
  link,
}: IncentiveCardProps) => {
  return (
    <a href={link} className="group block h-80">
      <Card className="h-full p-8">
        <CardContent className="flex h-full flex-col justify-between gap-4 p-0">
          <div className="space-y-2">
            <Icon className="mb-3 size-6" />
            <CardTitle className="text-2xl leading-tight font-bold underline-offset-4 group-hover:underline">
              {title}
            </CardTitle>
            <CardDescription className="mt-3 leading-normal">
              {text}
            </CardDescription>
          </div>
          <div className="flex size-10 rounded-full border-1 border-primary">
            <ArrowRight className="m-auto text-primary" />
          </div>
        </CardContent>
      </Card>
    </a>
  );
};

export { Incentives8 };
