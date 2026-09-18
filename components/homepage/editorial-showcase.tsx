"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { editorialShowcase } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";

export function EditorialShowcase() {
  const products = getProductsBySlugs(editorialShowcase.productSlugs);

  return (
    <section className="bg-sand/50 py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <motion.div
            className="relative aspect-[4/5] overflow-hidden bg-muted lg:col-span-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={editorialShowcase.image}
              alt={editorialShowcase.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
          <div className="lg:col-span-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary">
              {editorialShowcase.eyebrow}
            </p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">{editorialShowcase.title}</h2>
            <p className="mt-5 max-w-md text-muted-foreground leading-relaxed">{editorialShowcase.description}</p>
            <Button asChild size="lg" className="mt-8">
              <Link href={editorialShowcase.ctaLink}>{editorialShowcase.ctaText}</Link>
            </Button>
            <ul className="mt-10 divide-y divide-border border-t border-border">
              {products.map((product) => (
                <li key={product.id}>
                  <Link href={`/product/${product.slug}`} className="flex items-center gap-4 py-4 transition-colors hover:text-primary">
                    <div className="relative h-16 w-14 shrink-0 overflow-hidden bg-sand">
                      <Image src={product.images[0]} alt={product.name} fill className="object-cover" sizes="56px" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-serif text-lg">{product.name}</p>
                      <p className="text-sm text-muted-foreground">{formatPrice(product.salePrice ?? product.price)}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
