"use client";

import React, { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface Question {
  question: string;
  answer: string;
}

interface Faq19Props {
  className?: string;
  heading?: string;
  questions?: {
    [key: string]: Question[];
  };
}

const Faq19 = ({
  className,
  heading = "Frequently asked questions",
  questions = {
    General: [
      {
        question: "What is the purpose of a FAQ?",
        answer:
          "The purpose of a FAQ is to provide answers to common questions and help users find the information they need quickly and easily.",
      },
      {
        question: "How do I get started?",
        answer:
          "Getting started is simple! Just sign up for an account, complete the onboarding process, and you'll be ready to use all our features within minutes.",
      },
      {
        question: "What platforms do you support?",
        answer:
          "We support all major platforms including web browsers (Chrome, Firefox, Safari, Edge), mobile apps for iOS and Android, and desktop applications for Windows, macOS, and Linux. Our API also allows for seamless integration with third-party tools and services.",
      },
      {
        question: "Is there a mobile app?",
        answer:
          "Yes, we have native mobile apps available for both iOS and Android devices.",
      },
      {
        question: "How can I contact support?",
        answer:
          "You can reach our support team through multiple channels: email support (support@company.com), live chat on our website, or by submitting a ticket through your account dashboard. Our team typically responds within 24 hours, and we offer priority support for premium users with faster response times.",
      },
    ],
    "Plans & Pricing": [
      {
        question: "What pricing plans do you offer?",
        answer:
          "We offer three main pricing tiers: Free (basic features), Pro ($29/month with advanced features), and Enterprise (custom pricing with full features and dedicated support).",
      },
      {
        question: "Can I change my plan anytime?",
        answer:
          "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.",
      },
      {
        question: "Do you offer refunds?",
        answer:
          "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied with our service, you can request a full refund within the first 30 days of your subscription.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise customers.",
      },
      {
        question: "Is there a free trial?",
        answer:
          "Yes, we offer a 14-day free trial for our Pro plan with no credit card required. You can explore all premium features and decide if it's right for you.",
      },
      {
        question: "What's included in the Enterprise plan?",
        answer:
          "The Enterprise plan includes everything in Pro plus: unlimited users, advanced security features, dedicated account manager, custom integrations, priority support, SSO authentication, advanced analytics, and custom training sessions for your team.",
      },
    ],
    Privacy: [
      {
        question: "How do you protect my data?",
        answer:
          "We use industry-standard encryption (AES-256) for data at rest and TLS 1.3 for data in transit. All data is stored in SOC 2 compliant data centers with regular security audits.",
      },
      {
        question: "Do you sell my personal information?",
        answer:
          "No, we never sell your personal information to third parties. We only use your data to provide and improve our services.",
      },
      {
        question: "Can I delete my account and data?",
        answer:
          "Yes, you can delete your account at any time through your account settings. We'll permanently delete all your data within 30 days of account deletion, except where we're legally required to retain certain information.",
      },
      {
        question: "Where is my data stored?",
        answer:
          "Your data is stored in secure data centers located in the United States and European Union, depending on your region. We ensure compliance with GDPR, CCPA, and other relevant privacy regulations.",
      },
      {
        question: "Who has access to my data?",
        answer:
          "Only authorized employees who need access to provide support or maintain our services can access your data. All access is logged and monitored, and our team members are bound by strict confidentiality agreements.",
      },
    ],
    "Responsible AI": [
      {
        question: "How do you ensure AI fairness?",
        answer:
          "We implement comprehensive bias testing, diverse training datasets, and regular algorithmic audits to ensure our AI systems treat all users fairly regardless of race, gender, age, or other protected characteristics.",
      },
      {
        question: "What AI models do you use?",
        answer:
          "We use a combination of proprietary and third-party AI models, including GPT-4, Claude, and our custom models. All models are carefully selected and continuously monitored for performance and ethical compliance.",
      },
      {
        question: "How do you handle AI hallucinations?",
        answer:
          "We implement multiple safeguards including fact-checking mechanisms, confidence scoring, and human oversight for critical decisions. Users are always informed when AI-generated content may contain uncertainties.",
      },
      {
        question: "Can I opt out of AI features?",
        answer:
          "Yes, you can disable AI-powered features in your account settings. We also provide transparency about when AI is being used in our interface.",
      },
      {
        question: "How do you ensure AI transparency?",
        answer:
          "We provide detailed explanations of how our AI systems work, what data they use, and how decisions are made. We also offer audit logs and decision trails for AI-generated content and recommendations.",
      },
      {
        question: "What are your AI ethics guidelines?",
        answer:
          "Our AI ethics guidelines are based on principles of fairness, transparency, accountability, and human-centered design. We regularly review and update these guidelines with input from ethicists, users, and industry experts to ensure our AI systems benefit society while minimizing potential harms.",
      },
    ],
  },
}: Faq19Props) => {
  const [activeTab, setActiveTab] = useState<string>("General");

  const categories = Object.keys(questions);

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="flex flex-col gap-20">
          <h3 className="text-3xl leading-14 font-semibold md:max-w-sm md:text-5xl">
            {heading}
          </h3>
          <div className="hidden w-full items-start gap-16 md:flex lg:gap-28">
            <ul className="flex min-w-60 flex-col gap-4 lg:min-w-90">
              {categories.map((category, index) => {
                const isActive = activeTab === category;

                return (
                  <li
                    key={`faq19-category-${index}`}
                    className={cn(
                      "w-full rounded-lg px-8 py-3 font-medium text-muted-foreground",
                      isActive
                        ? "bg-muted text-foreground"
                        : "cursor-pointer hover:bg-muted/50",
                    )}
                    onClick={() => setActiveTab(category)}
                  >
                    {category}
                  </li>
                );
              })}
            </ul>
            <div className="flex w-full flex-col gap-4 pt-2">
              <p className="text-xl font-medium text-muted-foreground">
                {activeTab}
              </p>

              <Accordion type="multiple" className="flex flex-col">
                {questions[activeTab].map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b py-2 transition-opacity duration-200 last:border-b hover:opacity-70"
                  >
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
          <div className="flex w-full flex-col md:hidden">
            <Accordion type="multiple" className="flex flex-col">
              {categories.map((category, index) => (
                <AccordionItem
                  key={`faq19-category-${index}`}
                  value={`category-${index}`}
                  className="border-none py-2"
                >
                  <AccordionTrigger className="rounded-none border-b border-foreground text-lg font-semibold hover:no-underline">
                    {category}
                  </AccordionTrigger>
                  <AccordionContent>
                    <Accordion type="multiple" className="flex flex-col">
                      {questions[activeTab].map((item, index) => (
                        <AccordionItem
                          key={index}
                          value={`item-${index}`}
                          className="border-b py-2 transition-opacity duration-200 last:border-b hover:opacity-70"
                        >
                          <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                            {item.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-base text-muted-foreground">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Faq19 };
