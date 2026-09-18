"use client";

import { memo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Product } from "@/types";
import { formatPrice, calculateDiscount } from "@/lib/format";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { QuickViewModal } from "@/components/product/quick-view-modal";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard = memo(function ProductCard({ product, className }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);
  const hasDiscount = product.salePrice && product.salePrice < product.price;
  const discountPercent = hasDiscount ? calculateDiscount(product.price, product.salePrice!) : 0;

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <>
      <motion.div
        className={cn("group relative flex flex-col", className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-sand">
          <Link href={`/product/${product.slug}`} className="relative block h-full w-full">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              loading="lazy"
              className={cn(
                "object-cover transition-all duration-700 ease-out",
                isHovered && product.images[1] ? "opacity-0 scale-[1.03]" : "opacity-100"
              )}
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            {product.images[1] && (
              <Image
                src={product.images[1]}
                alt={`${product.name} alternate view`}
                fill
                loading="lazy"
                className={cn(
                  "object-cover transition-all duration-700 ease-out",
                  isHovered ? "opacity-100 scale-[1.03]" : "opacity-0"
                )}
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            )}
          </Link>

          {hasDiscount && (
            <Badge variant="sale" className="absolute left-3 top-3">
              −{discountPercent}%
            </Badge>
          )}
          {product.badge && !hasDiscount && (
            <Badge variant="outline" className="absolute left-3 top-3 bg-ivory/90">
              {product.badge}
            </Badge>
          )}
          {product.newArrival && !product.badge && !hasDiscount && (
            <Badge variant="outline" className="absolute left-3 top-3 bg-ivory/90">
              New
            </Badge>
          )}

          <button
            type="button"
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-ivory/90 text-foreground transition-colors hover:text-primary"
            onClick={() => toggleWishlist(product.id)}
            aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart className={cn("h-4 w-4", inWishlist && "fill-primary text-primary")} />
          </button>

          <div className="absolute inset-x-3 bottom-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 max-sm:translate-y-0 max-sm:opacity-100">
            <div className="flex gap-2">
              <Button className="flex-1" size="sm" onClick={handleAddToCart}>
                {added ? (
                  <>
                    <Check className="h-3.5 w-3.5" />
                    Added
                  </>
                ) : (
                  <>
                    <ShoppingBag className="h-3.5 w-3.5" />
                    Add
                  </>
                )}
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="hidden sm:inline-flex"
                onClick={() => setQuickViewOpen(true)}
              >
                View
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-1 flex-col gap-1">
          <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{product.category}</p>
          <Link href={`/product/${product.slug}`}>
            <h3 className="font-serif text-[1.05rem] leading-snug text-foreground transition-colors hover:text-primary">
              {product.name}
            </h3>
          </Link>
          <div className="mt-2 flex items-center gap-2">
            {hasDiscount ? (
              <>
                <span className="text-sm font-medium">{formatPrice(product.salePrice!)}</span>
                <span className="text-sm text-muted-foreground line-through">{formatPrice(product.price)}</span>
              </>
            ) : (
              <span className="text-sm font-medium">{formatPrice(product.price)}</span>
            )}
          </div>
        </div>
      </motion.div>

      <QuickViewModal product={product} open={quickViewOpen} onOpenChange={setQuickViewOpen} />
    </>
  );
});
