"use client";

import { InfoIcon } from "lucide-react";
import React, { useState } from "react";

import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface TeamMember {
  name: string;
  image: string;
  description: string;
  role?: string;
}

interface TeamCategory {
  title: string;
  description: string;
  members: TeamMember[];
}

interface Team18Props {
  heading?: string;
  description?: string;
  categories?: TeamCategory[];
  className?: string;
}

const DEFAULT_CATEGORIES: TeamCategory[] = [
  {
    title: "Leadership",
    description:
      "Our executive team brings together decades of experience in technology leadership, strategic planning, and business development.",
    members: [
      {
        name: "Alex",
        image:
          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/portraits/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg",
        description:
          "Alex serves as CEO and leads strategic direction and operations. He builds partnerships, secures funding, and ensures our mission of democratizing software development. Previously co-founded two successful tech startups.",
        role: "CEO",
      },
      {
        name: "David",
        image:
          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/portraits/good-faces-xmSWVeGEnJw-unsplash.jpg",
        description:
          "David helps development teams get started with our platform. He answers questions about business models, technical fit, and platform value. Previously developed high-performance software systems at major tech companies.",
      },
      {
        name: "Marcus",
        image:
          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/portraits/alexander-hipp-iEEBWgY_6lA-unsplash.jpg",
        description:
          "Marcus leads strategic partnerships and business development across technology sectors. He works with enterprise clients to develop customized solutions and accelerate innovation cycles. Previously held senior positions at major tech companies.",
      },
      {
        name: "Rachel",
        image:
          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/portraits/michael-dam-mEZ3PoFGs_k-unsplash.jpg",
        description:
          "Rachel directs R&D efforts driving technical innovation. She leads researchers working on AI, distributed systems, and automated development tools. Previously served as principal researcher at leading tech institutes.",
      },
      {
        name: "Sarah",
        image:
          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/portraits/christian-buehner-DItYlc26zVI-unsplash 1.jpg",
        description:
          "Sarah oversees technical architecture and engineering infrastructure. She leads teams building scalable systems for data processing and machine learning workflows. Previously worked as a senior software architect at leading tech companies.",
      },
    ],
  },
  {
    title: "Frontend Development",
    description:
      "Our frontend team specializes in creating beautiful, responsive, and accessible user interfaces using modern web technologies.",
    members: [
      {
        name: "Casey",
        image:
          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/portraits/christian-buehner-DItYlc26zVI-unsplash 1.jpg",
        description:
          "Casey develops interactive and engaging user interfaces that bring our platform to life. She specializes in component architecture, design system implementation, and cross-browser compatibility. Previously worked at design-focused startups.",
      },
      {
        name: "Jordan",
        image:
          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/portraits/nima-motaghian-nejad-_omdf_EgRUo-unsplash.jpg",
        description:
          "Jordan specializes in creating intuitive and responsive user interfaces using modern web technologies. She leads frontend development in building scalable React applications with TypeScript and ensuring optimal user experience. Previously worked at leading design agencies.",
      },
      {
        name: "Morgan",
        image:
          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/portraits/good-faces-xmSWVeGEnJw-unsplash.jpg",
        description:
          "Morgan leads mobile and responsive design initiatives, ensuring our platform works flawlessly across all devices. He specializes in React Native, progressive web apps, and mobile-first design principles. Previously worked at mobile-first companies.",
      },
      {
        name: "Taylor",
        image:
          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/portraits/alexander-hipp-iEEBWgY_6lA-unsplash.jpg",
        description:
          "Taylor focuses on building performant and accessible web applications using cutting-edge frontend technologies. He specializes in React ecosystem, Next.js, and modern CSS frameworks. Previously worked as a senior frontend engineer at major tech companies.",
      },
    ],
  },
  {
    title: "Backend Development",
    description:
      "Our backend engineers build robust, scalable systems and APIs that power our platform's core functionality and integrations.",
    members: [
      {
        name: "Avery",
        image:
          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/portraits/nima-motaghian-nejad-_omdf_EgRUo-unsplash.jpg",
        description:
          "Avery develops data processing pipelines and real-time systems that handle large volumes of information efficiently. He specializes in stream processing, message queues, and distributed computing using Apache Kafka, Redis, and Docker. Previously worked at data-driven companies.",
      },
      {
        name: "Blake",
        role: "CTO",
        image:
          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/portraits/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg",
        description:
          "Blake architects and develops robust backend systems that power our platform's core functionality. He specializes in microservices architecture, database design, and API development using Node.js, Python, and Go. Previously worked as a senior backend engineer at major cloud providers.",
      },
      {
        name: "Quinn",
        image:
          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/portraits/alexander-hipp-iEEBWgY_6lA-unsplash.jpg",
        description:
          "Quinn leads database architecture and optimization efforts, ensuring our platform can handle massive scale while maintaining performance. She specializes in PostgreSQL, MongoDB, and database sharding strategies. Previously worked at e-commerce companies managing databases serving millions of users.",
      },
      {
        name: "Riley",
        image:
          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/portraits/michael-dam-mEZ3PoFGs_k-unsplash.jpg",
        description:
          "Riley focuses on building secure and scalable APIs that enable seamless integration with third-party services. She specializes in RESTful API design, GraphQL implementation, and authentication systems. Previously worked at fintech companies building secure payment processing systems.",
      },
    ],
  },
  {
    title: "DevOps & Infrastructure",
    description:
      "Our DevOps team ensures reliable, secure, and scalable infrastructure operations with modern cloud technologies and automation.",
    members: [
      {
        name: "Phoenix",
        image:
          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/portraits/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg",
        description:
          "Phoenix leads our monitoring and observability initiatives, building systems that provide deep insights into platform performance and reliability. He specializes in Prometheus, Grafana, and distributed tracing systems. Previously worked at observability companies building monitoring systems for large-scale applications.",
      },
      {
        name: "River",
        image:
          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/portraits/good-faces-xmSWVeGEnJw-unsplash.jpg",
        description:
          "River focuses on security and compliance, implementing best practices to protect our platform and user data. She specializes in security auditing, vulnerability assessment, and compliance frameworks. Previously worked at security-focused companies building comprehensive security programs.",
      },
      {
        name: "Sage",
        image:
          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/portraits/christian-buehner-DItYlc26zVI-unsplash 1.jpg",
        description:
          "Sage manages our cloud infrastructure and deployment pipelines, ensuring reliable and scalable system operations. He specializes in AWS, Kubernetes, and infrastructure as code using Terraform. Previously worked at cloud-native companies building infrastructure supporting millions of users.",
      },
    ],
  },
];

const POPOVER_CONTENT_STYLE = {
  boxShadow: "inset 0px 0px 20px 0px var(--color-background)",
};
const POPOVER_CONTENT_CLASSNAME =
  "bg-foreground text-background rounded-xl p-4 text-xs border-none";

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="group flex w-fit cursor-help items-center gap-3 focus:outline-none"
      >
        <img
          src={member.image}
          alt={member.name}
          className="size-8 rounded-full object-cover"
        />
        <div className="flex items-center gap-2">
          <div className="h-full border-b border-dotted transition-colors duration-100 group-hover:text-foreground">
            {member.name}{" "}
          </div>
          {member.role && (
            <Badge
              variant="secondary"
              className="hidden px-1 py-0 text-xs md:block"
            >
              {member.role}
            </Badge>
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent
        style={POPOVER_CONTENT_STYLE}
        className={POPOVER_CONTENT_CLASSNAME}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {member.description}
      </PopoverContent>
    </Popover>
  );
};

interface TeamCategoryCardProps {
  category: TeamCategory;
  index: number;
}

const TeamCategoryCard = ({ category, index }: TeamCategoryCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <h4>{category.title}</h4>
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger
            className="h-full focus:outline-none"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <InfoIcon className="size-4 cursor-help fill-muted-foreground text-background transition-colors duration-100 hover:fill-foreground" />
          </PopoverTrigger>

          <PopoverContent
            style={POPOVER_CONTENT_STYLE}
            className={POPOVER_CONTENT_CLASSNAME}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            {category.description}
          </PopoverContent>
        </Popover>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {category.members.map((member, memberIdx) => {
          return (
            <TeamMemberCard
              key={`team-18-${index}-${memberIdx}`}
              member={member}
            />
          );
        })}
      </div>
    </div>
  );
};

const Team18 = ({
  heading = "Our Team",
  description = "We bring together the very best minds in #technology, #design, #engineering and #data-science. Our team has previously helped ship products and technology at leading companies across various industries, bringing decades of combined experience in software development, cloud computing, and digital innovation.",
  categories = DEFAULT_CATEGORIES,
  className,
}: Team18Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="relative grid grid-cols-1 gap-4 md:grid-cols-3">
          <h3 className="sticky top-32 col-span-1 text-3xl font-medium">
            {heading}
          </h3>
          <div className="flex flex-col gap-20 font-medium text-muted-foreground md:col-span-2">
            <p>{description}</p>

            <div className="flex flex-col gap-12">
              {categories.map((category, index) => {
                return (
                  <TeamCategoryCard
                    key={`team-18-${index}`}
                    category={category}
                    index={index}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Team18 };
