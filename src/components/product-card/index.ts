import { ProductCard as ProductCardComponent } from "./ProductCard";
import { ProductCardInfo } from "./components/ProductCardInfo";
import { ProductCardImage } from "./components/ProductCardImage";
import { ProductCardActions } from "./components/ProductCardActions";
import { ProductCardVariants } from "./components/ProductCardVariants";
import { ProductCardComponentProps } from "./interfaces/interfaces";

export { ProductCardActions } from "./components/ProductCardActions";
export { ProductCardVariants } from "./components/ProductCardVariants";
export { ProductCardImage } from "./components/ProductCardImage";
export { ProductCardInfo } from "./components/ProductCardInfo";

export const ProductCard: ProductCardComponentProps = Object.assign(
    ProductCardComponent,
    {
        Info: ProductCardInfo,
        Image: ProductCardImage,
        Actions: ProductCardActions,
        Variants: ProductCardVariants,
    }
);
