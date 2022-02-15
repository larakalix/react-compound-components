import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { ProductCardActionsProps } from "../interfaces/interfaces";
import { NotAvailable } from "./NotAvailable";

export const ProductCardActions = ({ styles }: ProductCardActionsProps) => {
    const { product, counter, increaseByValue } = useContext(ProductContext);

    if (product.onlyShow) return <NotAvailable />;

    return (
        <div className={`flex space-x-4 mb-6 text-sm font-medium ${styles}`}>
            <div className="flex-auto flex space-x-4">
                <button
                    className="h-10 px-6 font-semibold rounded-md bg-black text-white"
                    type="submit"
                >
                    Add to bag
                </button>
                <div className="flex items-center justify-between h-10 px-4 font-semibold rounded-md border border-slate-200 text-slate-900">
                    <div
                        className="font-bold cursor-pointer select-none"
                        onClick={() => increaseByValue(-1)}
                    >
                        -
                    </div>
                    <div className="my-2 mx-4 select-none">{counter}</div>
                    <div
                        className="font-bold cursor-pointer select-none"
                        onClick={() => increaseByValue(1)}
                    >
                        +
                    </div>
                </div>
            </div>
        </div>
    );
};
