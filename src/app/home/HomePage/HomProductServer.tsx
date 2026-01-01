import { fetchProducts } from "@/utils/api";
import HomeProduct from "./HomeProduct";

export default async function HomeProductServer({ category }: { category?: string }) {
  const products = await fetchProducts(); 
  
  return <HomeProduct products={products} />;
}