export interface MenuItem {
  id: string;
  name: string;
  category: 'coffee' | 'brunch' | 'bakes';
  description: string;
  originOrStyle?: string;
  tastingNotes?: string[];
  priceDemo: string;
  isVegan?: boolean;
  isGlutenFree?: boolean;
  isSignature?: boolean;
  image: string;
}

export const MENU_ITEMS: MenuItem[] = [
  // COFFEE & BREWS
  {
    id: 'c1',
    name: 'Chikmagalur Honey-Sunburst Pour-Over',
    category: 'coffee',
    description: 'Single-estate anaerobic natural from high-elevation Bababudangiri slopes. Brewed manually on V60.',
    originOrStyle: 'Bhadra Valley, 1,400m',
    tastingNotes: ['Wild Honey', 'Meyer Lemon', 'Stone Fruit'],
    priceDemo: 'From ₹260',
    isSignature: true,
    isVegan: true,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'c2',
    name: 'Mysore Peaberry Cortado',
    category: 'coffee',
    description: 'Equal parts double ristretto and silky steamed oat milk or farm-fresh A2 milk in a heavy fluted glass.',
    originOrStyle: 'Shevaroy Hills Peaberry Blend',
    tastingNotes: ['Dark Cocoa', 'Toasted Hazelnut', 'Molasses'],
    priceDemo: 'From ₹240',
    isSignature: true,
    isVegan: true,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'c3',
    name: 'Monsoon Malabar 18hr Cold Drip',
    category: 'coffee',
    description: 'Slow-extracted drop by drop over Japanese Kyoto towers. Served over a single crystal ice sphere.',
    originOrStyle: 'Malabar Coast Monsooned Arabica',
    tastingNotes: ['Smoked Cardamom', 'Pipe Tobacco', 'Dried Fig'],
    priceDemo: 'From ₹280',
    isVegan: true,
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'c4',
    name: 'Cardamom & Orange Blossom Latte',
    category: 'coffee',
    description: 'Double shot espresso infused with cold-pressed green cardamom distillate and organic orange blossom syrup.',
    originOrStyle: 'House Espresso Roast',
    tastingNotes: ['Citrus Bloom', 'Warm Cardamom', 'Caramel'],
    priceDemo: 'From ₹270',
    isVegan: true,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'c5',
    name: 'Cascara & Tonic Spritz',
    category: 'coffee',
    description: 'Sparkling tea brewed from sun-dried coffee cherry pulps, botanical tonic, grapefruit twist, and fresh rosemary.',
    originOrStyle: 'Coorg Estate Sun-dried Cascara',
    tastingNotes: ['Hibiscus', 'Tamarind', 'Pink Grapefruit'],
    priceDemo: 'From ₹250',
    isVegan: true,
    isGlutenFree: true,
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'c6',
    name: 'Aeropress Reserve: Ratnagiri Estate Lot 12',
    category: 'coffee',
    description: 'Inverted extraction technique yielding a clean, tea-like body with pronounced floral acidity.',
    originOrStyle: 'Ratnagiri Estate, Catuai',
    tastingNotes: ['Jasmine', 'Red Currant', 'Bergamot'],
    priceDemo: 'From ₹290',
    isSignature: true,
    isVegan: true,
    image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80',
  },

  // ALL-DAY BRUNCH
  {
    id: 'b1',
    name: 'Whipped Ricotta & Heirloom Tomato Tartine',
    category: 'brunch',
    description: '36-hour fermented country sourdough, house-whipped lemon ricotta, charred heirloom cherry tomatoes, basil oil, and flaky sea salt.',
    originOrStyle: 'House Country Sourdough',
    tastingNotes: ['Creamy', 'Tangy', 'Sun-drenched Herbs'],
    priceDemo: 'From ₹380',
    isSignature: true,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'b2',
    name: 'Truffled Wild Mushroom & Poached Egg Toast',
    category: 'brunch',
    description: 'Sautéed shimeji and king oyster mushrooms in brown butter, organic free-range poached egg, shaved parmesan on thick brioche.',
    originOrStyle: 'Artisan Brioche',
    tastingNotes: ['Earthy Umami', 'Rich Yolk', 'Black Truffle'],
    priceDemo: 'From ₹440',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'b3',
    name: 'Smoked Hass Avocado & Za’atar Mash',
    category: 'brunch',
    description: 'Coarsely crushed Hass avocado, toasted pepitas, pomegranate pearls, pickled shallots, Aleppo chili flakes on toasted seed loaf.',
    originOrStyle: 'Seeded Rye Sourdough',
    tastingNotes: ['Nutty Crunch', 'Velvety', 'Tangy Herb Spice'],
    priceDemo: 'From ₹420',
    isVegan: true,
    isSignature: true,
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'b4',
    name: 'Parsi-Style Akuri on House Brioche Bun',
    category: 'brunch',
    description: 'Spiced soft-scrambled farm eggs with ginger, green chillies, fresh coriander, and caramelized onions in buttered toasted brioche.',
    originOrStyle: 'Pune Heritage Recipe',
    tastingNotes: ['Warm Aromatics', 'Buttery', 'Piquant'],
    priceDemo: 'From ₹360',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'b5',
    name: 'Coconut Chia Pudding & Seasonal Alphonso Bowl',
    category: 'brunch',
    description: 'Organic chia seeds bloomed in coconut cream, Ratnagiri mango compote, toasted coconut flakes, edible cornflowers, and raw cacao nibs.',
    originOrStyle: 'Plant-Based Bowl',
    tastingNotes: ['Tropical Sweetness', 'Silky', 'Toasted Crunch'],
    priceDemo: 'From ₹340',
    isVegan: true,
    isGlutenFree: true,
    image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'b6',
    name: 'Brown Butter Ricotta Hotcakes',
    category: 'brunch',
    description: 'Fluffy soufflé hotcakes layered with whipped vanilla mascarpone, roasted Coorg honeycomb butter, and macerated blackberries.',
    originOrStyle: 'Signature Sweet Brunch',
    tastingNotes: ['Airy Fluff', 'Floral Honey', 'Rich Vanilla'],
    priceDemo: 'From ₹460',
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80',
  },

  // ARTISAN BAKES
  {
    id: 'bk1',
    name: 'Pistachio & Cardamom Twice-Baked Croissant',
    category: 'bakes',
    description: 'Layered 72-hour laminated pastry filled with Iranian pistachio frangipane, kissed with roasted green cardamom syrup and crushed kernels.',
    originOrStyle: 'French Viennoiserie x Indian Spices',
    tastingNotes: ['Flaky Crisp', 'Nutty Sweet', 'Aromatic Cardamom'],
    priceDemo: 'From ₹280',
    isSignature: true,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'bk2',
    name: 'Valrhona 70% Dark Chocolate Babka',
    category: 'bakes',
    description: 'Swirled enriched brioche dough packed with dark chocolate ganache, Ceylon cinnamon, and toasted sea-salted pecans.',
    originOrStyle: 'Slow-Proved Brioche',
    tastingNotes: ['Bittersweet Ganache', 'Buttery Ribbons', 'Sea Salt'],
    priceDemo: 'From ₹260',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'bk3',
    name: '36-Hour Fermented Country Loaf',
    category: 'bakes',
    description: 'Wild yeast sourdough, blistered caramelized crust, open gelatinized crumb, baked in stone deck ovens at 260°C.',
    originOrStyle: 'Heritage Whole Wheat & Rye',
    tastingNotes: ['Deep Lactic Tang', 'Crunchy Crust', 'Custardy Crumb'],
    priceDemo: 'From ₹320',
    isVegan: true,
    image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'bk4',
    name: 'Orange Blossom & Almond Financier',
    category: 'bakes',
    description: 'Traditional French teacake made with browned butter (beurre noisette), almond flour, and a splash of Seville orange blossom water.',
    originOrStyle: 'Small Batch Pastry',
    tastingNotes: ['Caramelized Butter', 'Floral Citrus', 'Dense Crumb'],
    priceDemo: 'From ₹190',
    isGlutenFree: false,
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'bk5',
    name: 'Rosemary & Confit Garlic Focaccia Slab',
    category: 'bakes',
    description: 'High-hydration olive oil dough dimpled with slow-roasted confit garlic cloves, fresh garden rosemary, and Maldon pyramid salt flakes.',
    originOrStyle: 'Ligurian Style',
    tastingNotes: ['Golden Crunch', 'Pungent Sweet Garlic', 'Extra Virgin Olive Oil'],
    priceDemo: 'From ₹240',
    isVegan: true,
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=800&q=80',
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  aspect: 'portrait' | 'landscape' | 'square';
  tag: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'The Morning Extraction',
    subtitle: 'La Marzocco PB · Single Estate Catuai',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85',
    aspect: 'portrait',
    tag: 'Espresso Bar',
  },
  {
    id: 'g2',
    title: 'Bougainvillea Verandah',
    subtitle: 'Lane 7, Koregaon Park Courtyard',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85',
    aspect: 'landscape',
    tag: 'Pune Courtyard',
  },
  {
    id: 'g3',
    title: 'Morning Bake Ritual',
    subtitle: 'Fresh croissants out of the hearth at 6:45 AM',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=85',
    aspect: 'square',
    tag: 'Bakery',
  },
  {
    id: 'g4',
    title: 'Four-Legged Patrons',
    subtitle: 'Pet friendly patio with complimentary cold-pressed bone broths',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1200&q=85',
    aspect: 'portrait',
    tag: 'Pet Friendly',
  },
  {
    id: 'g5',
    title: 'Manual Pour-Over Bar',
    subtitle: 'Hario V60 ceramic drippers with Chikmagalur Honey-Sunburst',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85',
    aspect: 'landscape',
    tag: 'Brew Craft',
  },
  {
    id: 'g6',
    title: 'Community & Long Tables',
    subtitle: 'Indiranagar 12th Main sanctuary under the rain trees',
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=85',
    aspect: 'square',
    tag: 'Bangalore Outpost',
  },
];

export interface ReviewItem {
  id: string;
  quote: string;
  author: string;
  title: string;
  outletOrLocation: string;
  rating: number;
}

export const REVIEWS: ReviewItem[] = [
  {
    id: 'r1',
    quote: 'The Chikmagalur Honey anaerobic pour-over is quite simply the cleanest, most expressive cup in Pune. The verandah under the rain tree makes hours slip away.',
    author: 'Ananya Deshmukh',
    title: 'Coffee Critic & Food Stylist',
    outletOrLocation: 'Regular at Koregaon Park',
    rating: 5,
  },
  {
    id: 'r2',
    quote: 'Rarely do you find a place that takes their 36-hour sourdough as seriously as their light-roast single origins. Brew Theory has set a brand new benchmark.',
    author: 'Vikramaditya Rao',
    title: 'Gastronomy Editor',
    outletOrLocation: 'Indiranagar Bangalore',
    rating: 5,
  },
  {
    id: 'r3',
    quote: 'My rescue golden retriever loves the garden grass, and I love that nobody rushes you off your table after two coffees. Truly built for unhurried souls.',
    author: 'Dr. Rhea Sen',
    title: 'Botanist & Writer',
    outletOrLocation: 'Koregaon Park Pune',
    rating: 5,
  },
  {
    id: 'r4',
    quote: 'If you work remotely and appreciate calibrated acoustics, brass accents, and a cortado that never bitter-bites, this is holy ground.',
    author: 'Kabeer Nair',
    title: 'Product Architect',
    outletOrLocation: 'Bangalore Community',
    rating: 5,
  },
];

export interface LocationDetail {
  id: string;
  name: string;
  city: string;
  address: string;
  landmark: string;
  hours: string;
  phone: string;
  email: string;
  amenities: string[];
  vibe: string;
}

export const LOCATIONS: LocationDetail[] = [
  {
    id: 'pune',
    name: 'Koregaon Park Roastery',
    city: 'Pune',
    address: 'Lane 7, South Main Road, Koregaon Park',
    landmark: 'Beside the old Banyan tree grove',
    hours: 'Mon – Sun: 7:30 AM – 10:30 PM',
    phone: '+91 20 4912 8800',
    email: 'kp@brewtheorycafe.com',
    amenities: [
      'Lush Pet Courtyard',
      'Slow Pour-Over Bar',
      'Vinyl Listening Nook',
      'Stone Oven Sourdough Hearth',
      'High-Speed Fibre & Plugs',
    ],
    vibe: 'Sun-dappled verandah, terracotta floor tiles, monsoon-friendly open glass pavilion.',
  },
  {
    id: 'bangalore',
    name: 'Indiranagar Sanctuary',
    city: 'Bangalore',
    address: 'Plot 418, 12th Main Road, HAL 2nd Stage, Indiranagar',
    landmark: 'Near the bougainvillea corner',
    hours: 'Mon – Sun: 8:00 AM – 11:00 PM',
    phone: '+91 80 4721 9933',
    email: 'blr@brewtheorycafe.com',
    amenities: [
      'Shaded Rain-Tree Deck',
      'Cupping & Roasting Lab',
      'All-Day Kitchen',
      'Pet Friendly Patio',
      'Curated Indie Bookstore Shelf',
    ],
    vibe: 'Industrial-botanical warmth, warm brick, hand-hammered brass, and gentle acoustic indie jazz.',
  },
];

export interface InstagramPost {
  id: string;
  caption: string;
  likes: string;
  comments: string;
  image: string;
  handle: string;
}

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig1',
    caption: 'Pouring the morning nectar. Chikmagalur Honey Lot #4 blooming on V60.',
    likes: '1,420',
    comments: '84',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    handle: '@brewtheory',
  },
  {
    id: 'ig2',
    caption: 'Laminated layers of pistachio & green cardamom. Out of the stone hearth at 7 AM.',
    likes: '2,190',
    comments: '132',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80',
    handle: '@brewtheory',
  },
  {
    id: 'ig3',
    caption: 'Golden hour at our Pune verandah. Bring your books, bring your pups.',
    likes: '3,410',
    comments: '210',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80',
    handle: '@brewtheory',
  },
  {
    id: 'ig4',
    caption: 'Meet Bruno, our official Chief Happiness Officer on Bangalore deck duty today.',
    likes: '4,890',
    comments: '350',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80',
    handle: '@brewtheory',
  },
  {
    id: 'ig5',
    caption: 'Cold drip towers in slow motion. 18 hours of gravity extraction.',
    likes: '1,880',
    comments: '95',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80',
    handle: '@brewtheory',
  },
  {
    id: 'ig6',
    caption: 'Whipped ricotta, heirloom tomatoes, and cold-pressed basil oil on country sourdough.',
    likes: '2,640',
    comments: '164',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80',
    handle: '@brewtheory',
  },
];
