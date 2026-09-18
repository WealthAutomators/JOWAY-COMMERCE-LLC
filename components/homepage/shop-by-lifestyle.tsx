"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { lifestyleTiles } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ShopByLifestyle() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Shop by lifestyle"
          title="How you live, not just what you buy."
          subtitle="Nine considered categories — from rooms and tables to travel and everyday carry."
        />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-6">
          {lifestyleTiles.map((tile, index) => (
            <motion.div
              key={tile.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
            >
              <Link href={tile.href} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden bg-sand">
                  <Image
                    src={tile.image}
                    alt={tile.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 16vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-deep/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="font-serif text-lg text-ivory">{tile.name}</p>
                    <p className="mt-1 text-xs text-ivory/75">{tile.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
