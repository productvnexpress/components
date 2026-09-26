import { ArrowUpRight, Download } from "lucide-react";
import { FaApple, FaLinux, FaWindows } from "react-icons/fa";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Download14 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <img
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg"
          alt="logo"
          className="mb-10 w-32 lg:hidden dark:invert"
        />
        <div className="flex flex-col-reverse gap-10 lg:flex-row">
          <div className="w-full border-t pt-10 lg:max-w-sm lg:border-t-0 lg:border-r lg:pt-0 lg:pr-10">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg"
              alt="logo"
              className="hidden w-32 lg:block dark:invert"
            />
            <dl className="space-y-2 text-sm text-muted-foreground lg:mt-6">
              <div className="flex items-center justify-between gap-4">
                <dt className="font-medium text-foreground">Version</dt>
                <dd>3.4.1</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="font-medium text-foreground">Build</dt>
                <dd>304.18290.6</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="font-medium text-foreground">Release date</dt>
                <dd>12 Sep 2025</dd>
              </div>
            </dl>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 text-primary hover:underline"
                >
                  View version details <ArrowUpRight className="size-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 text-primary hover:underline"
                >
                  Platform requirements <ArrowUpRight className="size-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 text-primary hover:underline"
                >
                  Setup and installation guide
                  <ArrowUpRight className="size-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 text-primary hover:underline"
                >
                  Previous versions and channels
                  <ArrowUpRight className="size-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 text-primary hover:underline"
                >
                  Included third‑party components
                  <ArrowUpRight className="size-3.5" />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="rounded-full px-3 py-1">
                Release 3.4.1
              </Badge>
              <span className="text-sm text-muted-foreground">
                Stable channel
              </span>
            </div>
            <h1 className="mt-4 text-3xl font-semibold lg:text-4xl">
              Download the desktop app
            </h1>
            <p className="mt-3 text-muted-foreground lg:text-lg">
              Get the latest version of the application for your operating
              system.
            </p>
            <Tabs defaultValue="windows" className="mt-6">
              <TabsList className="mb-4">
                <TabsTrigger value="windows">
                  <FaWindows />
                  Windows
                </TabsTrigger>
                <TabsTrigger value="macos">
                  <FaApple />
                  macOS
                </TabsTrigger>
                <TabsTrigger value="linux">
                  <FaLinux />
                  Linux
                </TabsTrigger>
              </TabsList>
              <TabsContent value="windows">
                <ButtonGroup>
                  <Button variant="outline">Download</Button>
                  <Select defaultValue="exe">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="exe">
                        <Download />
                        .exe (Windows)
                      </SelectItem>
                      <SelectItem value="zip">
                        <Download />
                        .zip (Windows)
                      </SelectItem>
                      <SelectItem value="msi">
                        <Download />
                        .msi (Windows)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </ButtonGroup>
              </TabsContent>
              <TabsContent value="macos">
                <ButtonGroup>
                  <Button variant="outline">Download</Button>
                  <Select defaultValue="dmg">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dmg">
                        <Download />
                        .dmg (macOS)
                      </SelectItem>
                      <SelectItem value="pkg">
                        <Download />
                        .pkg (macOS)
                      </SelectItem>
                      <SelectItem value="tar.gz">
                        <Download />
                        .tar.gz (macOS)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </ButtonGroup>
              </TabsContent>
              <TabsContent value="linux">
                <ButtonGroup>
                  <Button variant="outline">Download</Button>
                  <Select defaultValue="tar.gz">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tar.gz">
                        <Download />
                        .tar.gz (Linux)
                      </SelectItem>
                      <SelectItem value="deb">
                        <Download />
                        .deb (Linux)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </ButtonGroup>
              </TabsContent>
            </Tabs>
            <a
              href="#"
              className="mt-12 flex max-w-xl items-center gap-2 rounded-lg border px-4 py-3 hover:border-primary"
            >
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg"
                alt="logo"
                className="w-12 dark:invert"
              />
              <p className="font-medium lg:text-lg">
                Use the companion app to manage downloads and keep future
                updates effortless
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Download14 };
