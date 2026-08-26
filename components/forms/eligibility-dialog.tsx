"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { LeadForm } from "@/components/forms/lead-form";

type EligibilityDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultVisaType?: "visit" | "student";
};

export function EligibilityDialog({
  open,
  onOpenChange,
  defaultVisaType,
}: EligibilityDialogProps) {
  const [formKey, setFormKey] = useState(0);

  useEffect(() => {
    if (open) setFormKey((key) => key + 1);
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Check Your Eligibility</DialogTitle>
          <DialogDescription>
            Fill in your details and our consultant will reach out.
          </DialogDescription>
        </DialogHeader>
        <LeadForm
          key={formKey}
          embedded
          defaultVisaType={defaultVisaType}
          onSuccess={() => onOpenChange(false)}
        />
      </DialogContent>
    </Dialog>
  );
}
