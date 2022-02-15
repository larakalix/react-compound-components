import { ReactElement } from "react";

export interface IPurchasable {
    name: string;
    price: string;
    stock: number;
}

export interface Product extends IPurchasable {
    id: string;
    image: string;
    variants: Variants[];
    onlyShow?: boolean;
}

export interface Variants extends IPurchasable {}

export interface ProductCardProps {
    children?: ReactElement | ReactElement[];
    product: Product;
}

export interface ProductCardInfoProps {
    name?: string;
    price?: string;
}

export interface ProductCardImageProps {
    name?: string;
    image?: string;
}

export interface ProductCardVariantsProps {
    variants?: Variants[];
}

export interface ProductCardComponentProps {
    ({ children, product }: ProductCardProps): JSX.Element;
    Info: ({ name, price }: ProductCardInfoProps) => JSX.Element;
    Image: ({ name, image }: ProductCardImageProps) => JSX.Element;
    Actions: () => JSX.Element;
    Variants: ({ variants }: ProductCardVariantsProps) => JSX.Element;
}
