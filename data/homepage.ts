import { Feature, HeroSlide, PromoBanner } from "@/types";

export const heroSlides: HeroSlide[] = [
  {
    id: "1",
    image: "/hero/hero-1.jpg",
    headline: "Light living, well designed.",
    description:
      "Contemporary pieces for home, travel, and everyday — chosen for bright rooms and an easier pace.",
    ctaText: "Shop the collection",
    ctaLink: "/shop",
    secondaryCtaText: "The JOWAY Edit",
    secondaryCtaLink: "/shop?collection=joway-edit",
  },
];

export const brandIntro = {
  eyebrow: "JOWAY COMMERCE LLC",
  title: "Made for sunlit rooms and easy days.",
  description:
    "We gather contemporary objects for living well at home and away. Nothing ornamental for its own sake — just useful, considered pieces that hold up to everyday use.",
};

export const features: Feature[] = [
  {
    id: "1",
    icon: "truck",
    title: "Complimentary shipping",
    description: "Free standard shipping on orders over $75 within the contiguous United States.",
  },
  {
    id: "2",
    icon: "rotate",
    title: "Thirty-day returns",
    description: "Send most unused items back within 30 days, in original condition.",
  },
  {
    id: "3",
    icon: "shield",
    title: "Secure checkout",
    description: "Demo checkout is encrypted in presentation — no live payment is processed.",
  },
  {
    id: "4",
    icon: "star",
    title: "Considered selection",
    description: "Every product is chosen for use, material, and how it lives in a real room.",
  },
];

export const dealsEndTime = "2026-09-19T08:00:00.000Z";

export const homepageDealsSlugs = [
  "atlantic-linen-cushion",
  "matte-tea-kettle",
  "canvas-hammock",
  "travel-backpack",
  "polarized-sunglasses",
  "cotton-bath-towel-set",
] as const;

export const homepageBestsellerSlugs = [
  "sunwashed-linen-bedding",
  "everyday-stoneware-mug",
  "canvas-weekender",
  "organic-cotton-tee",
  "scented-soy-candle",
  "studio-yoga-mat",
  "shore-knit-throw",
  "weekend-picnic-blanket",
] as const;

export const homepageFeaturedSlugs = [
  "harbour-ceramic-table-lamp",
  "dune-stoneware-vase",
  "walnut-serving-board",
  "canvas-weekender",
  "soft-crossbody-bag",
  "pour-over-coffee-set",
  "patio-lantern",
  "clothbound-notebook",
  "circle-wall-mirror",
  "lightweight-overshirt",
] as const;

export const homepageNewArrivalSlugs = [
  "sol-ceramic-planter",
  "everyday-flatware-set",
  "patio-fire-bowl",
  "canvas-daypack",
  "leather-slide-sandals",
  "reed-diffuser",
  "instant-film-camera",
  "loose-leaf-tea-set",
] as const;

export const jowayEditSlugs = [
  "harbour-ceramic-table-lamp",
  "atlantic-linen-cushion",
  "everyday-stoneware-mug",
  "walnut-serving-board",
  "canvas-weekender",
  "soft-crossbody-bag",
  "organic-cotton-tee",
  "scented-soy-candle",
  "clothbound-notebook",
  "polarized-sunglasses",
] as const;

export const coastalHomeSlugs = [
  "sunwashed-linen-bedding",
  "shore-knit-throw",
  "dune-stoneware-vase",
  "sol-ceramic-planter",
] as const;

export const outdoorLeisureSlugs = [
  "weekend-picnic-blanket",
  "patio-lantern",
  "canvas-hammock",
  "wicker-picnic-basket",
] as const;

export const travelEverydaySlugs = [
  "canvas-weekender",
  "hard-shell-suitcase",
  "leather-document-cover",
  "insulated-travel-tumbler",
] as const;

export const editorialShowcase = {
  eyebrow: "Light Living",
  title: "Objects that earn their place.",
  description:
    "A lamp, a tray, a mug you reach for twice a day. The JOWAY mix favors pieces that work in a bright interior without extra decoration.",
  image: "/banners/featured.jpg",
  ctaText: "Shop Home",
  ctaLink: "/categories/home",
  productSlugs: ["harbour-ceramic-table-lamp", "wood-serving-tray", "everyday-stoneware-mug"] as const,
};

export const promotionalBanner: PromoBanner = {
  id: "1",
  title: "Easy days, well designed.",
  description:
    "A quieter kind of retail — contemporary pieces for the rooms you actually live in, and the trips you actually take.",
  buttonText: "Explore the shop",
  buttonLink: "/shop",
  image: "/banners/promo.jpg",
};

export const aboutSection = {
  title: "A thoughtful approach to everyday things.",
  description:
    "JOWAY COMMERCE LLC selects contemporary lifestyle products with an eye for light, material, and use. We are not a souvenir shop and not a department store — just a considered mix for home, kitchen, travel, and the in-between.",
  checklist: [
    "Home, kitchen, travel, and everyday carry in one place",
    "Materials chosen to age well rather than shout",
    "Straightforward shipping and a 30-day return window",
    "Written for real rooms — not resort catalogues",
  ],
  buttonText: "Read our approach",
  buttonLink: "/about",
  image: "/banners/philosophy.jpg",
};

export const featuredCollection = {
  title: "Featured collection",
  description: "Current pieces we keep returning to — across rooms, bags, and tables.",
  bannerImage: "/banners/featured.jpg",
  categorySlug: "home",
};

export const bestSellerTabs = [
  { label: "All", slug: "all" },
  { label: "Home", slug: "home" },
  { label: "Kitchen", slug: "kitchen-dining" },
  { label: "Travel", slug: "travel" },
  { label: "Apparel", slug: "apparel-accessories" },
];

export const lifestyleTiles = [
  {
    slug: "home",
    name: "Coastal Home",
    description: "Textiles, lighting, and quiet objects.",
    image: "/categories/home.jpg",
    href: "/categories/home",
  },
  {
    slug: "kitchen-dining",
    name: "Table + Kitchen",
    description: "Stoneware, glass, and daily tools.",
    image: "/categories/kitchen-dining.jpg",
    href: "/categories/kitchen-dining",
  },
  {
    slug: "outdoor-leisure",
    name: "Out + About",
    description: "Picnic, patio, and weekend gear.",
    image: "/categories/outdoor-leisure.jpg",
    href: "/categories/outdoor-leisure",
  },
  {
    slug: "travel",
    name: "Travel",
    description: "Weekenders and packing pieces.",
    image: "/categories/travel.jpg",
    href: "/categories/travel",
  },
  {
    slug: "everyday",
    name: "Everyday",
    description: "Carry, organize, repeat.",
    image: "/categories/everyday.jpg",
    href: "/categories/everyday",
  },
  {
    slug: "apparel-accessories",
    name: "Apparel",
    description: "Basics and accessories.",
    image: "/categories/apparel-accessories.jpg",
    href: "/categories/apparel-accessories",
  },
];

export const campaigns = {
  home: {
    eyebrow: "Modern Coastal Home",
    title: "Rooms that hold the light.",
    description: "Linen, ceramic, and wood — pieces that sit easily in a bright interior.",
    image: "/banners/coastal-home.jpg",
    ctaText: "Shop Home",
    ctaLink: "/categories/home",
  },
  outdoor: {
    eyebrow: "Made for the Weekend",
    title: "Out + about, without the costume.",
    description: "Picnic blankets, lanterns, and outdoor pieces for unhurried afternoons.",
    image: "/banners/outdoor-leisure.jpg",
    ctaText: "Shop Outdoor + Leisure",
    ctaLink: "/categories/outdoor-leisure",
  },
  travel: {
    eyebrow: "Everyday, refined",
    title: "Packed light. Chosen well.",
    description: "Weekenders, organizers, and the small tools of a good trip.",
    image: "/banners/travel.jpg",
    ctaText: "Shop Travel",
    ctaLink: "/categories/travel",
  },
  weekend: {
    eyebrow: "The weekend edit",
    title: "Easy days start at home.",
    description: "A second look at living well between Friday and Monday.",
    image: "/banners/weekend.jpg",
    ctaText: "See new arrivals",
    ctaLink: "/new-arrivals",
  },
};

export const newsletter = {
  title: "Notes from the shop",
  description: "New arrivals, seasonal edits, and the occasional offer — sent sparingly.",
  placeholder: "Email address",
  buttonText: "Subscribe",
};

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];
