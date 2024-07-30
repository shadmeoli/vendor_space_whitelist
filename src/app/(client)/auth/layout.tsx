"use client";
import React from "react";
import { FormProvider } from "@/context/FormContext";
import AuthLayout from "@/components/fragments/AuthLayout";

export default function Auth({ children }: { children: React.ReactNode }) {
  return (
    <FormProvider>
      <AuthLayout>{children}</AuthLayout>
    </FormProvider>
  );
}
