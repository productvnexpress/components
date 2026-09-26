import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const posts = [
  {
    id: "post-1",
    title: "The Future of Web Development: Embracing AI and Automation",
    summary:
      "Discover how artificial intelligence is revolutionizing web development workflows, from automated testing to intelligent code generation and deployment strategies.",
    label: "Technology",
    author: "Sarah Chen",
    published: "15 Mar 2024",
    href: "#",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
  },
  {
    id: "post-2",
    title: "Building Scalable Design Systems: Lessons from Enterprise Teams",
    summary:
      "Learn the best practices for creating and maintaining design systems that scale across large organizations and multiple product teams.",
    label: "Design",
    author: "Marcus Rodriguez",
    published: "12 Mar 2024",
    href: "#",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
  },
  {
    id: "post-3",
    title: "Performance Optimization: Making Your React Apps Lightning Fast",
    summary:
      "Explore advanced techniques for optimizing React applications, including code splitting, lazy loading, and performance monitoring strategies.",
    label: "Development",
    author: "Alex Thompson",
    published: "10 Mar 2024",
    href: "#",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
  },
];

interface Blog3Props {
  className?: string;
}

const Blog3 = ({ className }: Blog3Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mb-8 md:mb-14 lg:mb-16">
          <h1 className="mb-4 w-full text-4xl font-medium md:mb-5 md:text-5xl lg:mb-6 lg:text-6xl">
            Blog
          </h1>
          <p>
            Stay updated with the latest trends in technology, design, and
            development
          </p>
        </div>
        <div className="grid gap-x-4 gap-y-8 md:grid-cols-2 lg:gap-x-6 lg:gap-y-12 2xl:grid-cols-3">
          {posts.map((post) => (
            <a key={post.id} href={post.href} className="group flex flex-col">
              <div className="mb-4 flex overflow-clip rounded-xl md:mb-5">
                <div className="h-full w-full transition duration-300 group-hover:opacity-80">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="aspect-3/2 h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="mb-4">
                <Badge variant="secondary">{post.label}</Badge>
              </div>
              <div className="mb-2 line-clamp-3 text-lg font-medium break-words md:mb-3 md:text-2xl lg:text-3xl">
                {post.title}
              </div>
              <div className="mb-4 line-clamp-2 text-sm text-muted-foreground md:mb-5 md:text-base">
                {post.summary}
              </div>
              <div className="flex items-center gap-2">
                <div className="flex flex-col gap-px">
                  <span className="text-xs font-medium">{post.author}</span>
                  <span className="text-xs text-muted-foreground">
                    {post.published}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Blog3 };
