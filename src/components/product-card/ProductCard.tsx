import { ProductContext } from "./context/ProductContext";
import useProduct from "./hooks/useProduct";
import { ProductCardProps } from "./interfaces/interfaces";
import { ProductCardImage } from "./components/ProductCardImage";

const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
    const { counter, increaseByValue } = useProduct();

    return (
        <Provider
            value={{
                product,
                counter,
                increaseByValue,
            }}
        >
            <div className="flex font-sans p-4 w-full md:w-[50vw]">
                <ProductCardImage />
                <div className="flex-auto p-6">{children}</div>
            </div>
        </Provider>
    );
};
