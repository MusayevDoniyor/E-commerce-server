// useProduct.js
import { useContext } from "react";
import { ProductContext } from "./ProductContext";

const useProduct = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }

  return context;
};

export default useProduct;
