import heroImg from "./images/hero-img.jpg";
import maizeImg from "./images/maize-img.png";
import cassavaImg from "./images/cassava-img.png";
import milletImg from "./images/millet-img.png";
import riceImg from "./images/rice-img.png";
import sorghumImg from "./images/sorghum-img.png";
import yamImg from "./images/yam-img.png";
import ragiImg from "./images/ragi-img.png";
import oatsImg from "./images/oats-img.png";

export const assets = [
  heroImg,
  maizeImg,
  cassavaImg,
  milletImg,
  riceImg,
  sorghumImg,
  yamImg,
  ragiImg,
  oatsImg,
];

export const menu = [
  { link: "/", label: "Home" },
  { link: "/shop", label: "Collection" },
  { link: "/about", label: "About" },
  { link: "/contact", label: "Contact" },
];

export const products = [
  {
    id: 1,
    name: "Premium Maize Flour",
    description:
      "High-quality maize flour, perfect for traditional recipes and baking.",
    price: 2.99,
    category: "Flour",
    subcategory: "Maize",
    quantity: 150,
    date: "2024-12-09",
    bestSeller: true,
    images: [maizeImg, ragiImg, oatsImg, maizeImg],
    suitableFor: ["kids", "adults"],
  },
  {
    id: 2,
    name: "Cassava Flour",
    description:
      "Organic cassava flour, gluten-free and ideal for a variety of dishes.",
    price: 3.49,
    category: "Flour",
    subcategory: "Cassava",
    quantity: 200,
    date: "2024-12-09",
    bestSeller: true,
    images: [cassavaImg],
    suitableFor: ["kids", "adults"],
  },
  {
    id: 3,
    name: "Millet Flour",
    description:
      "Nutritious millet flour, perfect for porridge and healthy meals.",
    price: 2.79,
    category: "Flour",
    subcategory: "Millet",
    quantity: 120,
    date: "2024-12-09",
    bestSeller: false,
    images: [milletImg],
    suitableFor: ["kids", "adults"],
  },
  {
    id: 4,
    name: "Rice Flour",
    description:
      "Fine rice flour, a versatile ingredient for gluten-free cooking.",
    price: 4.29,
    category: "Flour",
    subcategory: "Rice",
    quantity: 180,
    date: "2024-12-09",
    bestSeller: true,
    images: [riceImg],
    suitableFor: ["kids", "adults"],
  },
  {
    id: 5,
    name: "Sorghum Flour",
    description: "Whole grain sorghum flour, rich in nutrients and fiber.",
    price: 3.19,
    category: "Flour",
    subcategory: "Sorghum",
    quantity: 100,
    date: "2024-12-09",
    bestSeller: false,
    images: [sorghumImg],
    suitableFor: ["kids", "adults"],
  },
  {
    id: 6,
    name: "Yam Flour",
    description: "Traditional yam flour, perfect for pounded yam dishes.",
    price: 3.89,
    category: "Flour",
    subcategory: "Yam",
    quantity: 80,
    date: "2024-12-09",
    bestSeller: false,
    images: [yamImg],
    suitableFor: ["kids", "adults"],
  },
  {
    id: 7,
    name: "Ragi Flour",
    description: "Packed with calcium, ideal for healthy porridge meals.",
    price: 3.29,
    category: "Flour",
    subcategory: "Ragi",
    quantity: 110,
    date: "2024-12-09",
    bestSeller: true,
    images: [ragiImg],
    suitableFor: ["kids", "adults"],
  },
  {
    id: 8,
    name: "Oats Flour",
    description:
      "Gluten-free oats flour, perfect for quick and healthy porridge.",
    price: 3.99,
    category: "Flour",
    subcategory: "Oats",
    quantity: 90,
    date: "2024-12-09",
    bestSeller: false,
    images: [oatsImg],
    suitableFor: ["kids", "adults"],
  },
  {
    id: 9,
    name: "Wheat Flour",
    description: "High-quality wheat flour, essential for baking and cooking.",
    price: 3.49,
    category: "Flour",
    subcategory: "Wheat",
    quantity: 150,
    date: "2024-12-09",
    bestSeller: true,
    images: [ragiImg],
    suitableFor: ["kids", "adults"],
  },
  {
    id: 10,
    name: "Barley Flour",
    description:
      "Organic barley flour, rich in nutrients and ideal for porridge.",
    price: 3.59,
    category: "Flour",
    subcategory: "Barley",
    quantity: 120,
    date: "2024-12-09",
    bestSeller: true,
    images: [oatsImg],
    suitableFor: ["kids", "adults"],
  },
  {
    id: 12,
    name: "Quinoa Flour",
    description:
      "Rich in protein, perfect for nutritious and versatile cooking.",
    price: 4.29,
    category: "Fruit",
    subcategory: "Quinoa",
    quantity: 95,
    date: "2024-12-09",
    bestSeller: false,
    images: [cassavaImg],
    suitableFor: ["kids", "adults"],
  },
  {
    id: 13,
    name: "Amaranth Flour",
    description: "A powerhouse of nutrients, ideal for gluten-free recipes.",
    price: 4.49,
    category: "Fruit",
    subcategory: "Amaranth",
    quantity: 130,
    date: "2024-12-09",
    bestSeller: true,
    images: [milletImg],
    suitableFor: ["kids", "adults"],
  },
  {
    id: 14,
    name: "Chickpea Flour",
    description:
      "Versatile chickpea flour, excellent for savory and sweet dishes.",
    price: 3.79,
    category: "Fruit",
    subcategory: "Chickpea",
    quantity: 160,
    date: "2024-12-09",
    bestSeller: true,
    images: [riceImg],
    suitableFor: ["kids", "adults"],
  },
  {
    id: 15,
    name: "Teff Flour",
    description:
      "High in fiber and iron, great for healthy and wholesome recipes.",
    price: 4.99,
    category: "Fruit",
    subcategory: "Teff",
    quantity: 80,
    date: "2024-12-09",
    bestSeller: false,
    images: [sorghumImg],
    suitableFor: ["kids", "adults"],
  },
  {
    id: 16,
    name: "Coconut Flour",
    description:
      "Naturally sweet, low-carb, and perfect for keto-friendly dishes.",
    price: 5.29,
    category: "Fruit",
    subcategory: "Coconut",
    quantity: 90,
    date: "2024-12-09",
    bestSeller: true,
    images: [yamImg],
    suitableFor: ["kids", "adults"],
  },
  {
    id: 17,
    name: "Soy Flour",
    description: "Protein-rich soy flour, ideal for enhancing baked goods.",
    price: 3.19,
    category: "Fruit",
    subcategory: "Soy",
    quantity: 110,
    date: "2024-12-09",
    bestSeller: false,
    images: [ragiImg],
    suitableFor: ["kids", "adults"],
  },
  {
    id: 18,
    name: "Almond Flour",
    description: "Finely ground almonds for baking and keto-friendly recipes.",
    price: 6.49,
    category: "Fruit",
    subcategory: "Almond",
    quantity: 70,
    date: "2024-12-09",
    bestSeller: true,
    images: [oatsImg],
    suitableFor: ["kids", "adults"],
  },
  {
    id: 19,
    name: "Pea Flour",
    description: "A gluten-free option packed with protein and flavor.",
    price: 3.89,
    category: "Fruit",
    subcategory: "Pea",
    quantity: 100,
    date: "2024-12-09",
    bestSeller: false,
    images: [cassavaImg],
    suitableFor: ["kids", "adults"],
  },
  {
    id: 20,
    name: "Plantain Flour",
    description: "A tropical delight, perfect for smoothies and baking.",
    price: 4.29,
    category: "Fruit",
    subcategory: "Plantain",
    quantity: 125,
    date: "2024-12-09",
    bestSeller: true,
    images: [milletImg],
    suitableFor: ["kids", "adults"],
  },
  {
    id: 21,
    name: "Tapioca Flour",
    description: "Smooth and starchy, a great thickener for sauces and soups.",
    price: 2.99,
    category: "Vegetable",
    subcategory: "Tapioca",
    quantity: 150,
    date: "2024-12-09",
    bestSeller: true,
    images: [riceImg],
    suitableFor: ["kids", "adults"],
  },
  {
    id: 22,
    name: "Arrowroot Flour",
    description: "A natural thickener, ideal for gluten-free baking.",
    price: 3.69,
    category: "Vegetable",
    subcategory: "Arrowroot",
    quantity: 140,
    date: "2024-12-09",
    bestSeller: true,
    images: [sorghumImg],
    suitableFor: ["kids", "adults"],
  },
  {
    id: 23,
    name: "Chestnut Flour",
    description: "Sweet and nutty, a traditional choice for Italian cuisine.",
    price: 4.59,
    category: "Vegetable",
    subcategory: "Chestnut",
    quantity: 85,
    date: "2024-12-09",
    bestSeller: false,
    images: [yamImg],
    suitableFor: ["kids", "adults"],
  },
  {
    id: 24,
    name: "Rice Bran Flour",
    description: "Packed with fiber, a nutritious option for baked goods.",
    price: 3.29,
    category: "Vegetable",
    subcategory: "Rice Bran",
    quantity: 110,
    date: "2024-12-09",
    bestSeller: false,
    images: [ragiImg],
    suitableFor: ["kids", "adults"],
  },
  {
    id: 25,
    name: "Hemp Flour",
    description: "Rich in omega-3s, perfect for smoothies and baked goods.",
    price: 5.19,
    category: "Vegetable",
    subcategory: "Hemp",
    quantity: 100,
    date: "2024-12-09",
    bestSeller: true,
    images: [oatsImg],
    suitableFor: ["kids", "adults"],
  },
  {
    id: 26,
    name: "Black Bean Flour",
    description: "High in protein, ideal for savory dishes and baking.",
    price: 3.49,
    category: "Vegetable",
    subcategory: "Black Bean",
    quantity: 130,
    date: "2024-12-09",
    bestSeller: false,
    images: [cassavaImg],
    suitableFor: ["kids", "adults"],
  },
  {
    id: 27,
    name: "Pumpkin Seed Flour",
    description: "Rich in magnesium, a unique and flavorful option for baking.",
    price: 5.79,
    category: "Vegetable",
    subcategory: "Pumpkin Seed",
    quantity: 75,
    date: "2024-12-09",
    bestSeller: true,
    images: [milletImg],
    suitableFor: ["kids", "adults"],
  },
  {
    id: 28,
    name: "Sunflower Seed Flour",
    description: "A nut-free alternative, perfect for baked goods.",
    price: 3.99,
    category: "Vegetable",
    subcategory: "Sunflower Seed",
    quantity: 95,
    date: "2024-12-09",
    bestSeller: false,
    images: [riceImg],
    suitableFor: ["kids", "adults"],
  },
  {
    id: 29,
    name: "Lentil Flour",
    description: "A protein-rich flour for healthy and hearty meals.",
    price: 3.89,
    category: "Vegetable",
    subcategory: "Lentil",
    quantity: 100,
    date: "2024-12-09",
    bestSeller: true,
    images: [sorghumImg],
    suitableFor: ["kids", "adults"],
  },
  {
    id: 30,
    name: "Hazelnut Flour",
    description: "A sweet and nutty flour for luxurious baking.",
    price: 6.19,
    category: "Vegetable",
    subcategory: "Hazelnut",
    quantity: 50,
    date: "2024-12-09",
    bestSeller: false,
    images: [yamImg],
    suitableFor: ["kids", "adults"],
  },
];
