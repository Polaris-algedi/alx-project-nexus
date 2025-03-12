import ProductGrid from "@/components/products/ProductGrid";
import { Product } from "@/interfaces";

export default function Products() {
  // Mock product data
  const mockProducts: Product[] = [
    {
      _id: "1",
      name: "Submariner Date",
      brand: "Rolex",
      price: 8999.99,
      originalPrice: 9999.99,
      images: ["/images/watch1.png"],
      material: "Stainless Steel",
      quantity: 1,
      description:
        "A classic luxury diving watch from Rolex with the Submariner Date model.",
      condition: "New",
      bracelet: "Oyster",
      movement: "Automatic",
      thickness: "12.5mm",
      glass: "Sapphire",
      luminova: "Yes",
      casematerial: "Stainless Steel",
      crown: "Screw-down",
      bandsize: "20mm",
      lugs: "20mm",
      water: "300m",
    },
    {
      _id: "2",
      name: "Nautilus 5711",
      brand: "Patek Philippe",
      price: 125000.0,
      images: ["/images/watch1.png"],
      material: "Stainless Steel",
      quantity: 1,
      description:
        "The iconic Patek Philippe Nautilus 5711, known for its elegant design and craftsmanship.",
      condition: "New",
      bracelet: "Steel",
      movement: "Automatic",
      thickness: "8mm",
      glass: "Sapphire",
      luminova: "Yes",
      casematerial: "Stainless Steel",
      crown: "Screw-down",
      bandsize: "22mm",
      lugs: "21mm",
      water: "120m",
    },
    {
      _id: "3",
      name: "Royal Oak",
      brand: "Audemars Piguet",
      price: 45000.0,
      images: ["/images/watch1.png"],
      material: "Stainless Steel",
      quantity: 1,
      description:
        "Audemars Piguet Royal Oak, an iconic watch that blends sporty elegance with luxury.",
      condition: "Used",
      bracelet: "Steel",
      movement: "Automatic",
      thickness: "9mm",
      glass: "Sapphire",
      luminova: "Yes",
      casematerial: "Stainless Steel",
      crown: "Screw-down",
      bandsize: "19mm",
      lugs: "18mm",
      water: "50m",
    },
    {
      _id: "4",
      name: "RM 011",
      brand: "Richard Mille",
      price: 250000.0,
      images: ["/images/watch1.png"],
      material: "Titanium",
      quantity: 1,
      description:
        "Richard Mille RM 011, a highly technical and luxurious watch with a bold design.",
      condition: "New",
      bracelet: "Rubber",
      movement: "Automatic",
      thickness: "12mm",
      glass: "Sapphire",
      luminova: "Yes",
      casematerial: "Titanium",
      crown: "Screw-down",
      bandsize: "22mm",
      lugs: "21mm",
      water: "100m",
    },
    {
      _id: "5",
      name: "Speedmaster",
      brand: "Omega",
      price: 6500.0,
      originalPrice: 7500.0,
      images: ["/images/watch1.png"],
      material: "Stainless Steel",
      quantity: 1,
      description:
        "Omega Speedmaster, the legendary moonwatch worn by astronauts on lunar missions.",
      condition: "New",
      bracelet: "Steel",
      movement: "Manual",
      thickness: "14mm",
      glass: "Sapphire",
      luminova: "Yes",
      casematerial: "Stainless Steel",
      crown: "Push-pull",
      bandsize: "20mm",
      lugs: "18mm",
      water: "50m",
    },
    // Add more mock products as needed
    ...Array.from({ length: 15 }).map((_, i) => ({
      _id: `${i + 6}`,
      name: `Watch Model ${i + 6}`,
      brand: ["Rolex", "Omega", "Cartier", "Tudor"][i % 4],
      price: Math.floor(Math.random() * 10000) + 1000,
      originalPrice: Math.floor(Math.random() * 12000) + 1000,
      images: ["/images/watch1.png"],
      material: "Stainless Steel",
      quantity: 1,
      description: `Watch Model ${
        i + 6
      } is a stylish and functional timepiece with elegant design.`,
      condition: "New",
      bracelet: "Steel",
      movement: "Automatic",
      thickness: `${Math.floor(Math.random() * 10) + 10}mm`,
      glass: "Sapphire",
      luminova: "Yes",
      casematerial: "Stainless Steel",
      crown: "Screw-down",
      bandsize: `${Math.floor(Math.random() * 5) + 18}mm`,
      lugs: "20mm",
      water: "100m",
    })),
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ProductGrid products={mockProducts} />
    </div>
  );
}
