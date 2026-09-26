"use client";

import { ArrowRight, Code2, Sparkles, Zap } from "lucide-react";
import { useState } from "react";

import type { BundledLanguage } from "@/components/kibo-ui/code-block";
import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockHeader,
  CodeBlockItem,
} from "@/components/kibo-ui/code-block";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const codeSnippets = [
  {
    id: "debounce",
    title: "Debounce Hook",
    description: "Optimize API calls and search inputs",
    icon: Zap,
    language: "typescript",
    filename: "useDebounce.ts",
    code: `import { useEffect, useState } from 'react';

export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Usage
const [searchTerm, setSearchTerm] = useState('');
const debouncedSearch = useDebounce(searchTerm, 300);

useEffect(() => {
  // API call only fires after 300ms of no typing
  fetchResults(debouncedSearch);
}, [debouncedSearch]);`,
  },
  {
    id: "localStorage",
    title: "Local Storage Hook",
    description: "Persist state across sessions",
    icon: Sparkles,
    language: "typescript",
    filename: "useLocalStorage.ts",
    code: `import { useState, useEffect } from 'react';

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

// Usage
const [theme, setTheme] = useLocalStorage('theme', 'light');`,
  },
  {
    id: "fetch",
    title: "Fetch Hook",
    description: "Handle async data fetching",
    icon: Code2,
    language: "typescript",
    filename: "useFetch.ts",
    code: `import { useState, useEffect } from 'react';

interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export function useFetch<T>(
  url: string,
  options?: RequestInit
): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        const json = await response.json();
        setData(json);
        setError(null);
      } catch (err) {
        setError(err as Error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Usage
const { data, loading, error } = useFetch<User[]>('/api/users');`,
  },
];

interface CodeExample6Props {
  className?: string;
}

const CodeExample6 = ({ className }: CodeExample6Props) => {
  const [selectedSnippet, setSelectedSnippet] = useState(codeSnippets[0].id);

  const currentSnippet = codeSnippets.find((s) => s.id === selectedSnippet);

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Reusable code patterns
          </h2>
          <p className="text-lg text-muted-foreground">
            Copy-paste ready hooks and utilities to accelerate your development
            workflow.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8">
          <div className="flex flex-col gap-4 md:flex-row">
            {codeSnippets.map((snippet) => {
              const isSelected = selectedSnippet === snippet.id;
              return (
                <button
                  key={snippet.id}
                  onClick={() => setSelectedSnippet(snippet.id)}
                  className={cn(
                    "group group w-full rounded-lg border p-5 text-left transition-all",
                    isSelected
                      ? "border-primary bg-muted dark:bg-card"
                      : "border-border hover:border-primary/50 hover:bg-muted/50",
                  )}
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex-1">
                      <h3 className="font-semibold tracking-tight">
                        {snippet.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {snippet.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="font-mono">{snippet.filename}</span>
                    <ArrowRight
                      className={cn(
                        "size-3 transition-transform group-hover:translate-x-1",
                      )}
                    />
                  </div>
                </button>
              );
            })}
          </div>
          <div className="min-w-0">
            {currentSnippet && (
              <div className="rounded-lg border bg-card">
                <CodeBlock
                  data={[
                    {
                      language: currentSnippet.language,
                      filename: currentSnippet.filename,
                      code: currentSnippet.code,
                    },
                  ]}
                  value={currentSnippet.language}
                  className="w-full"
                >
                  <CodeBlockHeader className="justify-between">
                    <CodeBlockFilename value={currentSnippet.language}>
                      {currentSnippet.filename}
                    </CodeBlockFilename>
                    <CodeBlockCopyButton
                      onCopy={() => console.log("Copied code to clipboard")}
                      onError={() =>
                        console.error("Failed to copy code to clipboard")
                      }
                    />
                  </CodeBlockHeader>
                  <ScrollArea>
                    <CodeBlockBody>
                      {(item) => (
                        <CodeBlockItem
                          key={item.language}
                          value={item.language}
                          className="max-h-[500px]"
                        >
                          <CodeBlockContent
                            language={item.language as BundledLanguage}
                          >
                            {item.code}
                          </CodeBlockContent>
                        </CodeBlockItem>
                      )}
                    </CodeBlockBody>
                    <ScrollBar orientation="horizontal" />
                  </ScrollArea>
                </CodeBlock>
              </div>
            )}
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            Explore more patterns
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export { CodeExample6 };
