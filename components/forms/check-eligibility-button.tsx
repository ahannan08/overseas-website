"use client";

import type { VariantProps } from "class-variance-authority";
import { Button, buttonVariants } from "@/components/ui/button";
import { useEligibility } from "@/components/providers/eligibility-provider";
import { cn } from "@/lib/utils";

type CheckEligibilityButtonProps = {
  defaultVisaType?: "visit" | "student";
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

export function CheckEligibilityButton({
  defaultVisaType,
  variant = "default",
  size = "default",
  className,
  children = "Check Eligibility",
  onClick,
}: CheckEligibilityButtonProps) {
  const { openEligibility } = useEligibility();

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      className={cn(className)}
      onClick={() => {
        onClick?.();
        openEligibility(
          defaultVisaType ? { visaType: defaultVisaType } : undefined
        );
      }}
    >
      {children}
    </Button>
  );
}
