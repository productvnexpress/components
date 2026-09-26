import { ArrowDownRight, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  company?: string;
  image: string;
}

interface Team16Props {
  brandName: string;
  headingBold: string;
  headingNormal: string;
  missionTitle: string;
  missionDescription: string;
  ctaText: string;
  collaborationBold: string;
  collaborationText: string;
  members: TeamMember[];
  className?: string;
}

const Team16 = ({
  className,
  brandName = "studioOne",
  headingBold = "Meet the team",
  headingNormal = "driving innovation.",
  missionTitle = "Join our creative force",
  missionDescription = "We're always looking for curious thinkers to push boundaries with us.",
  ctaText = "Join the team",
  collaborationBold = "teamwork",
  collaborationText = "We thrive on teamwork every idea matters, every perspective counts. Together, we make it happen and we build digital experiences that inspire and perform.",
  members = [
    {
      id: "emma-rogers",
      name: "Emma Rogers",
      role: "Product Strategist",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar1.webp",
    },
    {
      id: "ryan-anderson",
      name: "Ryan Anderson",
      role: "Frontend Engineer",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar2.webp",
    },
    {
      id: "olivia-brown",
      name: "Olivia Brown",
      role: "Design Director",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar3.webp",
    },
    {
      id: "daniel-evans",
      name: "Daniel Evans",
      role: "Interaction Designer",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar4.webp",
    },
  ],
}: Team16Props) => {
  return (
    <section className={cn("bg-muted px-4 py-24 lg:px-0", className)}>
      <Card className="container rounded-xl border-none p-2 shadow-none">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3 lg:gap-12">
          {/* Left Section - Text Content */}
          <div className="grid h-full gap-8 p-4 lg:col-span-2 lg:gap-30 lg:p-16">
            <div>
              {/* Main Heading */}
              <div className="">
                <h2 className="text-4xl leading-tight font-bold text-primary lg:text-5xl">
                  <span>{headingBold}</span>
                  <br />
                  <span className="text-muted-foreground">{headingNormal}</span>
                </h2>
              </div>
            </div>

            <div className="flex h-full flex-col gap-8 self-end lg:flex-row lg:gap-34">
              <div className="grid flex-1 gap-8 lg:gap-30">
                <div className="flex h-8 w-8 items-center justify-center">
                  <Plus className="h-6 w-6 text-muted-foreground" />
                </div>
                {/* Mission Section */}
                <div className="grid gap-8 self-end">
                  <div className="text-lg">
                    <h3 className="mb-2 font-bold text-primary">
                      {missionTitle}
                    </h3>
                    <p className="leading-relaxed text-muted-foreground">
                      {missionDescription}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <Button className="w-fit rounded-full px-4 py-2 text-sm font-medium">
                    {ctaText}
                    <ArrowDownRight className="size-4" />
                  </Button>
                </div>
              </div>
              {/* Collaboration Text */}
              <div className="grid flex-1 gap-8 lg:gap-30">
                <div className="flex h-8 w-8 items-center justify-center">
                  <Plus className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="self-end text-xl">
                  <p className="text-justify indent-16 tracking-tighter text-muted-foreground">
                    {collaborationText
                      .split(collaborationBold)
                      .map((part, index) => (
                        <span key={index}>
                          {part}
                          {index === 0 && (
                            <span className="font-bold text-primary">
                              {" "}
                              {collaborationBold}
                            </span>
                          )}
                        </span>
                      ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Right Section - Team Grid */}
          <div className="grid h-full grid-cols-1 gap-1 lg:grid-cols-2">
            {members.map((member) => (
              <div
                key={member.id}
                className="relative flex min-h-[32rem] flex-col justify-end overflow-hidden rounded-xl p-6 lg:min-h-auto"
              >
                {/* Plus Icon */}
                <div className="absolute top-4 left-4 flex h-6 w-6 items-center justify-center rounded-full">
                  <Plus className="h-3 w-3 text-primary" />
                </div>

                {/* Role and Company */}
                <div className="absolute top-4 right-4 text-right">
                  <p className="text-xs font-medium text-secondary">
                    {member.role}
                  </p>
                  <p className="text-xs text-secondary opacity-80">
                    at {member.company}
                  </p>
                </div>

                {/* Member Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>

                {/* Member Name */}
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-secondary">
                    {member.name}
                  </h3>
                </div>
                {/* Member designation */}
                <div className="absolute top-4 right-4 z-10 text-right text-secondary">
                  <h3 className="text-lg font-semibold">{member.role}</h3>
                  <p> at {member.company || brandName}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </section>
  );
};

export { Team16 };
