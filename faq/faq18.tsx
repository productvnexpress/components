"use client";

import * as React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCategory {
  id: string;
  label: string;
  faqs: FaqItem[];
}

interface Faq18Props {
  badge?: string;
  title: string;
  description: string;
  categories: FaqCategory[];
  className?: string;
}

const Faq18 = ({
  badge = "FAQ",
  title = "Need some clarity?",
  description = "Find answers to the most common questions about our platform, from security to billing.",
  categories = [
    {
      id: "product",
      label: "Product",
      faqs: [
        {
          question: "Can I use the app offline?",
          answer:
            "Yes, you can access essential features offline, and your data syncs when you're back online.",
        },
        {
          question: "Does it support integrations?",
          answer:
            "Absolutely. We integrate with Slack, Google Workspace, and more.",
        },
        {
          question: "What platforms are supported?",
          answer:
            "Our app works on iOS, Android, Windows, macOS, and Linux. We also have a web version.",
        },
        {
          question: "Is there a mobile app?",
          answer:
            "Yes, we have native mobile apps for both iOS and Android with full feature parity.",
        },
        {
          question: "How secure is my data?",
          answer:
            "We use enterprise-grade encryption, SOC 2 compliance, and regular security audits to protect your data.",
        },
      ],
    },
    {
      id: "billing",
      label: "Billing",
      faqs: [
        {
          question: "Do you offer refunds?",
          answer:
            "Yes, we provide a 30-day money-back guarantee, no questions asked.",
        },
        {
          question: "Can I switch plans anytime?",
          answer:
            "You can upgrade or downgrade your subscription at any time in your account settings.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit cards, PayPal, and bank transfers for enterprise plans.",
        },
        {
          question: "Is there a free trial?",
          answer:
            "Yes, we offer a 14-day free trial with full access to all features, no credit card required.",
        },
        {
          question: "Do you offer annual discounts?",
          answer:
            "Yes, save up to 20% when you pay annually. Enterprise customers get additional volume discounts.",
        },
      ],
    },
    {
      id: "support",
      label: "Support",
      faqs: [
        {
          question: "How can I contact support?",
          answer:
            "Our support team is available 24/7 via chat, email, and phone.",
        },
        {
          question: "Do you offer onboarding help?",
          answer:
            "Yes, our success managers provide guided onboarding for all new teams.",
        },
        {
          question: "Is there a knowledge base?",
          answer:
            "Yes, we have a comprehensive knowledge base with tutorials, guides, and best practices.",
        },
        {
          question: "Do you provide training sessions?",
          answer:
            "We offer live training sessions, webinars, and recorded tutorials for all users.",
        },
      ],
    },
  ],
  className,
}: Faq18Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="grid gap-8 py-12 lg:grid-cols-3">
          {/* Left side */}
          <div className="flex flex-col gap-4">
            <Badge variant="outline" className="w-fit rounded-full">
              {badge}
            </Badge>
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl lg:text-5xl">{title}</h2>
              <p className="max-w-md pb-6 text-sm text-muted-foreground lg:text-base">
                {description}
              </p>
            </div>
          </div>

          {/* Right side */}
          <div className="col-span-2 lg:pl-12">
            <Tabs defaultValue={categories[0]?.id} className="w-full gap-4">
              <TabsList
                variant="line"
                className="w-full justify-start bg-transparent"
              >
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {categories.map((category) => (
                <TabsContent
                  key={category.id}
                  value={category.id}
                  className="space-y-1"
                >
                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, idx) => (
                      <AccordionItem
                        key={idx}
                        value={`faq-${idx}`}
                        className="last:border-b"
                      >
                        <AccordionTrigger className="py-4 hover:no-underline">
                          <p className="text-base font-normal lg:text-lg">
                            {faq.question}
                          </p>
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Faq18 };
