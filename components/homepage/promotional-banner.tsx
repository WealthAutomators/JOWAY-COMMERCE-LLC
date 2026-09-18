import Link from "next/link";
import Image from "next/image";
import { promotionalBanner } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function PromotionalBanner() {
  return (
    <section className="py-8 md:py-12">
      <Container>
        <div className="relative min-h-[320px] overflow-hidden md:min-h-[420px]">
          <Image
            src={promotionalBanner.image}
            alt={promotionalBanner.title}
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div className="absolute inset-0 bg-deep/55" />
          <div className="relative flex min-h-[320px] flex-col items-start justify-center p-8 md:min-h-[420px] md:p-16">
            <h2 className="max-w-xl font-serif text-3xl text-ivory md:text-5xl">
              {promotionalBanner.title}
            </h2>
            <p className="mt-4 max-w-lg text-ivory/85 leading-relaxed">{promotionalBanner.description}</p>
            <Button asChild size="lg" className="mt-8 bg-ivory text-deep hover:bg-sand">
              <Link href={promotionalBanner.buttonLink}>{promotionalBanner.buttonText}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
