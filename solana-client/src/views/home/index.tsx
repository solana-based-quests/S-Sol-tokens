// Next, React
import React, { FC, useEffect, useState } from "react";

// Wallet
import { useWallet, useConnection } from "@solana/wallet-adapter-react";

// Store
import useUserSOLBalanceStore from "../../stores/useUserSOLBalanceStore";

import { MintNFTButton } from "components/MintNFTButton";
import * as anchor from "@coral-xyz/anchor";

import { RequestAirdrop } from "components/ReqAirdrop"

import { useRouter } from "next/router";

export const HomeView: FC = ({ }) => {
    const wallet = useWallet();
    const { connection } = useConnection();
    const [ifNftTransfered, setifNftTransfered] = useState(false);

    const balance = useUserSOLBalanceStore((s) => s.balance);
    const { getUserSOLBalance } = useUserSOLBalanceStore();

    const router = useRouter();

    // Mint Account
    const mintKeypair = anchor.web3.Keypair.generate();

    useEffect(() => {
        if (wallet.publicKey) {
            console.log(wallet.publicKey.toBase58());
            getUserSOLBalance(wallet.publicKey, connection);
        }
    }, [wallet.publicKey, connection, getUserSOLBalance]);


    const routeToFung = (MintToFung) =>{
        if(MintToFung === "MintToFung"){
            router.push("/FungIndex")
        }
    }

    return (
        <div className="md:px-32 px-4 mx-auto py-12 max-w-7xl">
            <div className="md:px-16 px-4 pt-4 flex flex-col items-center gap-y-8">

                <div className="flex flex-col gap-16 w-full items-center">
                    when user connect the user balance will show to screen
                </div>


                <div className="flex flex-col gap-4 w-full items-center gap-y-8">
                    <RequestAirdrop />
                </div>

                <div>
                    <button onClick={()=>routeToFung("MintToFung")} className="flex btn px-8 bg-purple-500 hover:bg-purple-400">Mint fungible token</button>
                </div>

                <div className="flex flex-col gap-16 w-full items-center">
                    <MintNFTButton mint={mintKeypair} ifNftTransfered={ifNftTransfered} setifNftTransfered={setifNftTransfered} />
                </div> 

                {/* <div>
                    <button className="flex btn px-8 bg-purple-500 hover:bg-purple-400">Mint NFT</button>
                </div> */}

            </div>




        </div>
    );
};
