"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { company } from "@/data/company";
import { navigationLinks } from "@/data/navigation";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/navbar/search-bar";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { itemCount, isHydrated: cartReady } = useCart();
  const { wishlist, isHydrated: wishlistReady } = useWishlist();

  return (
    <header className="border-b border-border/80 bg-ivory/90 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center gap-6 lg:h-[4.5rem]">
          <Link href="/" className="flex shrink-0 flex-col justify-center leading-none">
            <span className="font-serif text-[1.35rem] tracking-[0.28em] text-foreground sm:text-[1.5rem]">
              JOWAY
            </span>
            <span className="mt-1 hidden text-[9px] font-medium uppercase tracking-[0.32em] text-primary sm:block">
              Commerce LLC
            </span>
            <span className="sr-only">{company.name}</span>
          </Link>

          <nav className="hidden flex-1 justify-center lg:flex">
            <ul className="flex items-center gap-1">
              {navigationLinks.map((link) => (
                <li
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="inline-flex items-center px-3 py-2 text-[12px] font-medium uppercase tracking-[0.16em] text-foreground/80 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                  {link.children && activeDropdown === link.label && (
                    <div className="absolute left-0 top-full z-50 mt-0 min-w-[220px] border border-border bg-ivory py-3 shadow-sm">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-0.5">
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9"
              onClick={() => setSearchOpen((open) => !open)}
              aria-label={searchOpen ? "Close search" : "Open search"}
              aria-expanded={searchOpen}
            >
              {searchOpen ? <X className="h-[18px] w-[18px]" /> : <Search className="h-[18px] w-[18px]" />}
            </Button>

            <Button variant="ghost" size="icon" asChild className="relative h-9 w-9">
              <Link href="/wishlist" aria-label="Wishlist">
                <Heart className="h-[18px] w-[18px]" />
                {wishlistReady && wishlist.length > 0 && (
                  <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[9px] font-medium text-primary-foreground">
                    {wishlist.length}
                  </span>
                )}
              </Link>
            </Button>

            <Button variant="ghost" size="icon" asChild className="h-9 w-9">
              <Link href="/profile" aria-label="Account">
                <User className="h-[18px] w-[18px]" />
              </Link>
            </Button>

            <Button variant="ghost" size="icon" asChild className="relative h-9 w-9">
              <Link href="/cart" aria-label="Cart">
                <ShoppingBag className="h-[18px] w-[18px]" />
                {cartReady && itemCount > 0 && (
                  <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[9px] font-medium text-primary-foreground">
                    {itemCount}
                  </span>
                )}
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
            </Button>
          </div>
        </div>
      </Container>

      {searchOpen && (
        <div className="border-t border-border bg-ivory">
          <SearchBar onNavigate={() => setSearchOpen(false)} />
        </div>
      )}

      {mobileOpen && (
        <div className="border-t border-border bg-ivory lg:hidden">
          <Container className="py-4">
            <ul className="space-y-0.5">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block px-1 py-2.5 text-sm font-medium uppercase tracking-[0.14em]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <ul className="mb-2 ml-3 space-y-0.5 border-l border-border pl-3">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block py-1.5 text-sm text-muted-foreground hover:text-primary"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}
