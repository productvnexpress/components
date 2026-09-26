import { Fragment } from "react";
import { FileCode, Layers, type LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { cn } from "@/lib/utils";

interface CtaCardsSubfeature {
  title: string;
  description: string;
  url: string;
}
interface Button {
  text: string;
  url: string;
  icon?: React.ReactNode;
}
interface Buttons {
  primary?: Button;
  secondary?: Button;
}

interface CtaCardsProps {
  heading: string;
  description: string;
  buttons?: Buttons;
  features: readonly [CtaCardsSubfeature, CtaCardsSubfeature];
  className?: string;
}

interface Cta32Props extends Omit<CtaCardsProps, "features"> {
  features: readonly [
    CtaCardsSubfeature & { icon: LucideIcon },
    CtaCardsSubfeature & { icon: LucideIcon },
  ];
}
type Props = Partial<Cta32Props>;

const defaultProps: Cta32Props = {
  heading: "Call to Action",
  description: "Get access to our collection of pre-built blocks and components today. Try our interactive demo or watch a comprehensive walkthrough today.",
  buttons: {
    primary: {
      text: "Start free trial",
      url: "#",
    },
    secondary: {
      text: "Schedule demo",
      url: "#",
    },
  },
  features: [
    {
      title: "Documentation",
      description: "Learn more about our platform's features and capabilities.",
      url: "https://www.shadcnblocks.com",
      icon: FileCode,
    },
    {
      title: "Interactive Demo",
      description:
        "Experience our platform firsthand with an interactive demo.",
      url: "https://www.shadcnblocks.com",
      icon: Layers,
    },
  ],
};

const Cta32 = (props: Props) => {
  const { heading, description, buttons, features, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("py-32", className)}>
      <div className="relative z-10 container grid border-2 border-dashed border-muted p-0 md:grid-cols-2">
        <div className="relative flex flex-col justify-center gap-6 overflow-hidden bg-background/70 p-8 backdrop-blur-sm">
          {/* Pattern background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-100">
            <img
              alt="pattern"
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/square-alt-grid.svg"
              className="[mask-image:radial-gradient(circle_at_top_right,black,transparent_100%)]"
            />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold tracking-tight">{heading}</h2>
            <p className="mt-2 text-muted-foreground">{description}</p>
          </div>

          <div className="relative z-10 flex gap-4">
            {buttons?.primary && (
              <Button asChild>
                <a href={buttons.primary.url}>{buttons.primary.text}</a>
              </Button>
            )}
            {buttons?.secondary && (
              <Button variant="outline" asChild>
                <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
              </Button>
            )}
          </div>
        </div>

        <div className="flex grow flex-col justify-between border-t-2 border-dashed border-muted md:border-t-0 md:border-l-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Fragment key={feature.title}>
                {index > 0 ? <Separator /> : null}
                <a
                  href={feature.url}
                  className="flex h-full items-center px-9 py-6 transition-colors hover:bg-muted/50 lg:justify-center"
                >
                  <div className="flex gap-4">
                    <Icon className="size-5 shrink-0" strokeWidth={1.5} />
                    <div className="flex flex-col gap-1">
                      <h3 className="text-lg font-semibold md:text-xl">
                        {feature.title}
                      </h3>
                      <p className="max-w-lg text-muted-foreground md:text-lg">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </a>
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Cta32 };
