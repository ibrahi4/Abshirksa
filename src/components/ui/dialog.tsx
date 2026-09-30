"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface DialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in-0">
      <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl border border-border">
        <button
          type="button"
          onClick={() => onOpenChange?.(false)}
          className="absolute left-4 top-4 rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        {children}
      </div>
    </div>
  );
}

export function DialogTrigger({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return <div onClick={onClick} className="inline-block cursor-pointer">{children}</div>;
}

export function DialogContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("space-y-4 text-right", className)}>{children}</div>;
}

export function DialogHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("space-y-1.5 text-right", className)}>{children}</div>;
}

export function DialogTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h2 className={cn("text-xl font-bold text-brand-dark", className)}>{children}</h2>;
}

export function DialogDescription({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>;
}