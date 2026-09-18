/**
 * Copy semantically matched assets from the shared product library
 * into this store's public/ directories. The library is read-only.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const LIBRARY = path.join(
  process.env.HOME || "/Users/solomon",
  "Documents/Ecommerce-Product-Library"
);
const LIBRARY_IMAGES = path.join(LIBRARY, "images");
const PUBLIC = path.join(ROOT, "public");

const COPIES = [
  // HOME
  ["home-living/ceramic-table-lamp-001.jpg", "products/harbour-ceramic-table-lamp-1.jpg"],
  ["home-living/ceramic-table-lamp-002.jpg", "products/harbour-ceramic-table-lamp-2.jpg"],
  ["home-living/ceramic-vase-001.jpg", "products/dune-stoneware-vase-1.jpg"],
  ["home-living/ceramic-vase-002.jpg", "products/dune-stoneware-vase-2.jpg"],
  ["home-living/linen-cushion-cover-001.jpg", "products/atlantic-linen-cushion-1.jpg"],
  ["home-living/linen-cushion-cover-002.jpg", "products/atlantic-linen-cushion-2.jpg"],
  ["home-living/knit-throw-blanket-001.jpg", "products/shore-knit-throw-1.jpg"],
  ["home-living/woven-storage-basket-001.jpg", "products/seagrass-storage-basket-1.jpg"],
  ["home-living/woven-storage-basket-002.jpg", "products/seagrass-storage-basket-2.jpg"],
  ["home-living/ceramic-plant-pot-001.jpg", "products/sol-ceramic-planter-1.jpg"],
  ["home-living/ceramic-plant-pot-002.jpg", "products/sol-ceramic-planter-2.jpg"],
  ["gifts-lifestyle/bath-towel-set-001.jpg", "products/cotton-bath-towel-set-1.jpg"],
  ["home-living/linen-bedding-set-001.jpg", "products/sunwashed-linen-bedding-1.jpg"],
  ["home-living/floating-wall-shelf-001.jpg", "products/oak-wall-shelf-1.jpg"],
  ["home-living/round-wall-mirror-001.jpg", "products/circle-wall-mirror-1.jpg"],
  ["home-living/storage-box-001.jpg", "products/lidded-storage-box-1.jpg"],
  ["home-living/decorative-serving-tray-001.jpg", "products/wood-serving-tray-1.jpg"],
  ["home-living/minimal-wall-clock-001.jpg", "products/quiet-wall-clock-1.jpg"],

  // KITCHEN
  ["kitchen-dining/ceramic-mug-001.jpg", "products/everyday-stoneware-mug-1.jpg"],
  ["kitchen-dining/ceramic-mug-002.jpg", "products/everyday-stoneware-mug-2.jpg"],
  ["kitchen-dining/stoneware-dinner-plate-001.jpg", "products/sandstone-dinner-plate-1.jpg"],
  ["kitchen-dining/stoneware-dinner-plate-002.jpg", "products/sandstone-dinner-plate-2.jpg"],
  ["kitchen-dining/wooden-cutting-board-001.jpg", "products/walnut-serving-board-1.jpg"],
  ["kitchen-dining/wooden-cutting-board-002.jpg", "products/walnut-serving-board-2.jpg"],
  ["kitchen-dining/coffee-grinder-001.jpg", "products/burr-coffee-grinder-1.jpg"],
  ["kitchen-dining/wine-glass-001.jpg", "products/stemmed-wine-glass-1.jpg"],
  ["kitchen-dining/glass-storage-jar-001.jpg", "products/pantry-storage-jar-1.jpg"],
  ["kitchen-dining/glass-storage-jar-002.jpg", "products/pantry-storage-jar-2.jpg"],
  ["kitchen-dining/tea-kettle-001.jpg", "products/matte-tea-kettle-1.jpg"],
  ["kitchen-dining/cutlery-set-001.jpg", "products/everyday-flatware-set-1.jpg"],
  ["kitchen-dining/serving-bowl-001.jpg", "products/stoneware-serving-bowl-1.jpg"],
  ["kitchen-dining/insulated-travel-tumbler-001.jpg", "products/insulated-travel-tumbler-1.jpg"],
  ["kitchen-dining/espresso-cup-001.jpg", "products/ceramic-espresso-cup-1.jpg"],
  ["gifts-lifestyle/pour-over-coffee-set-001.jpg", "products/pour-over-coffee-set-1.jpg"],

  // OUTDOOR
  ["outdoor/picnic-blanket-001.jpg", "products/weekend-picnic-blanket-1.jpg"],
  ["outdoor/picnic-blanket-002.jpg", "products/weekend-picnic-blanket-2.jpg"],
  ["outdoor/camping-lantern-001.jpg", "products/patio-lantern-1.jpg"],
  ["outdoor/camping-lantern-002.jpg", "products/patio-lantern-2.jpg"],
  ["outdoor/picnic-basket-001.jpg", "products/wicker-picnic-basket-1.jpg"],
  ["outdoor/camping-hammock-001.jpg", "products/canvas-hammock-1.jpg"],
  ["outdoor/camping-hammock-002.jpg", "products/canvas-hammock-2.jpg"],
  ["outdoor/watering-can-001.jpg", "products/garden-watering-can-1.jpg"],
  ["outdoor/fire-pit-001.jpg", "products/patio-fire-bowl-1.jpg"],
  ["outdoor/insulated-outdoor-bottle-001.jpg", "products/insulated-outdoor-bottle-1.jpg"],
  ["outdoor/binoculars-001.jpg", "products/compact-binoculars-1.jpg"],

  // TRAVEL
  ["travel-bags/weekender-duffel-bag-001.jpg", "products/canvas-weekender-1.jpg"],
  ["travel-bags/vintage-travel-suitcase-001.jpg", "products/hard-shell-suitcase-1.jpg"],
  ["travel-bags/vintage-travel-suitcase-002.jpg", "products/hard-shell-suitcase-2.jpg"],
  ["travel-bags/canvas-daypack-001.jpg", "products/canvas-daypack-1.jpg"],
  ["travel-bags/minimalist-daypack-001.jpg", "products/canvas-daypack-2.jpg"],
  ["travel-bags/luggage-tag-001.jpg", "products/leather-luggage-tag-1.jpg"],
  ["travel-bags/travel-backpack-001.jpg", "products/travel-backpack-1.jpg"],
  ["travel-bags/travel-backpack-002.jpg", "products/travel-backpack-2.jpg"],
  ["travel-bags/leather-document-cover-001.jpg", "products/leather-document-cover-1.jpg"],
  ["travel-bags/crossbody-bag-001.jpg", "products/soft-crossbody-bag-1.jpg"],
  ["travel-bags/crossbody-bag-002.jpg", "products/soft-crossbody-bag-2.jpg"],

  // EVERYDAY
  ["accessories/leather-wallet-001.jpg", "products/slim-leather-wallet-1.jpg"],
  ["accessories/leather-wallet-002.jpg", "products/slim-leather-wallet-2.jpg"],
  ["accessories/jewelry-dish-001.jpg", "products/ceramic-jewelry-dish-1.jpg"],
  ["accessories/key-organizer-001.jpg", "products/leather-key-organizer-1.jpg"],
  ["accessories/umbrella-001.jpg", "products/compact-umbrella-1.jpg"],
  ["travel-bags/messenger-bag-001.jpg", "products/everyday-messenger-1.jpg"],
  ["accessories/bracelet-001.jpg", "products/fine-chain-bracelet-1.jpg"],

  // APPAREL
  ["accessories/sunglasses-001.jpg", "products/polarized-sunglasses-1.jpg"],
  ["accessories/sunglasses-002.jpg", "products/polarized-sunglasses-2.jpg"],
  ["apparel/baseball-cap-001.jpg", "products/cotton-baseball-cap-1.jpg"],
  ["apparel/baseball-cap-002.jpg", "products/cotton-baseball-cap-2.jpg"],
  ["apparel/cotton-tshirt-001.jpg", "products/organic-cotton-tee-1.jpg"],
  ["apparel/cotton-tshirt-002.jpg", "products/organic-cotton-tee-2.jpg"],
  ["apparel/sandals-001.jpg", "products/leather-slide-sandals-1.jpg"],
  ["accessories/leather-belt-001.jpg", "products/leather-everyday-belt-1.jpg"],
  ["apparel/casual-shorts-001.jpg", "products/cotton-utility-shorts-1.jpg"],
  ["accessories/wool-scarf-001.jpg", "products/soft-wool-scarf-1.jpg"],
  ["apparel/casual-overshirt-001.jpg", "products/lightweight-overshirt-1.jpg"],

  // WELLNESS
  ["fitness-wellness/yoga-mat-001.jpg", "products/studio-yoga-mat-1.jpg"],
  ["fitness-wellness/yoga-mat-002.jpg", "products/studio-yoga-mat-2.jpg"],
  ["fitness-wellness/foam-roller-001.jpg", "products/recovery-foam-roller-1.jpg"],
  ["fitness-wellness/yoga-block-001.jpg", "products/cork-yoga-block-1.jpg"],
  ["gifts-lifestyle/essential-oil-set-001.jpg", "products/essential-oil-set-1.jpg"],
  ["fitness-wellness/aluminium-sports-bottle-001.jpg", "products/studio-sports-bottle-1.jpg"],
  ["home-living/reed-diffuser-001.jpg", "products/reed-diffuser-1.jpg"],

  // TECH + WORKSPACE
  ["office-desk/hardcover-notebook-001.jpg", "products/clothbound-notebook-1.jpg"],
  ["office-desk/hardcover-notebook-002.jpg", "products/clothbound-notebook-2.jpg"],
  ["electronics/bedside-alarm-clock-001.jpg", "products/bedside-alarm-clock-1.jpg"],
  ["office-desk/laptop-stand-001.jpg", "products/aluminum-laptop-stand-1.jpg"],
  ["electronics/clip-desk-light-001.jpg", "products/led-desk-light-1.jpg"],
  ["electronics/instant-camera-001.jpg", "products/instant-film-camera-1.jpg"],
  ["office-desk/fountain-pen-001.jpg", "products/fountain-pen-1.jpg"],
  ["office-desk/weekly-planner-001.jpg", "products/weekly-planner-1.jpg"],
  ["electronics/power-bank-001.jpg", "products/compact-power-bank-1.jpg"],

  // GIFTS
  ["gifts-lifestyle/scented-candle-001.jpg", "products/scented-soy-candle-1.jpg"],
  ["gifts-lifestyle/scented-candle-002.jpg", "products/scented-soy-candle-2.jpg"],
  ["gifts-lifestyle/gift-box-001.jpg", "products/linen-gift-box-1.jpg"],
  ["gifts-lifestyle/gift-box-002.jpg", "products/linen-gift-box-2.jpg"],
  ["gifts-lifestyle/soap-bar-set-001.jpg", "products/botanical-soap-set-1.jpg"],
  ["gifts-lifestyle/playing-cards-001.jpg", "products/linen-playing-cards-1.jpg"],
  ["gifts-lifestyle/tea-gift-set-001.jpg", "products/loose-leaf-tea-set-1.jpg"],
  ["gifts-lifestyle/incense-holder-001.jpg", "products/incense-set-1.jpg"],

  // CATEGORY stills (representative product photography)
  ["home-living/linen-bedding-set-001.jpg", "categories/home.jpg"],
  ["kitchen-dining/stoneware-dinner-plate-001.jpg", "categories/kitchen-dining.jpg"],
  ["outdoor/picnic-blanket-001.jpg", "categories/outdoor-leisure.jpg"],
  ["travel-bags/weekender-duffel-bag-001.jpg", "categories/travel.jpg"],
  ["travel-bags/crossbody-bag-001.jpg", "categories/everyday.jpg"],
  ["apparel/cotton-tshirt-001.jpg", "categories/apparel-accessories.jpg"],
  ["fitness-wellness/yoga-mat-001.jpg", "categories/wellness.jpg"],
  ["office-desk/hardcover-notebook-001.jpg", "categories/tech-workspace.jpg"],
  ["gifts-lifestyle/scented-candle-001.jpg", "categories/gifts.jpg"],
];

let copied = 0;
let missing = [];

for (const [fromRel, toRel] of COPIES) {
  const src = path.join(LIBRARY_IMAGES, fromRel);
  const dest = path.join(PUBLIC, toRel);
  if (!fs.existsSync(src)) {
    missing.push(fromRel);
    continue;
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  copied++;
}

console.log(`Copied ${copied} images.`);
if (missing.length) {
  console.error("MISSING:", missing);
  process.exit(1);
}
