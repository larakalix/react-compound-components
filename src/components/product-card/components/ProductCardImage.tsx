/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { ProductCardImageProps } from "../interfaces/interfaces";

export const ProductCardImage = ({ name, image }: ProductCardImageProps) => {
    const { product } = useContext(ProductContext);
    let src: string;

    if (image) src = image;
    else src = product.image;

    return (
        <div className="flex-none w-48 relative">
            <img
                src={src}
                alt={name}
                className="absolute inset-0 w-full h-full object-contain bg-white border border-black rounded-lg p-2"
            />
        </div>
    );
};
