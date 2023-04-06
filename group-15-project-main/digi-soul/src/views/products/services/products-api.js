import { httpClient } from "../../../lib/httpClient";

const getAllProducts = () => {
  return httpClient.get("/products");
};

const getProduct = (productId) => {
  return httpClient.get(`/products/product/${productId}`);
};

const getProductsByCategory = (category)=>{
  return httpClient.get(`/products/product/category/${category}`);
}

const createProduct = (product) => {
  return httpClient.post("/products", { product });
};

export const productsApi = {
    getAllProducts,
    getProduct,
    createProduct,
    getProductsByCategory
}