import type { NextPage } from "next";
import Head from "next/head";
import { FungibleView } from "../views";

const FungIndex: NextPage = (props) => {
    return (
        <div>
            <Head>
                <title>Solana Fungible Spl Token</title>
                <meta name="description" content="Solana NFT" />
            </Head>
            <FungibleView />
        </div>
    );
};

export default FungIndex;