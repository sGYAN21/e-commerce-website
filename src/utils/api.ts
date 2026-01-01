// api.ts
import { config } from "../conf/config";
import { Product, ProductView } from '@/types/type';


export async function fetchProducts(): Promise<ProductView[]> {
  try {
    const res = await fetch(config.dummyProducts);
    if (!res.ok) throw new Error("Failed to fetch products");

    const data = await res.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export async function fetchCategoryProducts(category: string): Promise<any[]> {
  if(!category) return [];
  try {
    const res = await fetch(`${config.dummyProductCategory}/${category}`);

    if (!res.ok) throw new Error(`Failed to fetch category: ${category}`);
    const data = await res.json();
    return data.products  || [];
  } catch (error) {
    console.error(`Error fetching ${category} products:`, error);
    return [];
  }
};

export async function fetchCategories(): Promise<any[]>{
  try{
    const res = await fetch(config.dummyProductCategories);
    if(!res.ok) throw new Error("Failed to fetch categories")
      const data = await res.json()
    return data
  }
  catch(error){
      console.error("Error fetching categories:", error);
      return [];
  }
}
export async function fetchProductById(id: number): Promise<Product | null> {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);

    if (!res.ok) throw new Error("Failed to fetch product");

    const data = await res.json();
    return data; // API returns a single product object
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return null;
  }
}

export async function fetchSingleProduct(id: number): Promise<any> {
  try {
    const res = await fetch(`${config.dummyProducts}/${id}`);
    if (!res.ok) throw new Error("Failed to fetch products");
    return await res.json(); // returns an OBJECT
  } catch (error) {
    console.log("Error in fetching Search ", error);
    return null; // not []
  }
}


export async function fetchProductSearch(slug:string) : Promise<any[]>{
  try {
    const res = await fetch (`${config.dummyProductSearch}${slug}`)
    if (!res.ok) throw new Error("Failed to fetch products");
    const data = await res.json()
    return data.products || [];
  } catch (error) {
    console.log("Error in fetching Search ",error)
    return [];
  }
}
