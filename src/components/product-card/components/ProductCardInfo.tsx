import clsx from "clsx";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { ProductCardInfoProps } from "../interfaces/interfaces";

export const ProductCardInfo = ({ name, price }: ProductCardInfoProps) => {
    const { product } = useContext(ProductContext);
    const stockStyles = clsx({
        ["text-slate-700"]: product.stock > 0,
        ["text-red-700"]: product.stock <= 0,
    });

    return (
        <div className="flex flex-wrap">
            <h1 className="flex-auto text-lg font-semibold text-slate-900">
                {name ? name : product.name}
            </h1>
            <div className="text-lg font-semibold text-slate-500">
                ${price ? price : product.price}
            </div>
            <div
                className={`w-full flex-none text-sm font-medium mt-2 ${stockStyles}`}
            >
                {product.stock > 0 ? "In " : "Out of "} stock
            </div>
        </div>
    );
};
