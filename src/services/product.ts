import { Product } from "../types/product";
import { api } from "./api";

async function getProducts() {
  const response = await api.get<Product[]>("/");
  return response.data;
}

async function getProductByTitle(title: string) {
  const response = await api.get<Product[]>(`/`);
  const product = response.data.find((product) => product.titulo === title);
  return product;
}

async function getCategories(): Promise<string[]> {
  const response = await api.get<Product[]>("/");

  const categories = response.data.map((product) => product.categoria);
  return Array.from(new Set(categories));
}

export { getProducts, getProductByTitle, getCategories };
