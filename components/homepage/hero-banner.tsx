"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { heroSlides } from "@/data/homepage";
import { Button } from "@/components/ui/button";

export function HeroBanner() {
  const slide = heroSlides[0];

  return (
    <section className="relative min-h-[78vh] w-full overflow-hidden md:min-h-[88vh]">
      <Image
        src={slide.image}
        alt={slide.headline}
        fill
        className="object-cover object-[center_40%]"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-deep/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep/35 via-transparent to-transparent" />

      <div className="relative mx-auto flex min-h-[78vh] w-full max-w-[1280px] items-end px-4 pb-16 pt-32 sm:px-6 md:min-h-[88vh] md:pb-24 lg:px-8">
        <motion.div
          className="max-w-2xl text-ivory"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[11px] uppercase tracking-[0.28em] text-ivory/80">Cocoa Beach Contemporary</p>
          <h1 className="mt-4 font-serif text-4xl font-normal leading-[1.1] sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            {slide.headline}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-ivory/85 sm:text-lg">{slide.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-ivory text-deep hover:bg-sand">
              <Link href={slide.ctaLink}>{slide.ctaText}</Link>
            </Button>
            {slide.secondaryCtaText && slide.secondaryCtaLink && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-ivory/50 bg-transparent text-ivory hover:bg-ivory hover:text-deep"
              >
                <Link href={slide.secondaryCtaLink}>{slide.secondaryCtaText}</Link>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
