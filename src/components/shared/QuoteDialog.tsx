"use client";
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { InlineQuoteForm } from "@/components/shared/InlineQuoteForm";

interface QuoteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function QuoteDialog({ open, onOpenChange }: QuoteDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>طلب عرض سعر جديد</DialogTitle>
          <DialogDescription>
            قم بملء النموذج للحصول على عرض سعر فوري
          </DialogDescription>
        </DialogHeader>
        <InlineQuoteForm compact />
      </DialogContent>
    </Dialog>
  );
}
export default QuoteDialog;