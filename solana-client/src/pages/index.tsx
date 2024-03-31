import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
    return (
        <div>
            <Head>
                <title>Solana SPl Token Program</title>
                <meta name="description" content="Solana NFT" />
            </Head>
            <HomeView />
        </div>
    );
};

export default Home;
