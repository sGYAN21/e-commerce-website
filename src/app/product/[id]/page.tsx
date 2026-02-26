import { getProductData } from "@/services/productService";
import ProductViewPage from "./ProductViewPage"; 
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const product = await getProductData(id);

  if (!product) {
    return notFound();
  }

  return <ProductViewPage product={product} />;
}