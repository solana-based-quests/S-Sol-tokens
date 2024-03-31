/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import * as anchor from "@coral-xyz/anchor";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { useState } from "react";
import idl from "../../../idl.json";
import {
    getAccount,
    getAssociatedTokenAddress,
    TOKEN_PROGRAM_ID,
    ASSOCIATED_TOKEN_PROGRAM_ID,
    createAssociatedTokenAccountInstruction,
} from "@solana/spl-token";
import { AnchorProvider, Idl, Program } from "@coral-xyz/anchor";
import { Commitment, PublicKey, Connection, Keypair, Transaction } from "@solana/web3.js";
import { notify } from "utils/notifications";
import { Nft, Sft, Metaplex } from "@metaplex-foundation/js";
import { set } from "date-fns";
import { LinkIcon, Loader } from "components/Icons";
import { BN } from "bn.js";
import { MintNFTButton } from "components/MintNFTButton";


/* eslint-disable @next/next/no-img-element */












const opts: { preflightCommitment: Commitment } = {
    preflightCommitment: "processed",
};

const programId = new PublicKey(idl.metadata.address);

export const NFTCard = ({ mint, nftDetails, ifNftTransfered, setifNftTransfered }: { mint: Keypair; nftDetails: Sft | Nft; ifNftTransfered:boolean; setifNftTransfered:any;  }) => {
    console.log("nft details", nftDetails)
    const [buyer, setBuyer] = useState("");
    const [loading, setLoading] = useState(false);
    const [txSig, setTxSig] = useState<string | null>(null);

    const { connection } = useConnection();

    const wallet = useWallet();

    const { publicKey, sendTransaction } = useWallet();

    useEffect(()=>{
        if(txSig){
            setifNftTransfered(true);
        }

    },[txSig])

    const link = () => {
        return txSig ? `https://explorer.solana.com/tx/${txSig}?cluster=devnet` : "";
    };

    const getProgram = () => {
        /* create the provider and return it to the caller */
        const provider = new AnchorProvider(connection, wallet as any, opts);
        /* create the program interface combining the idl, program ID, and provider */
        const program = new Program(idl as Idl, programId, provider);
        return program;
    };

    const program = getProgram();

    const transferNFT = async () => {
        setLoading(true);
        try {
            const transaction = new Transaction();

            const sellerTokenAccount = await getAssociatedTokenAddress(
                mint.publicKey,
                publicKey,
                false,
                TOKEN_PROGRAM_ID,
                ASSOCIATED_TOKEN_PROGRAM_ID
            );

            const buyerPublicKey = new anchor.web3.PublicKey(buyer);

            // Derive wallet's associated token account address for mint
            const buyerTokenAccount = await getAssociatedTokenAddress(
                mint.publicKey,
                buyerPublicKey,
                false,
                TOKEN_PROGRAM_ID,
                ASSOCIATED_TOKEN_PROGRAM_ID
            );

            try {
                await getAccount(connection, buyerTokenAccount);
            } catch (e) {
                transaction.add(
                    createAssociatedTokenAccountInstruction(
                        publicKey,
                        buyerTokenAccount,
                        buyerPublicKey,
                        mint.publicKey,
                        TOKEN_PROGRAM_ID,
                        ASSOCIATED_TOKEN_PROGRAM_ID
                    )
                );
                // transaction.add(instruction);
                transaction.feePayer = wallet.publicKey;

                const tx1 = await sendTransaction(transaction, connection);
            }

            const tx = await program.methods
                .transferTokens(new BN(1))
                .accounts({
                    from: publicKey,
					fromAta: sellerTokenAccount,
					toAta: buyerTokenAccount,
					tokenProgram: TOKEN_PROGRAM_ID
                })
                .rpc({ skipPreflight: true });

            setTxSig(tx);

            const buyerTokenAccountAmount = (await getAccount(connection, buyerTokenAccount)).amount;

            notify({ message: "NFT Transferred" });
        } catch (err) {
            console.log(err);
            notify({ message: err.message });
        }
        setLoading(false);
    };

    return (
        <div>
            {ifNftTransfered?<div>YOu need to mint an NFt</div>:<div className="card bg-white border-white bg-blur bg-opacity-30 rounded-lg ">
                <img className="max-h-80 w-auto" alt="nft img" src={nftDetails.json.image} />
                <div className="p-4 pt-4 flex flex-col gap-y-4">
                    <div className="font-bold text-lg ">{nftDetails.json.symbol}</div>
                    <div className="text-gray-200">{nftDetails.json.name}</div>
                    <div className="text-gray-200">{nftDetails.json.description}</div>
                    <div className="flex flex-col gap-y-2">
                        {txSig ? "Transferred" : "Transfer"} To:
                        <input
                            disabled={!!txSig}
                            onChange={(e) => setBuyer(e.target.value)}
                            className="input py-1 h-10"
                        />
                    </div>

                    {!txSig && (
                        <button onClick={transferNFT} className="btn mt-2 w-fit px-8 h-10 min-h-10 ml-auto">
                            Send {loading && <Loader className="ml-3 -mr-1" />}
                        </button>
                    )}
                </div>
            </div>}
            
            {txSig ? (
                <div className="flex flex-col gap-y-2 mt-4">
                    <p>
                        NFT Transferred to : &nbsp;
                        <a
                            href={`https://explorer.solana.com/address/${buyer}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn p-1 min-h-0 h-fit bg-opacity-50 normal-case gap-x-2"
                        >
                            {buyer}
                        </a>
                    </p>
                    <p className="gap-x-2">
                        View your transaction on &nbsp;
                        <a className="link flex gap-x-2" target="_blank" rel="noopener noreferrer" href={link()}>
                            Solana Explorer
                            <span className="h-5 w-5">
                                <LinkIcon />
                            </span>
                        </a>
                    </p>
                </div>
            ) : null}
        </div>
    );
};
