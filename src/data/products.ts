import { Product } from "../components/product-card/interfaces/interfaces";

export const products: Product[] = [
    {
        id: '23h2ueg923f82',
        name: "Samsung 980 SSD M.2 NVMe Interface",
        image: "https://m.media-amazon.com/images/I/714VYiAYssL._AC_SL1500_.jpg",
        price: "110.00",
        stock: 10,
        variants: [
            { name: "1TB", price: "110.00", stock: 5 },
            { name: "2TB", price: "150.00", stock: 3 },
            { name: "3TB", price: "190.00", stock: 2 },
        ],
    },
    {
        id: '8fh9fh3f',
        name: "External HDD Seagate 2 TB",
        image: "https://m.media-amazon.com/images/I/81tjLksKixL._AC_SL1500_.jpg",
        price: "64.99",
        stock: 12,
        variants: [
            { name: "Red", price: "64.99", stock: 5 },
            { name: "Blue", price: "64.99", stock: 3 },
            { name: "Black", price: "64.99", stock: 4 },
        ],
    },
    {
        id: '900uerrjff',
        name: "Razer Enki Gaming Chair",
        image: "https://m.media-amazon.com/images/I/61PP2pK+3NL._AC_SL1500_.jpg",
        price: "345.00",
        stock: 11,
        variants: [
            { name: "Green", price: "345.00", stock: 5 },
            { name: "Blue", price: "345.00", stock: 3 },
            { name: "White", price: "345.00", stock: 2 },
            { name: "Black", price: "345.00", stock: 1 },
        ],
        onlyShow: true,
        styles: "bg-yellow-200 rounded-lg"
    },
    {
        id: '332rnefhuifu',
        name: "HyperX QuadCast Gaming Mic",
        image: "https://m.media-amazon.com/images/I/71nozlRTz3L._AC_SL1500_.jpg",
        price: "200.00",
        stock: 8,
        variants: [
            { name: "Red", price: "110.00", stock: 5 },
            { name: "Black", price: "110.00", stock: 3 },
        ],
    },
];
