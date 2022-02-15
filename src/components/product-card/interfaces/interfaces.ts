import { ReactElement } from "react";

export interface IStyled {
    styles?: string;
}

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
    styles?: string;
}

export interface Variants extends IPurchasable {}

export interface ProductCardProps extends IStyled {
    children?: ReactElement | ReactElement[];
    product: Product;
}

export interface ProductCardInfoProps extends IStyled {
    name?: string;
    price?: string;
}

export interface ProductCardImageProps extends IStyled {
    name?: string;
    image?: string;
}

export interface ProductCardVariantsProps extends IStyled {
    variants?: Variants[];
}

export interface ProductCardActionsProps extends IStyled {}

export interface ProductCardComponentProps {
    ({ children, product }: ProductCardProps): JSX.Element;
    Info: ({ name, price, styles }: ProductCardInfoProps) => JSX.Element;
    Image: ({ name, image, styles }: ProductCardImageProps) => JSX.Element;
    Actions: ({ styles }: ProductCardActionsProps) => JSX.Element;
    Variants: ({ variants, styles }: ProductCardVariantsProps) => JSX.Element;
}
