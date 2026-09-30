"use client";
import { useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200/60 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] transition-all">
      <div className="container mx-auto px-4">
        <div className="flex h-20 md:h-24 items-center justify-between">
          <Logo />
          <div className="flex items-center gap-3">
            <Button asChild variant="whatsapp" size="sm" className="hidden sm:inline-flex h-11 rounded-xl shadow-md">
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" /> واتساب
              </a>
            </Button>
            <Button asChild size="sm" className="bg-brand-primary text-white hover:bg-brand-dark h-11 rounded-xl shadow-md font-bold px-6">
              <a href={`tel:${siteConfig.phone}`}>
                <Phone className="h-4 w-4" /> 
                <span className="hidden sm:inline">اتصل بنا</span>
                <span className="sm:hidden" dir="ltr">{siteConfig.phone}</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}