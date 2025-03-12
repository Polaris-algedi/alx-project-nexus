export interface Product {
  _id: string;
  name: string;
  brand: string;
  material: string;
  price: number;
  quantity: number;
  originalPrice?: number;
  images: string[];
  // Add other product properties as needed
}
