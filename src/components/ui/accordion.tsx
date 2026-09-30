"use client";
import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionContextType {
  openItems: Set<string>;
  toggle: (id: string) => void;
  type: "single" | "multiple";
}

const AccordionContext = React.createContext<AccordionContextType | null>(null);

interface AccordionProps {
  children: React.ReactNode;
  type?: "single" | "multiple";
  className?: string;
}

export function Accordion({ children, type = "single", className }: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (type === "single") {
        if (next.has(id)) {
          next.clear();
        } else {
          next.clear();
          next.add(id);
        }
      } else {
        if (next.has(id)) next.delete(id);
        else next.add(id);
      }
      return next;
    });
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggle, type }}>
      <div className={cn("space-y-3", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

const ItemContext = React.createContext<string>("");

export function AccordionItem({ value, children, className }: AccordionItemProps) {
  return (
    <ItemContext.Provider value={value}>
      <div className={cn("rounded-2xl border border-border bg-card overflow-hidden", className)}>
        {children}
      </div>
    </ItemContext.Provider>
  );
}

export function AccordionTrigger({ children, className }: { children: React.ReactNode; className?: string }) {
  const value = React.useContext(ItemContext);
  const ctx = React.useContext(AccordionContext);
  if (!ctx) return null;

  const isOpen = ctx.openItems.has(value);

  return (
    <button
      type="button"
      onClick={() => ctx.toggle(value)}
      className={cn(
        "flex w-full items-center justify-between p-5 text-right font-semibold text-brand-dark hover:bg-muted/50 transition-colors",
        className
      )}
      aria-expanded={isOpen}
    >
      <span className="flex-1">{children}</span>
      <ChevronDown
        className={cn(
          "h-5 w-5 shrink-0 text-brand-primary transition-transform duration-200",
          isOpen && "rotate-180"
        )}
      />
    </button>
  );
}

export function AccordionContent({ children, className }: { children: React.ReactNode; className?: string }) {
  const value = React.useContext(ItemContext);
  const ctx = React.useContext(AccordionContext);
  if (!ctx) return null;

  const isOpen = ctx.openItems.has(value);
  if (!isOpen) return null;

  return (
    <div className={cn("px-5 pb-5 pt-0 text-muted-foreground leading-relaxed", className)}>
      {children}
    </div>
  );
}