"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { jowayEditSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";

export function JowayEdit() {
  const products = getProductsBySlugs(jowayEditSlugs);
  const [lead, ...rest] = products;

  if (!lead) return null;

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary">Signature collection</p>
            <h2 className="mt-2 font-serif text-4xl md:text-5xl">The JOWAY Edit</h2>
            <p className="mt-3 max-w-xl text-muted-foreground leading-relaxed">
              A cross-category selection — coastal essentials, weekend pieces, and everyday objects we would actually live with.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/shop?collection=joway-edit">Shop the Edit</Link>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-12 md:gap-5">
          <motion.article
            className="group relative min-h-[420px] overflow-hidden bg-sand md:col-span-7 md:min-h-[560px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link href={`/product/${lead.slug}`} className="relative block h-full">
              <Image
                src={lead.images[0]}
                alt={lead.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/75 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-ivory md:p-8">
                <p className="text-[11px] uppercase tracking-[0.2em] text-ivory/70">Lead piece</p>
                <h3 className="mt-2 font-serif text-3xl">{lead.name}</h3>
                <p className="mt-2 max-w-md text-sm text-ivory/80">{lead.description}</p>
                <p className="mt-4 text-sm">{formatPrice(lead.salePrice ?? lead.price)}</p>
              </div>
            </Link>
          </motion.article>

          <div className="grid grid-cols-2 gap-4 md:col-span-5 md:gap-5">
            {rest.slice(0, 4).map((product) => (
              <Link key={product.id} href={`/product/${product.slug}`} className="group block">
                <div className="relative aspect-square overflow-hidden bg-sand">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                </div>
                <h3 className="mt-3 font-serif text-base leading-snug">{product.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{formatPrice(product.salePrice ?? product.price)}</p>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
