import { Truck, RotateCcw, Shield, Star } from "lucide-react";
import { features } from "@/data/homepage";
import { Container } from "@/components/ui/container";

const iconMap = {
  truck: Truck,
  shield: Shield,
  rotate: RotateCcw,
  star: Star,
  headphones: Shield,
};

export function FeaturesRow() {
  return (
    <section className="border-y border-border bg-ivory py-12 md:py-14">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap] || Truck;
            return (
              <div key={feature.id} className="flex gap-4">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="text-sm font-medium">{feature.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
