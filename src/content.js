// ─────────────────────────────────────────────────────────────
// EVERYTHING ON THE SITE LIVES IN THIS ONE FILE.
// Edit text, prices, images, and links here — no other file
// needs to change for a normal content update.
//
// NOTE: menu items and prices below are placeholder copy built
// around the dishes your own reviews mention (beef burger, pasta,
// panini, loaded fries). Swap in your real menu and real prices
// before you publish. Gallery/menu photos are stock placeholders —
// replace the `image` links with real photos of your food.
// ─────────────────────────────────────────────────────────────

export const shop = {
  name: "Ausomigos",
  tagline: "Smash burgers, loaded fries, no shortcuts.",
  city: "Islamabad",
  neighborhood: "F-8 Markaz",
  address: "Ausomigos, F-8 Markaz, F-8, Islamabad, Pakistan",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Ausomigos+F-8+Markaz+Islamabad",
  phoneDisplay: "+92 312 5126016",
  // WhatsApp deep link — digits only, country code first, no leading +
  whatsappNumber: "923125126016",
  whatsappDefaultMessage: "Hi Ausomigos, I'd like to place an order.",
  rating: 5.0,
  reviewCount: 2,
  priceRange: "Rs 9,000 – 10,000 per person",
  hours: [
    { day: "Monday", time: "2 PM – 3 AM" },
    { day: "Tuesday", time: "2 PM – 3 AM" },
    { day: "Wednesday", time: "2 PM – 3 AM" },
    { day: "Thursday", time: "2 PM – 3 AM" },
    { day: "Friday", time: "2 PM – 3 AM" },
    { day: "Saturday", time: "2 PM – 3 AM" },
    { day: "Sunday", time: "2 PM – 3 AM" },
  ],
  services: ["Dine-in", "Drive-through", "No-contact delivery"],
};

// Words that spin through the hero's animated background strip.
export const heroWords = [
  "SMASH BURGERS",
  "LOADED FRIES",
  "PANINI",
  "PASTA",
  "ALL NIGHT",
  "F-8 MARKAZ",
];

export const about = {
  eyebrow: "About us",
  heading: "Late-night food, made fresh, no shortcuts.",
  paragraphs: [
    "Ausomigos runs in F-8 Markaz, serving smash burgers, loaded fries, pasta and paninis from 2 PM straight through to 3 AM. No frozen shortcuts — patties are smashed to order and fries come loaded, not just topped.",
    "Whether you're stopping in for dine-in, swinging by the drive-through, or ordering no-contact delivery on your way home from a late night out, the menu stays the same tight lineup done right.",
  ],
  stats: [
    { value: "2PM–3AM", label: "Open every day, late-night menu" },
    {
      value: shop.rating.toFixed(1),
      label: `★ average across ${shop.reviewCount} reviews`,
    },
    { value: "3", label: "Ways to order — dine-in, drive-thru, delivery" },
  ],
};

export const menu = {
  eyebrow: "The menu",
  heading: "Built around what people actually order",
  subheading: "Prices in PKR. Ask about combo deals for groups.",
  categories: [
    {
      name: "Smash Burgers",
      items: [
        {
          name: "Classic Smash Beef",
          note: "Double smashed patty, cheese, house sauce",
          price: "Rs 950",
          tag: "Best seller",
          image:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
        },
        {
          name: "Ausomigos Signature Burger",
          note: "Triple patty, caramelized onions, smoked cheddar",
          price: "Rs 1,350",
          tag: "Chef's pick",
          image:
            "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=80",
        },
        {
          name: "Spicy Zinger Smash",
          note: "Crispy chicken thigh, chili mayo, pickles",
          price: "Rs 1,050",
          tag: "Spicy",
          image:
            "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80",
        },
      ],
    },
    {
      name: "Loaded Fries",
      items: [
        {
          name: "Loaded Cheese & Beef Fries",
          note: "Beef strips, molten cheese sauce, jalapeños",
          price: "Rs 850",
          tag: "Best seller",
          image:
            "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80",
        },
        {
          name: "Peri Peri Loaded Fries",
          note: "Peri sauce, grilled chicken, garlic mayo drizzle",
          price: "Rs 800",
          tag: "Spicy",
          image:
            "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=900&q=80",
        },
      ],
    },
    {
      name: "Pasta & Panini",
      items: [
        {
          name: "Creamy Alfredo Pasta",
          note: "Grilled chicken, parmesan cream sauce",
          price: "Rs 1,100",
          tag: "Popular",
          image:
            "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=900&q=80",
        },
        {
          name: "Smoky BBQ Pasta",
          note: "Beef chunks, smoked BBQ sauce, bell peppers",
          price: "Rs 1,150",
          tag: "New",
          image:
            "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80",
        },
        {
          name: "Grilled Chicken Panini",
          note: "Pressed sourdough, mozzarella, basil pesto",
          price: "Rs 900",
          tag: "Popular",
          image:
            "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=900&q=80",
        },
      ],
    },
  ],
};

// Placeholder gallery slots — swap `image` for real photos of the
// shop, the grill, and plated food.
export const gallery = [
  {
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80",
    caption: "Fresh off the grill",
  },
  {
    image:
      "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=900&q=80",
    caption: "Loaded, not just topped",
  },
  {
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
    caption: "Late-night regulars",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=80",
    caption: "Smash, don\u2019t press",
  },
  {
    image:
      "https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?auto=format&fit=crop&w=900&q=80",
    caption: "Drive-through ready",
  },
  {
    image:
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=900&q=80",
    caption: "Packed for delivery",
  },
];

// Real reviews as given from the Google Business listing.
export const reviews = [
  {
    name: "Ali Zahid Raja",
    meta: "Local Guide · 23 reviews · 16 photos · 2 years ago",
    rating: 5,
    text: "THE BEST PLACE TO EAT IN F10. Try their beef burger, pasta, panini, loaded fries. THE BEST TASTE, THE MOST AFFORDABLE RATES.",
  },
  {
    name: "Saqlain Shaan",
    meta: "10 months ago",
    rating: 5,
    text: null,
    breakdown: { Food: 5, Service: 5, Atmosphere: 5 },
  },
];

export const nav = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
];
