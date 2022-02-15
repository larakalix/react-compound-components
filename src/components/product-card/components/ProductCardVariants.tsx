import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { ProductCardVariantsProps, Variants } from "../interfaces/interfaces";

export const ProductCardVariants = ({ variants }: ProductCardVariantsProps) => {
    const { product } = useContext(ProductContext);
    let items: Variants[] = variants ? [...variants] : [...product.variants];

    return (
        <form>
            <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                <div className="space-x-2 flex text-sm">
                    {items.map(({ name, price }: Variants, index: number) => (
                        <label key={index}>
                            <input
                                className="sr-only peer"
                                name="variant"
                                type="radio"
                                value={price}
                                checked
                            />
                            <div className="w-9 h-9 rounded-lg cursor-pointer flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                {name}
                            </div>
                        </label>
                    ))}
                </div>
            </div>
        </form>
    );
};
