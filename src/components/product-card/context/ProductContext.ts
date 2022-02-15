import { createContext } from "react";
import { Product } from "../interfaces/interfaces";

interface ProductContextProps {
    counter: number;
    product: Product;
    increaseByValue: (value: number) => void;
}

export const ProductContext = createContext({} as ProductContextProps);

export default ProductContext;
