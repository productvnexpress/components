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

interface Testimonial34Props extends TestimonialCaseStudiesProps {}
type Props = Partial<Testimonial34Props>;

const defaultProps: Testimonial34Props = {
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

interface AuthorProps {
  image: string;
  name: string;
  role: string;
}

const Author = ({ image, name, role }: AuthorProps) => {
  return (
    <div className="flex items-center gap-3">
      <Avatar className="size-10 rounded-xl bg-background/50">
        <AvatarImage src={image} alt={name} />
        <AvatarFallback>{name}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-0.5">
        <div className="text-xs font-medium text-foreground">{name}</div>
        <div className="text-xs text-muted-foreground">{role}</div>
      </div>
    </div>
  );
};

const Testimonial34 = (props: Props) => {
  const { heading, description, testimonials, caseStudies, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-4xl">
            {heading}
          </h2>
          <div className="max-w-5xl">
            <p className="text-lg text-muted-foreground md:text-xl">
              {description}
            </p>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <a
              key={caseStudy.title}
              href={caseStudy.link}
              className="group/card flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={caseStudy.background}
                  alt=""
                  className="size-full object-cover transition-transform duration-300 group-hover/card:scale-[1.02]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div>
                  <div className="text-3xl font-semibold tracking-tight text-foreground">
                    {caseStudy.stats[0].number}
                  </div>
                  <p className="text-xs font-medium text-muted-foreground">
                    {caseStudy.stats[0].text}
                  </p>
                </div>
                <p className="text-sm leading-snug font-semibold tracking-tight text-foreground md:text-base">
                  {caseStudy.title}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author.name}
              className="flex h-full flex-col justify-between gap-8 rounded-2xl border border-border bg-muted/40 p-6"
            >
              <div>
                <p className="border-l-4 border-primary pl-4 text-sm leading-relaxed font-medium text-foreground md:text-base">
                  {testimonial.quote}
                </p>
              </div>
              <div className="flex items-center justify-between gap-4">
                <Author
                  image={testimonial.author.image}
                  role={testimonial.author.role}
                  name={testimonial.author.name}
                />
                <div className="w-24 shrink-0">
                  <img
                    className="w-full object-contain object-center opacity-80"
                    src={testimonial.company.logo}
                    alt={
                      testimonial.company.name
                        ? `${testimonial.company.name} logo`
                        : "Company logo"
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Testimonial34 };
