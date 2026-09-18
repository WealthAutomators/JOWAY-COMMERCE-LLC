import { Suspense } from "react";
import { ShopContent } from "@/components/shop/shop-content";

export const metadata = {
  title: "Shop",
  description: "Shop contemporary home, kitchen, travel, and everyday pieces from JOWAY COMMERCE LLC.",
};

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="py-16 text-center">Loading...</div>}>
      <ShopContent />
    </Suspense>
  );
}
