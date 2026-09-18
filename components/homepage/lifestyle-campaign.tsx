"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/types";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product/product-card";
import { cn } from "@/lib/utils";

interface LifestyleCampaignProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  products: Product[];
  reverse?: boolean;
}

export function LifestyleCampaign({
  eyebrow,
  title,
  description,
  image,
  ctaText,
  ctaLink,
  products,
  reverse = false,
}: LifestyleCampaignProps) {
  return (
    <section className="py-8 md:py-12">
      <Container>
        <div className={cn("grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12", reverse && "lg:[&>*:first-child]:order-2")}>
          <motion.div
            className="relative min-h-[360px] overflow-hidden bg-sand md:min-h-[520px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-deep/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 text-ivory md:p-10">
              <p className="text-[11px] uppercase tracking-[0.22em] text-ivory/75">{eyebrow}</p>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl">{title}</h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ivory/85">{description}</p>
              <Button asChild size="lg" className="mt-6 bg-ivory text-deep hover:bg-sand">
                <Link href={ctaLink}>{ctaText}</Link>
              </Button>
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-4 md:gap-5">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
