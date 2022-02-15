import { products } from "../data/products";
import { Product } from "../components/product-card/interfaces/interfaces";
import { ProductCardInfo, ProductCardVariants, ProductCardActions, ProductCard } from "../components/product-card";

export const ShoppingPage = () => {
    return (
        <div className="flex items-center justify-center flex-col">
            <h1 className="uppercase mb-10 mt-4 font-bold text-2xl">
                Shopping Store
            </h1>
            <div className="flex flex-row flex-wrap">
                {products.map(({ id, ...props }: Product) => (
                    <ProductCard key={id} product={{ id, ...props }}>
                        <ProductCardInfo />
                        <ProductCardVariants />
                        {/* <ProductCardActions /> */}
                        <ProductCard.Actions />
                    </ProductCard>
                ))}
            </div>
        </div>
    );
};
