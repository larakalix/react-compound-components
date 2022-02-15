import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ShoppingPage } from "../src/page/ShoppingPage";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Compound Components App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ShoppingPage />
        </div>
    );
};

export default Home;
