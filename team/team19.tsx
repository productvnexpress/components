import { Linkedin, Twitter } from "lucide-react";
import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const CornerWrapper = ({ children }: { children: React.ReactNode }) => {
  const corners = [
    "left-0 top-0 border-l border-t",
    "right-0 top-0 border-r border-t",
    "bottom-0 left-0 border-b border-l",
    "bottom-0 right-0 border-b border-r",
  ];

  return (
    <div className="relative">
      {corners.map((corner, index) => (
        <span
          key={index}
          className={cn("absolute size-2.5 border-foreground", corner)}
        />
      ))}
      {children}
    </div>
  );
};

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  description: string;
  previousCompanies?: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
  };
}

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="flex h-full flex-col gap-4 border bg-muted p-6">
      <div className="flex items-start justify-between">
        <p className="text-xl font-medium tracking-tighter uppercase">
          {member.role}
        </p>
        <div className="flex gap-3">
          {member.socialLinks.twitter && (
            <a
              href={member.socialLinks.twitter}
              className="transition-opacity hover:opacity-60"
            >
              <Twitter className="size-5" fill="currentColor" />
            </a>
          )}
          {member.socialLinks.linkedin && (
            <a
              href={member.socialLinks.linkedin}
              className="transition-opacity hover:opacity-60"
            >
              <Linkedin className="size-5" fill="currentColor" />
            </a>
          )}
        </div>
      </div>

      <Avatar className="size-16">
        <AvatarImage
          src={member.avatar}
          alt={member.name}
          className="object-cover"
        />
        <AvatarFallback className="bg-background text-xl font-semibold">
          {member.name
            .toUpperCase()
            .split(" ")
            .map((name) => name[0])
            .join("")}
        </AvatarFallback>
      </Avatar>

      <h4 className="text-2xl font-medium md:text-4xl">{member.name}</h4>

      <p className="mt-2 text-muted-foreground md:text-lg">
        {member.description}
      </p>

      {member.previousCompanies && (
        <p className="md:text-lg">
          <span>Prev: </span>
          <span className="font-bold">{member.previousCompanies}</span>
        </p>
      )}
    </div>
  );
};

interface Team19Props {
  members?: TeamMember[];
  className?: string;
}

const Team19 = ({
  className,
  members = [
    {
      id: "member-1",
      name: "Sarah Smith",
      role: "CEO",
      avatar:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/portraits/michael-dam-mEZ3PoFGs_k-unsplash.jpg",
      description:
        "Visionary leader with 15+ years driving strategic growth and operational excellence across enterprise technology companies",
      previousCompanies:
        "TechVentures Inc; DataStream Solutions; GlobalBank Corp",
      socialLinks: {
        twitter: "https://shadcnblocks.com",
        linkedin: "https://shadcnblocks.com",
      },
    },
    {
      id: "member-2",
      name: "David Chen",
      role: "CTO",
      avatar:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/portraits/christian-buehner-DItYlc26zVI-unsplash 1.jpg",
      description:
        "Technology architect specializing in building scalable platforms that serve millions of users worldwide",
      previousCompanies: "CloudTech Systems; DataCore Analytics",
      socialLinks: {
        twitter: "https://shadcnblocks.com",
        linkedin: "https://shadcnblocks.com",
      },
    },
    {
      id: "member-3",
      name: "Ryan Foster",
      role: "COO",
      avatar:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/portraits/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg",
      description:
        "Operations expert focused on building efficient systems and processes that enable sustainable growth",
      previousCompanies: "Enterprise Dynamics; Strategy Partners Group",
      socialLinks: {
        twitter: "https://shadcnblocks.com",
        linkedin: "https://shadcnblocks.com",
      },
    },
    {
      id: "member-4",
      name: "Marcus",
      role: "GROWTH",
      avatar:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/portraits/alexander-hipp-iEEBWgY_6lA-unsplash.jpg",
      description:
        "Growth strategist with proven track record of scaling products from early stage to market leadership",
      socialLinks: {
        twitter: "https://shadcnblocks.com",
        linkedin: "https://shadcnblocks.com",
      },
    },
    {
      id: "member-5",
      name: "James Park",
      role: "CORE DEV",
      avatar:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/portraits/nima-motaghian-nejad-_omdf_EgRUo-unsplash.jpg",
      description:
        "Full-stack engineer passionate about building robust and maintainable code for modern web applications",
      previousCompanies: "WebScale Technologies; Cloud Solutions Inc",
      socialLinks: {
        linkedin: "https://shadcnblocks.com",
      },
    },
    {
      id: "member-6",
      name: "Emily Rose",
      role: "CORE DEV",
      avatar:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/portraits/good-faces-xmSWVeGEnJw-unsplash.jpg",
      description:
        "Backend specialist focused on designing high-performance systems and optimizing application infrastructure",
      previousCompanies: "DataFlow Systems; Platform Engineering Co",
      socialLinks: {
        linkedin: "https://shadcnblocks.com",
      },
    },
  ],
}: Team19Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container max-w-6xl">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <CornerWrapper key={member.id}>
              <TeamMemberCard member={member} />
            </CornerWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Team19 };
