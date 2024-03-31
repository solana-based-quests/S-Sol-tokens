import { AppProps } from "next/app";
import Head from "next/head";
import { FC } from "react";
import { ContextProvider } from "../contexts/ContextProvider";
import { AppBar } from "../components/AppBar";
import { Footer } from "../components/Footer";
import Notifications from "../components/Notification";
require("@solana/wallet-adapter-react-ui/styles.css");
require("../styles/globals.css");

const App: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Solana Scaffold Lite</title>
            </Head>

            <ContextProvider>
                <div className="flex flex-col min-h-screen bg-[#000] bg-contain bg-no-repeat bg-[url('/heroBg.png')] relative">
                    <Notifications />
                    <div className="min-h-[calc(100vh-86px)]">
                        <AppBar />
                        <Component {...pageProps} />
                    </div>
                    <Footer />
                </div>
            </ContextProvider>
        </>
    );
};

export default App;
