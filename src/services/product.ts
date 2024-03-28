import { Cor, Product } from "../types/product";
import { api } from "./api";

async function getProducts(): Promise<Product[]> {
  const response = await api.get<Product[]>("/");
  const responseWithSlug = response.data.map((product) => {
    return {
      ...product,
      slug: product.titulo
        .replace(/ /g, "-")
        .replace(/[^\w ]/, "")
        .toLowerCase(),
    };
  });
  return responseWithSlug;
}

async function getProductBySlug(slug: string | undefined) {
  const response = await getProducts();
  const product = response.find((product) => product.slug === slug);
  return product as Product;
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

async function getColors(productSelected: Product | null): Promise<Cor[]> {
  const response = await api.get<Product[]>("/");

  const colors = response.data
    .map((product) => product.cores)
    .map((p) => {
      if (productSelected) {
        return p.filter((color) => productSelected.cores.includes(color));
      }
      return p;
    })
    .reduce((acc, color) => acc.concat(color), []);

  const uniqueColors = Array.from(
    new Set(colors.map((e) => JSON.stringify(e)))
  ).map((e) => JSON.parse(e));

  return uniqueColors;
}

async function getSizes(productSelected: Product | null): Promise<string[]> {
  const response = await api.get<Product[]>("/");

  const sizes = response.data
    .map((product) => product.tamanhos)
    .map((p) => {
      if (productSelected) {
        return p.filter((size) => productSelected.tamanhos.includes(size));
      }
      return p;
    })
    .reduce((acc, size) => acc.concat(size), []);

  const uniqueColors = Array.from(
    new Set(sizes.map((e) => JSON.stringify(e)))
  ).map((e) => JSON.parse(e));

  return uniqueColors;
}

export {
  getProducts,
  getProductByTitle,
  getCategories,
  getColors,
  getSizes,
  getProductBySlug,
};
