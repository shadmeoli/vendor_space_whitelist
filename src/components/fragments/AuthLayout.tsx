"use client";
import React from "react";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid-pattern";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { useFormContext } from "@/context/FormContext";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    state,
    business_name,
    username,
    phone_number,
    email,
    account_password,
    setState,
    setBusinessName,
    setUsername,
    setPhoneNumber,
    setEmail,
    setAccountPassword,
  } = useFormContext();

  return (
    <main className="max-h-auto relative flex h-[100vh] min-h-[100vh] w-[100vw] max-w-[100vw] flex-col items-center justify-center font-primary md:max-h-screen md:flex-row">
      <section className="relative flex h-full w-full items-center justify-center bg-gradient-to-bl from-green via-amber to-lime md:h-full md:w-[60vw]">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[10%] h-[60vh] skew-y-12",
          )}
        />
        <blockquote className="relative z-10 flex h-60 w-96 flex-col items-start justify-center rounded-2xl bg-opacity-20 bg-gradient-to-bl from-white/40 to-lime/40 p-8 font-primary text-4xl backdrop-blur-xl md:w-[30vw]">
          <span className="font-primary text-2xl">
            <span className="font-mono text-6xl font-light">{'"'}</span>
            The Kenyan market is extensive but faces significant challenges in
            inventory management.
          </span>
          <span className="absolute bottom-4 right-10 mt-4 text-end text-sm font-bold text-orange">
            Vendor Space C.E.O
          </span>
        </blockquote>
      </section>
      <section className="min-h-[70vh] w-full overflow-y-auto bg-orange md:flex md:h-full md:w-[40vw] md:flex-col md:items-center md:justify-center">
        {children}
      </section>
    </main>
  );
}
