import { company, formatAddressLines } from "@/data/company";
import { testimonials } from "@/data/testimonials";
import { PageHero, PageSection } from "@/components/ui/page-layout";
import { Container } from "@/components/ui/container";
import { StarRating } from "@/components/ui/star-rating";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About",
  description: company.description,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About JOWAY"
        description="A contemporary lifestyle retailer for bright rooms, easy weekends, and everyday objects chosen with care."
        breadcrumbs={[{ label: "About" }]}
      />

      <Container className="pb-16">
        <div className="grid items-center gap-10 py-12 md:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden bg-sand">
            <Image src="/banners/about.jpg" alt={`About ${company.name}`} fill className="object-cover" sizes="50vw" />
          </div>
          <PageSection title="Our approach">
            <p>
              JOWAY COMMERCE LLC is a contemporary lifestyle shop. We gather pieces for home, kitchen,
              travel, and everyday living — objects that feel at ease in a sunlit room and hold up to
              regular use.
            </p>
            <p className="mt-4">
              The Cocoa Beach influence is in the light and the pace, not in souvenir graphics. We look
              for materials, silhouettes, and photography that feel calm, modern, and practical. We do
              not invent a longer history than we have: the work is simply to choose well.
            </p>
            <p className="mt-4 text-sm">
              {formatAddressLines().join(" · ")}
              <br />
              <a href={`mailto:${company.email}`} className="text-primary underline-offset-4 hover:underline">
                {company.email}
              </a>
            </p>
          </PageSection>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { title: "Considered mix", desc: "Home, table, travel, and everyday carry — balanced rather than overflowing." },
            { title: "Useful first", desc: "If it does not earn a place in a real room, it does not belong in the catalog." },
            { title: "Straightforward service", desc: "Clear shipping, a 30-day return window, and a working demo checkout." },
          ].map(({ title, desc }) => (
            <div key={title} className="border border-border bg-card p-6">
              <h3 className="font-serif text-xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <PageSection title="From recent orders" className="mt-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.slice(0, 8).map((t) => (
              <div key={t.id} className="border border-border bg-card p-6">
                <StarRating rating={t.rating} showCount={false} size="md" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">&ldquo;{t.text}&rdquo;</p>
                <p className="mt-4 text-sm font-medium">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            ))}
          </div>
        </PageSection>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/shop">Shop the collection</Link>
          </Button>
        </div>
      </Container>
    </>
  );
}
