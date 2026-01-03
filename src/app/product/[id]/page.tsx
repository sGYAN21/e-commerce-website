import { getProductData } from "@/services/productService";
import ProductViewPage from "./ProductViewPage"; 
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  // Call the fetching model
  const product = await getProductData(id);

  // If the model returns null, trigger the Next.js 404 page
  if (!product) {
    return notFound();
  }

  // Pass the server-fetched data to the Client UI
  return <ProductViewPage product={product} />;
}