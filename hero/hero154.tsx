"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Clock, Send } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const formSchema = z
  .object({
    email: z.string().email("Invalid email address"),
  })
  .required({ email: true });

function HeroFrom() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
      <div className="flex w-full flex-col items-start justify-center gap-2 sm:flex-row">
        <Controller
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <Field className="w-full" data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name} className="sr-only">
                Email
              </FieldLabel>
              <Input
                {...field}
                type="email"
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Your work email"
                className="h-12 w-full rounded-lg px-3 py-2 text-center text-sm leading-loose"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <div className="w-full shrink-0 sm:w-fit">
          <Button
            type="submit"
            className="h-fit w-full rounded-lg px-4 py-2.5 text-sm leading-loose font-medium sm:w-fit"
          >
            Get started for free
          </Button>
        </div>
      </div>
    </form>
  );
}

interface Hero154Props {
  className?: string;
}

const Hero154 = ({ className }: Hero154Props) => {
  return (
    <section
      className={cn(
        "border-b border-b-primary/50 bg-background pt-12 md:pt-20",
        className,
      )}
    >
      <div className="container">
        <div className="flex w-full flex-col items-center justify-center gap-16">
          <div className="flex flex-col justify-center gap-12">
            <div className="flex w-full max-w-[32.5rem] flex-col gap-6">
              <h1 className="text-center text-4xl font-medium tracking-tighter text-foreground md:text-5xl">
                Gain control over your company's spending.
              </h1>
              <p className="text-center text-base text-muted-foreground">
                Reduce paperwork while gaining better control over spending,
                faster month-end processes, and more accurate reporting.
              </p>
              <div className="mx-auto w-full max-w-[25.625rem]">
                <HeroFrom />
              </div>
            </div>
            <div className="flex items-center justify-center gap-8">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 stroke-foreground" />
                <div className="text-xs font-medium text-muted-foreground">
                  4.7 on G2
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Send className="h-4 w-4 stroke-foreground" />
                <div className="text-xs font-medium text-muted-foreground">
                  4.8 on Capterra
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="relative mx-auto w-full max-w-[62.5rem] overflow-hidden">
              <AspectRatio ratio={2.100840336 / 1}>
                <div className="w-full">
                  <div className="absolute top-0 left-0 w-[94.2%] overflow-hidden">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mockups/desktop-1.png"
                      alt=""
                      className="relative z-20 h-full w-full"
                    />
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                      alt=""
                      className="absolute top-[3%] left-[2%] z-10 w-full object-contain"
                    />
                  </div>
                  <div className="absolute right-0 -bottom-[35%] z-20 w-[23%] overflow-hidden">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mockups/phone-3.png"
                      alt=""
                      className="relative z-20 h-full w-full"
                    />
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-7-tall.svg"
                      alt=""
                      className="absolute top-0 left-1/2 z-10 w-full -translate-x-1/2 rounded-[15px] md:rounded-[30px]"
                    />
                  </div>
                </div>
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero154 };
