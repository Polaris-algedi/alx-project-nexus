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
      material: "Stainless Steel", // Add if required
      quantity: 1, // Add if required
    },
    {
      _id: "2",
      name: "Nautilus 5711",
      brand: "Patek Philipe",
      price: 125000.0,
      images: ["/images/watch1.png"],
      material: "Stainless Steel", // Add if required
      quantity: 1, // Add if required
    },
    {
      _id: "3",
      name: "Royal Oak",
      brand: "Audemars Piguet",
      price: 45000.0,
      images: ["/images/watch1.png"],
      material: "Stainless Steel", // Add if required
      quantity: 1, // Add if required
    },
    {
      _id: "4",
      name: "RM 011",
      brand: "Richard Mille",
      price: 250000.0,
      images: ["/images/watch1.png"],
      material: "Stainless Steel", // Add if required
      quantity: 1, // Add if required
    },
    {
      _id: "5",
      name: "Speedmaster",
      brand: "Omega",
      price: 6500.0,
      originalPrice: 7500.0,
      images: ["/images/watch1.png"],
      material: "Stainless Steel", // Add if required
      quantity: 1, // Add if required
    },
    // Add more mock products as needed
    ...Array.from({ length: 15 }).map((_, i) => ({
      _id: `${i + 6}`,
      name: `Watch Model ${i + 6}`,
      brand: ["Rolex", "Omega", "Cartier", "Tudor"][i % 4],
      price: Math.floor(Math.random() * 10000) + 1000,
      originalPrice: Math.floor(Math.random() * 12000) + 1000,
      images: ["/images/watch1.png"],
      material: "Stainless Steel", // Add if required
      quantity: 1, // Add if required
    })),
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ProductGrid products={mockProducts} />
    </div>
  );
}
