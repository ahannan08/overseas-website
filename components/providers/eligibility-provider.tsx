"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { EligibilityDialog } from "@/components/forms/eligibility-dialog";

type EligibilityOptions = {
  visaType?: "visit" | "student";
};

type EligibilityContextValue = {
  openEligibility: (options?: EligibilityOptions) => void;
};

const EligibilityContext = createContext<EligibilityContextValue | null>(null);

export function EligibilityProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [defaultVisaType, setDefaultVisaType] = useState<
    "visit" | "student" | undefined
  >();

  const openEligibility = useCallback((options?: EligibilityOptions) => {
    setDefaultVisaType(options?.visaType);
    setOpen(true);
  }, []);

  return (
    <EligibilityContext.Provider value={{ openEligibility }}>
      {children}
      <EligibilityDialog
        open={open}
        onOpenChange={setOpen}
        defaultVisaType={defaultVisaType}
      />
    </EligibilityContext.Provider>
  );
}

export function useEligibility() {
  const context = useContext(EligibilityContext);
  if (!context) {
    throw new Error("useEligibility must be used within EligibilityProvider");
  }
  return context;
}
