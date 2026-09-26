import { FaApple, FaWindows } from "react-icons/fa";
import { IoIosAppstore } from "react-icons/io";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Download15Props {
  className?: string;
}

const Download15 = ({ className }: Download15Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container flex flex-col items-center gap-8">
        <img
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
          alt="logo"
          className="w-32 dark:invert"
        />
        <h1 className="text-center text-3xl font-bold md:text-5xl">
          Download for <br /> Your Platform
        </h1>
        <div className="flex flex-col items-center gap-3">
          <Button size="lg">
            <FaWindows />
            Download App for Windows
          </Button>
          <p className="text-xs text-muted-foreground">
            Compatible with Windows 10 and 11
          </p>
        </div>
        <div className="mt-16 flex flex-col items-center gap-8">
          <p className="text-sm font-semibold uppercase">Also Available On</p>
          <div className="grid w-full gap-4 md:grid-cols-2">
            <a
              href="#"
              className="flex items-center gap-4 rounded-lg transition-colors duration-200 md:p-3 md:hover:bg-accent"
            >
              <FaApple className="size-14" />
              <div className="flex flex-col">
                <p className="text-sm font-semibold">Mac OS</p>
                <p className="text-xs text-muted-foreground underline">
                  Download App for macOS
                </p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-4 rounded-lg transition-colors duration-200 md:p-3 md:hover:bg-accent"
            >
              <IoIosAppstore className="size-14" />
              <div className="flex flex-col">
                <p className="text-sm font-semibold">IOS</p>
                <p className="text-xs text-muted-foreground underline">
                  Get in the App Store
                </p>
              </div>
            </a>
          </div>
          <a
            href="#"
            className="flex items-center gap-1 text-center text-xs text-muted-foreground hover:underline"
          >
            More info on supported and unsupported devices →
          </a>
        </div>
      </div>
    </section>
  );
};

export { Download15 };
