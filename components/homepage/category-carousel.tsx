"use client";

import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function CategoryCarousel() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <SectionHeading title="Shop by category" centered />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group relative overflow-hidden bg-sand"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/70 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <span className="font-serif text-lg text-ivory">{category.name}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
