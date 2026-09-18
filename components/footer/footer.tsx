import Link from "next/link";
import Image from "next/image";
import { company, formatAddressLines } from "@/data/company";
import { footerLinks, paymentMethods } from "@/data/navigation";
import { Container } from "@/components/ui/container";

export function Footer() {
  const addressLines = formatAddressLines();

  return (
    <footer className="mt-8 border-t border-border bg-deep text-primary-foreground">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-serif text-2xl tracking-[0.22em]">JOWAY</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-primary-foreground/70">
              Commerce LLC
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
              {company.description}
            </p>
            <address className="mt-8 not-italic text-sm leading-relaxed text-primary-foreground/80">
              {addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              <a
                href={`mailto:${company.email}`}
                className="mt-3 inline-block text-primary-foreground underline-offset-4 hover:underline"
              >
                {company.email}
              </a>
            </address>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-primary-foreground/55">
              Shop
            </h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-primary-foreground/55">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-primary-foreground/55">
              Help
            </h3>
            <ul className="space-y-3">
              {footerLinks.customerCare.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-primary-foreground/55">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-start justify-between gap-4 py-6 sm:flex-row sm:items-center">
          <p className="text-xs text-primary-foreground/60">{company.copyright}</p>
          <div className="flex items-center gap-2">
            {paymentMethods.map((method) => (
              <Image
                key={method.name}
                src={method.icon}
                alt={method.name}
                width={40}
                height={28}
                className="h-7 w-auto opacity-80"
              />
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
