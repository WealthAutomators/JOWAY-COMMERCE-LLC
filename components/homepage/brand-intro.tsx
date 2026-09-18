"use client";

import { motion } from "framer-motion";
import { brandIntro } from "@/data/homepage";
import { Container } from "@/components/ui/container";

export function BrandIntro() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <Container>
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-primary">{brandIntro.eyebrow}</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight md:text-5xl">{brandIntro.title}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {brandIntro.description}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
