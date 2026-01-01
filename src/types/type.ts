
export interface Product {
  id: number;
  title: string;
  category: string;
  rating: number;
  price: number;
  thumbnail: string;
  description: string;
}

export interface BannerProduct  {
  id: number,
  title: string,
  rating: number,
  thumbnail: string,
  brand: string,
  discountPercentage: string,
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
export type ProductView = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  tags: string[];
  images: string[];
  thumbnail: string;
  reviews: string[];
};
