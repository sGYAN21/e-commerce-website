import { fetchProductSearch } from "@/utils/api";
import { fetchProductById } from "@/utils/api";

export async function getProductsBySlug(slug: string | string[]) {
  const searchTerm = Array.isArray(slug) ? slug[0] : slug;
  if (!searchTerm) return [];
  
  try {
    const data = await fetchProductSearch(searchTerm);
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function getProductData(id: string | number) {
  // Ensure we have a valid ID
  if (!id) return null;

  try {
    // Convert to number as required by your fetchProductById function
    const productId = Number(id);
    const data = await fetchProductById(productId);
    
    // Return the data if found, otherwise null
    return data || null;
  } catch (error) {
    console.error(`Error in getProductData for ID ${id}:`, error);
    return null;
  }
}