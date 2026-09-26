import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { cn } from "@/lib/utils";

interface TestimonialCaseStudiesAuthor {
  name: string;
  image: string;
  role: string;
}
interface TestimonialCaseStudiesItem {
  quote: string;
  author: TestimonialCaseStudiesAuthor;
  company: {
    logo: string;
    name: string;
  };
}
interface TestimonialCaseStudiesStat {
  number: string;
  text: string;
}
interface TestimonialCaseStudiesCaseStudy {
  title: string;
  link: string;
  stats: TestimonialCaseStudiesStat[];
  background: string;
}

interface TestimonialCaseStudiesProps {
  heading: string;
  description: string;
  testimonials: TestimonialCaseStudiesItem[];
  caseStudies: TestimonialCaseStudiesCaseStudy[];
  className?: string;
}

interface Testimonial35Props extends TestimonialCaseStudiesProps {}
type Props = Partial<Testimonial35Props>;

const defaultProps: Testimonial35Props = {
  heading: "What teams say about Shadcnblocks",
  description:
    "Developers use our shadcn/ui blocks to ship marketing pages and product UI faster. Here is how the library fits real React and Tailwind workflows.",
  testimonials: [
    {
      quote:
        "What I like most is having patterns and primitives in one place. It feels ten times more straightforward than piecing together random scheduling and routing demos.",
      author: {
        name: "Morgan Ellis",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/avatars/avatar1.jpg",
        role: "CTO, Northwind Labs",
      },
      company: {
        logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-1.svg",
        name: "Northwind Labs",
      },
    },
    {
      quote:
        "We dropped these sections into a Vite app next to our own shadcn config. The blocks respect our theme tokens and we did not need a separate design tool for the first launch.",
      author: {
        name: "Riley Park",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/avatars/avatar2.jpg",
        role: "Engineering lead",
      },
      company: {
        logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-2.svg",
        name: "Stackhouse",
      },
    },
  ],
  caseStudies: [
    {
      title: "How we moved pages from Figma to production in a week",
      link: "#",
      stats: [
        {
          number: "10x",
          text: "faster handoff on new sections",
        },
      ],
      background: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/images/1-16x9.jpg",
    },
    {
      title: "Tighter layout consistency across the marketing site",
      link: "#",
      stats: [
        {
          number: "80%",
          text: "less one-off CSS per page",
        },
      ],
      background: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/images/2-16x9.jpg",
    },
    {
      title: "From blank repo to a credible landing in one sprint",
      link: "#",
      stats: [
        {
          number: "25k+",
          text: "blocks browsed in the first month",
        },
      ],
      background: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/images/3-16x9.jpg",
    },
  ],
};

const Author = ({
  image,
  name,
  role,
}: {
  image: string;
  name: string;
  role: string;
}) => (
  <div className="flex items-center gap-3">
    <Avatar className="size-9 rounded-md">
      <AvatarImage src={image} alt={name} />
      <AvatarFallback>{name}</AvatarFallback>
    </Avatar>
    <div>
      <div className="text-sm font-medium text-foreground">{name}</div>
      <div className="text-xs text-muted-foreground">{role}</div>
    </div>
  </div>
);

const Testimonial35 = (props: Props) => {
  const { heading, description, testimonials, caseStudies, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {heading}
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">{description}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.author.name}
              className="flex h-full flex-col gap-5 rounded-2xl border border-border p-5 shadow-sm"
            >
              <div className="h-8 w-32">
                <img
                  className="h-full w-full object-contain object-left opacity-90"
                  src={t.company.logo}
                  alt={
                    t.company.name ? `${t.company.name} logo` : "Company logo"
                  }
                />
              </div>
              <p className="flex-1 text-sm leading-relaxed text-foreground md:text-base">
                {t.quote}
              </p>
              <Author
                image={t.author.image}
                name={t.author.name}
                role={t.author.role}
              />
            </div>
          ))}
        </div>

        <div className="mt-4 overflow-hidden rounded-2xl border border-border">
          {caseStudies.map((cs, i) => (
            <a
              key={cs.title}
              href={cs.link}
              className={cn(
                "flex flex-col gap-4 p-4 transition-colors hover:bg-muted/50 sm:flex-row sm:items-center sm:gap-4 sm:p-5",
                i !== 0 && "border-t border-border",
              )}
            >
              <div className="size-20 shrink-0 overflow-hidden rounded-lg sm:size-24">
                <img
                  src={cs.background}
                  alt=""
                  className="size-full object-cover"
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                <div className="shrink-0 sm:w-32">
                  <span className="text-2xl font-semibold text-foreground tabular-nums sm:text-3xl">
                    {cs.stats[0].number}
                  </span>
                  <p className="text-xs text-muted-foreground sm:mt-0.5">
                    {cs.stats[0].text}
                  </p>
                </div>
                <p className="min-w-0 text-sm leading-snug font-medium text-foreground sm:text-base">
                  {cs.title}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Testimonial35 };
