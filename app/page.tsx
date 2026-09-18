import { HeroBanner } from "@/components/homepage/hero-banner";
import { BrandIntro } from "@/components/homepage/brand-intro";
import { ShopByLifestyle } from "@/components/homepage/shop-by-lifestyle";
import { FeaturedCollection } from "@/components/homepage/featured-collection";
import { EditorialShowcase } from "@/components/homepage/editorial-showcase";
import { NewArrivals } from "@/components/homepage/new-arrivals";
import { JowayEdit } from "@/components/homepage/joway-edit";
import { LifestyleCampaign } from "@/components/homepage/lifestyle-campaign";
import { BestSellers } from "@/components/homepage/best-sellers";
import { PromotionalBanner } from "@/components/homepage/promotional-banner";
import { AboutSection } from "@/components/homepage/about-section";
import { Newsletter } from "@/components/homepage/newsletter";
import { FeaturesRow } from "@/components/homepage/features-row";
import {
  campaigns,
  coastalHomeSlugs,
  outdoorLeisureSlugs,
  travelEverydaySlugs,
} from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";

export default function HomePage() {
  const coastalHome = getProductsBySlugs(coastalHomeSlugs);
  const outdoor = getProductsBySlugs(outdoorLeisureSlugs);
  const travel = getProductsBySlugs(travelEverydaySlugs);

  return (
    <>
      <HeroBanner />
      <BrandIntro />
      <ShopByLifestyle />
      <FeaturedCollection />
      <EditorialShowcase />
      <NewArrivals />
      <JowayEdit />
      <LifestyleCampaign {...campaigns.home} products={coastalHome} />
      <LifestyleCampaign {...campaigns.outdoor} products={outdoor} reverse />
      <LifestyleCampaign {...campaigns.travel} products={travel} />
      <BestSellers />
      <PromotionalBanner />
      <AboutSection />
      <FeaturesRow />
      <Newsletter />
    </>
  );
}
