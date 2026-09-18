"use client";

import Link from "next/link";
import { company } from "@/data/company";
import { Navbar } from "@/components/navbar/navbar";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  return (
    <div className="sticky top-0 z-50">
      <div className="bg-deep text-primary-foreground">
        <Container className="flex h-8 items-center justify-between gap-4 text-[10px] uppercase tracking-[0.18em] sm:h-9 sm:text-[11px]">
          <p className="truncate">Complimentary shipping on orders over $75</p>
          <div className="hidden items-center gap-6 md:flex">
            <span>Cocoa Beach, FL</span>
            <a href={`mailto:${company.email}`} className="transition-opacity hover:opacity-80">
              {company.email}
            </a>
          </div>
        </Container>
      </div>
      <Navbar />
    </div>
  );
}
