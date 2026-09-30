"use client";
import { useState, useEffect } from "react";
import { Users } from "lucide-react";
import { useMounted } from "@/hooks/useMounted";

export function LiveCounter() {
  const mounted = useMounted();
  const [count, setCount] = useState(47);

  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      setCount((prev) => {
        const change = Math.floor(Math.random() * 5) - 2;
        return Math.max(30, Math.min(80, prev + change));
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200 px-4 py-2 text-sm">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
      </span>
      <Users className="h-4 w-4 text-green-700" />
      <span className="font-semibold text-green-800">{count} عميل</span>
      <span className="text-green-700">يتصفحون الموقع الآن</span>
    </div>
  );
}