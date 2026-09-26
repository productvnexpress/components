import { ArrowRightIcon } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development",
    date: "3rd Dec 2024",
    description:
      "Exploring the latest trends in frontend and backend technologies, including AI-powered coding tools and modern frameworks.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/nubelson-fernandes-tAJYoec13xk-unsplash.jpg",
    imageAlt: "Developer working on code",
    href: "#",
  },
  {
    id: 2,
    title: "Mastering React Performance Optimization",
    date: "5th Dec 2024",
    description:
      "A deep dive into memoization, lazy loading, and efficient state management techniques for faster React applications.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/jason-goodman-ZJlfUi5rTDU-unsplash.jpg",
    imageAlt: "Code on screen",
    href: "#",
  },
  {
    id: 3,
    title: "UI/UX Design Principles for 2025",
    date: "10th Dec 2024",
    description:
      "Key strategies for creating intuitive, beautiful interfaces that delight users and drive engagement in the coming year.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/studio-republic-fotKKqWNMQ4-unsplash.jpg",
    imageAlt: "UI/UX design sketches on paper",
    href: "#",
  },
  {
    id: 4,
    title: "Building Design Systems That Scale",
    date: "18th Dec 2024",
    description:
      "How to document components, govern tokens, and keep design and code aligned as your product and team grow.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/ivan-bandura-hqnUYXsN5oY-unsplash.jpg",
    imageAlt: "Design workspace and laptop",
    href: "#",
  },
  {
    id: 5,
    title: "TypeScript Tips for Safer App Architecture",
    date: "22nd Dec 2024",
    description:
      "Practical patterns for stricter types, better inference, and fewer runtime surprises in large codebases.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-uR__S5GX8Io-unsplash.jpg",
    imageAlt: "Code editor on a desk",
    href: "#",
  },
];

interface Blog30Props {
  className?: string;
}

const Blog30 = ({ className }: Blog30Props) => {
  return (
    <section className={cn("bg-background py-32", className)}>
      <div className="container">
        <h1 className="mb-12 max-w-lg font-sans text-5xl font-extrabold tracking-tight text-foreground md:text-7xl">
          Discover Our Fresh Content
        </h1>

        <div className="flex flex-col gap-16">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col items-center gap-16 md:flex-row"
            >
              <div className="aspect-square w-full max-w-80 shrink-0 overflow-hidden rounded-3xl bg-muted md:w-80 md:max-w-none">
                <img
                  src={post.image}
                  className="size-full object-cover"
                  alt={post.imageAlt}
                />
              </div>
              <Card className="border-none shadow-none ring-0">
                <CardContent className="p-0">
                  <div className="flex h-90 items-start py-10 md:mb-0 lg:gap-32">
                    <div className="flex h-full w-full flex-col items-start justify-between pr-8">
                      <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                        {post.title}
                      </h2>
                      <p className="mt-2 text-sm font-semibold tracking-widest text-muted-foreground uppercase">
                        {post.date}
                      </p>
                    </div>
                    <div className="flex h-full w-full flex-col items-start justify-between gap-6">
                      <p className="text-lg leading-relaxed font-normal tracking-tight text-muted-foreground md:text-xl">
                        {post.description}
                      </p>
                      <Button
                        variant="ghost"
                        className="inline-flex items-center justify-center gap-4 rounded-md px-0 text-primary transition-all ease-in-out hover:gap-6 hover:px-3 hover:text-accent-foreground"
                      >
                        <a
                          href={post.href}
                          className="text-lg font-semibold tracking-tight"
                        >
                          Read
                        </a>
                        <ArrowRightIcon />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Blog30 };
