import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface TestimonialBasicGridItem {
  id?: string;
  name: string;
  avatar: string;
  content: string;
  role?: string;
  username?: string;
  date?: string;
  link?: string;
  icon?: string;
}

interface TestimonialBasicGridProps {
  heading: string;
  description: string;
  testimonials: TestimonialBasicGridItem[];
  className?: string;
}

type Props = Partial<TestimonialBasicGridProps>;

const defaultProps: TestimonialBasicGridProps = {
  heading: "Loved by clients",
  description: "",
  testimonials: [
    {
      id: "1",
      name: "John Doe",
      role: "CEO, Company Example",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/avatars/avatar1.jpg",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum perspiciatis consectetur assumenda incidunt.",
    },
    {
      id: "2",
      name: "John Doe",
      role: "CEO, Company Example",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/avatars/avatar2.jpg",
      content: "Lorem ipsum dolor sit amet consecte adipisicing elit.",
    },
    {
      id: "3",
      name: "John Doe",
      role: "CEO, Company Example",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/avatars/avatar3.jpg",
      content: "Lorem ipsum dolor sit amet consecte adipisicing elit.",
    },
  ],
};

const Author = ({ item }: { item: TestimonialBasicGridItem }) => (
  <div className="flex items-center gap-3 text-sm">
    <Avatar className="size-10 shrink-0 rounded-full ring-1 ring-input">
      <AvatarImage src={item.avatar} alt={item.name} />
    </Avatar>
    <div>
      <p className="font-semibold">{item.name}</p>
      {item.role ? <p className="text-muted-foreground">{item.role}</p> : null}
    </div>
  </div>
);

const Testimonial33 = (props: Props) => {
  const { heading, description, testimonials, className } = {
    ...defaultProps,
    ...props,
  };

  const [featured, ...rest] = testimonials.slice(0, 3);
  if (!featured) {
    return null;
  }

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-medium lg:text-7xl">{heading}</h2>
          {description.trim() ? (
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground lg:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-accent p-16 md:col-span-2 lg:col-span-2 lg:row-span-2">
            <div className="flex h-full flex-col justify-between gap-14">
              <q className="pt-8 text-2xl font-medium lg:pt-14 lg:text-4xl">
                {featured.content}
              </q>
              <Author item={featured} />
            </div>
          </div>
          {rest.map((item) => (
            <div
              key={item.id ?? item.name}
              className="rounded-lg bg-accent p-10"
            >
              <div className="flex flex-col gap-14">
                <q className="text-lg font-medium">{item.content}</q>
                <Author item={item} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Testimonial33 };
