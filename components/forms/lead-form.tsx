"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/sections/glass-card";

const visaOptions = [
  { value: "visit", label: "Visit Visa" },
  { value: "student", label: "Student Visa" },
  { value: "work-permit", label: "Work Permit" },
];

type LeadFormProps = {
  light?: boolean;
  embedded?: boolean;
  defaultVisaType?: "visit" | "student";
  onSuccess?: () => void;
};

export function LeadForm({
  light = false,
  embedded = false,
  defaultVisaType,
  onSuccess,
}: LeadFormProps) {
  const [visaType, setVisaType] = useState<string>(defaultVisaType ?? "");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", email: "" });

  const isWorkPermit = visaType === "work-permit";
  const canSubmit =
    visaType && !isWorkPermit && form.name && form.phone && form.email && !isSubmitting;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, visaType }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setSubmitted(true);
      if (onSuccess) {
        if (embedded) {
          window.setTimeout(onSuccess, 2000);
        } else {
          onSuccess();
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const thankYou = (
    <div className={embedded ? "py-6 text-center" : "py-8 text-center"}>
      <p className="text-2xl font-bold text-accent">Thank you!</p>
      <p className={`mt-2 ${light ? "text-light-fg/70" : "text-muted"}`}>
        We&apos;ve received your enquiry and will contact you shortly.
      </p>
    </div>
  );

  if (submitted) {
    if (embedded) return thankYou;
    return (
      <GlassCard className={light ? "!bg-white !border-light-fg/10" : ""}>
        {thankYou}
      </GlassCard>
    );
  }

  const formFields = (
    <form onSubmit={handleSubmit} className={embedded ? "space-y-4" : "mt-6 space-y-4"}>
      <Input
        placeholder="Full Name *"
        required
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className={light ? "!border-light-fg/15 !bg-light-bg !text-light-fg" : ""}
      />
      <Input
        placeholder="Contact Number *"
        type="tel"
        required
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className={light ? "!border-light-fg/15 !bg-light-bg !text-light-fg" : ""}
      />
      <Input
        placeholder="Email Address *"
        type="email"
        required
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className={light ? "!border-light-fg/15 !bg-light-bg !text-light-fg" : ""}
      />
      <Select value={visaType} onValueChange={setVisaType}>
        <SelectTrigger className={light ? "!border-light-fg/15 !bg-light-bg !text-light-fg" : ""}>
          <SelectValue placeholder="Visa Type *" />
        </SelectTrigger>
        <SelectContent>
          {visaOptions.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {isWorkPermit && (
        <p className="rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">
          Sorry, we don&apos;t offer work permit for now.
        </p>
      )}

      {error && (
        <p className="rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">
          {error}
        </p>
      )}

      <Button type="submit" className="w-full" disabled={!canSubmit}>
        {isSubmitting ? "Sending..." : "Submit Details"}
      </Button>
      <p className={`text-center text-xs ${light ? "text-light-fg/50" : "text-muted"}`}>
        By submitting, you agree to our{" "}
        <Link href="/privacy-policy" className="text-accent underline-offset-2 hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );

  if (embedded) return formFields;

  return (
    <GlassCard className={light ? "!bg-white !border-light-fg/10" : ""}>
      <h3 className={`text-xl font-bold ${light ? "text-light-fg" : ""}`}>
        Send an Enquiry
      </h3>
      <p className={`mt-2 text-sm ${light ? "text-light-fg/70" : "text-muted"}`}>
        Fill in your details and our consultant will reach out.
      </p>
      {formFields}
    </GlassCard>
  );
}
