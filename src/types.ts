export interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  description: string;
  sizes: string[];
}

export interface SizeGuide {
  category: string;
  measurements: {
    size: string;
    bust: string;
    waist: string;
    hips: string;
  }[];
}