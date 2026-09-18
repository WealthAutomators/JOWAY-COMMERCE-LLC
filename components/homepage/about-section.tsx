import Image from "next/image";
import Link from "next/link";
import { aboutSection } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden bg-sand md:aspect-[5/6]">
            <Image
              src={aboutSection.image}
              alt={aboutSection.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary">Brand philosophy</p>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl">{aboutSection.title}</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">{aboutSection.description}</p>
            <ul className="mt-8 space-y-3">
              {aboutSection.checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed">
                  <span className="mt-2 h-px w-6 shrink-0 bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild size="lg" variant="outline" className="mt-10">
              <Link href={aboutSection.buttonLink}>{aboutSection.buttonText}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
