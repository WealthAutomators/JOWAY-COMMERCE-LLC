import { NavLink } from "@/types";
import { categories } from "./categories";

export const navigationLinks: NavLink[] = [
  { label: "Shop", href: "/shop" },
  {
    label: "Categories",
    href: "/categories",
    children: categories.map((c) => ({
      label: c.name,
      href: `/categories/${c.slug}`,
    })),
  },
  { label: "The Edit", href: "/shop?collection=joway-edit" },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "Best Sellers", href: "/best-sellers" },
  { label: "About", href: "/about" },
];

export const footerLinks = {
  shop: [
    { label: "Shop All", href: "/shop" },
    { label: "Categories", href: "/categories" },
    { label: "New Arrivals", href: "/new-arrivals" },
    { label: "Best Sellers", href: "/best-sellers" },
    { label: "The JOWAY Edit", href: "/shop?collection=joway-edit" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ],
  customerCare: [
    { label: "Shipping", href: "/shipping" },
    { label: "Returns", href: "/returns" },
    { label: "Track Order", href: "/track-order" },
    { label: "Refund Policy", href: "/refund" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

export const paymentMethods = [
  { name: "Visa", icon: "/payments/visa.svg" },
  { name: "Mastercard", icon: "/payments/mastercard.svg" },
  { name: "Amex", icon: "/payments/amex.svg" },
  { name: "PayPal", icon: "/payments/paypal.svg" },
  { name: "Apple Pay", icon: "/payments/apple-pay.svg" },
];
