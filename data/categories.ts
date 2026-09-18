import { Category } from "@/types";
import { products } from "./products";

function countFor(slug: string): number {
  return products.filter((p) => p.categorySlug === slug).length;
}

export const categories: Category[] = [
  {
    id: "1",
    slug: "home",
    name: "Home",
    image: "/categories/home.jpg",
    description: "Lighting, textiles, and quiet objects for sunlit rooms.",
    productCount: countFor("home"),
  },
  {
    id: "2",
    slug: "kitchen-dining",
    name: "Kitchen + Dining",
    image: "/categories/kitchen-dining.jpg",
    description: "Tableware, drinkware, and tools for everyday meals.",
    productCount: countFor("kitchen-dining"),
  },
  {
    id: "3",
    slug: "outdoor-leisure",
    name: "Outdoor + Leisure",
    image: "/categories/outdoor-leisure.jpg",
    description: "Patio, picnic, and easy outdoor living pieces.",
    productCount: countFor("outdoor-leisure"),
  },
  {
    id: "4",
    slug: "travel",
    name: "Travel",
    image: "/categories/travel.jpg",
    description: "Weekenders, organizers, and packing essentials.",
    productCount: countFor("travel"),
  },
  {
    id: "5",
    slug: "everyday",
    name: "Everyday",
    image: "/categories/everyday.jpg",
    description: "Bags, organizers, and personal utility for daily carry.",
    productCount: countFor("everyday"),
  },
  {
    id: "6",
    slug: "apparel-accessories",
    name: "Apparel + Accessories",
    image: "/categories/apparel-accessories.jpg",
    description: "Contemporary basics and refined lifestyle accessories.",
    productCount: countFor("apparel-accessories"),
  },
  {
    id: "7",
    slug: "wellness",
    name: "Wellness",
    image: "/categories/wellness.jpg",
    description: "Recovery, movement, and calm personal-care accessories.",
    productCount: countFor("wellness"),
  },
  {
    id: "8",
    slug: "tech-workspace",
    name: "Tech + Workspace",
    image: "/categories/tech-workspace.jpg",
    description: "Desk tools and practical electronics for a quieter workspace.",
    productCount: countFor("tech-workspace"),
  },
  {
    id: "9",
    slug: "gifts",
    name: "Gifts",
    image: "/categories/gifts.jpg",
    description: "Curated pieces for the home, travel, and personal gifting.",
    productCount: countFor("gifts"),
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
