export const collectionList = [
  {
    name: "Gran Espresso",
    description:
      "Light and flavorful blend with cocoa and black pepper for an intense experience",
    imgUrl: "/images/home/desktop/image-gran-espresso.png",
  },
  {
    name: "Planalto",
    description:
      "Brazillian dark roast with rich and velvety body, and hints of fruits and nuts",
    imgUrl: "/images/home/desktop/image-planalto.png",
  },
  {
    name: "Piccollo",
    description:
      "Mild and smooth blend featuring notes of toasted almond and dried cherry",
    imgUrl: "/images/home/desktop/image-piccollo.png",
  },
  {
    name: "Danche",
    description:
      "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
    imgUrl: "/images/home/desktop/image-danche.png",
  },
];

export const reasonsList = [
  {
    name: "Best quality",
    description:
      "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
    imgUrl: "/images/home/desktop/icon-coffee-bean.svg",
  },
  {
    name: "Exclusive benefits",
    description:
      "Special offers and swag when you subscribe, including 30% off your first shipment.",
    imgUrl: "/images/home/desktop/icon-gift.svg",
  },
  {
    name: "Free shipping",
    description:
      "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
    imgUrl: "/images/home/desktop/icon-truck.svg",
  },
];

export const stepsList = [
  {
    number: "01",
    name: "Pick your coffee",
    description:
      "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
  },
  {
    number: "02",
    name: "Choose your frequency",
    description:
      "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
  },
  {
    number: "03",
    name: "Receive and enjoy!",
    description:
      "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
  },
];

export const hqLocations = [
  {
    name: "United Kingdom",
    address: "68 Asfordby Rd, Alcaston, SY6 1YA, +44 1241 918425",
    imgUrl: "/images/about/desktop/illustration-uk.svg",
  },
  {
    name: "Canada",
    address: "1528  Eglinton Avenue, Toronto, Ontario M4P 1A6, +1 416 485 2997",
    imgUrl: "/images/about/desktop/illustration-canada.svg",
  },
  {
    name: "Australia",
    address: "36 Swanston Street, Kewell, Victoria, +61 4 9928 3629",
    imgUrl: "/images/about/desktop/illustration-australia.svg",
  },
];

export const preferenceMenu = [
  {
    question: "How do you drink your coffee?",
    type: "Preferences",
    options: [
      {
        name: "Capsule",
        description: "Compatible with Nespresso systems and similar brewers",
      },
      {
        name: "Filter",
        description:
          "For pour over or drip methods like Aeropress, Chemex, and V60",
      },
      {
        name: "Espresso",
        description:
          "Dense and finely ground beans for an intense, flavorful experience",
      },
    ],
  },
  {
    question: "What type of coffee?",
    type: "Bean Type",
    options: [
      {
        name: "Single Origin",
        description:
          "Distinct, high quality coffee from a specific family-owned farm",
      },
      {
        name: "Decaf",
        description:
          "Just like regular coffee, except the caffeine has been removed",
      },
      {
        name: "Blended",
        description:
          "Combination of two or three dark roasted beans of organic coffees",
      },
    ],
  },
  {
    question: "How much would you like?",
    type: "Quantity",
    options: [
      {
        name: "250g",
        description:
          "Perfect for the solo drinker. Yields about 12 delicious cups.",
      },
      {
        name: "500g",
        description:
          "Perfect option for a couple. Yields about 40 delectable cups.",
      },
      {
        name: "1000g",
        description:
          "Perfect for offices and events. Yields about 90 delightful cups.",
      },
    ],
  },
  {
    question: "Want us to grind them?",
    type: "Grind Option",
    options: [
      {
        name: "Wholebean",
        description: "Best choice if you cherish the full sensory experience",
      },
      {
        name: "Filter",
        description:
          "For drip or pour-over coffee methods such as V60 or Aeropress",
      },
      {
        name: "Cafetiére",
        description:
          "Course ground beans specially suited for french press coffee",
      },
    ],
  },
  {
    question: "How often should we deliver?",
    type: "Deliveries",
    options: [
      {
        name: "Every week",
        description: "$7.20 per shipment. Includes free first-class shipping.",
        subscriptionCost: {
          quarter: "28.80",
          half: "52.00",
          full: "88.00",
        },
      },
      {
        name: "Every 2 weeks",
        description: "$9.60 per shipment. Includes free priority shipping.",
        subscriptionCost: {
          quarter: "19.20",
          half: "35.00",
          full: "22.00",
        },
      },
      {
        name: "Every month",
        description: "$12.00 per shipment. Includes free priority shipping.",
        subscriptionCost: {
          quarter: "12.00",
          half: "22.00",
          full: "42.00",
        },
      },
    ],
  },
];
