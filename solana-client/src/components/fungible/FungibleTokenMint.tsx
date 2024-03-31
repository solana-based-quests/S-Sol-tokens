import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";
import { getMint } from "@solana/spl-token";

import * as anchor from "@coral-xyz/anchor";
import { Program, Idl, AnchorProvider, BN, utils, web3 } from "@coral-xyz/anchor";
import { Metaplex } from "@metaplex-foundation/js";

import idl from "../../../idl.json";
import { Commitment, PublicKey, SYSVAR_RENT_PUBKEY } from "@solana/web3.js";
import { notify } from "utils/notifications";
import { CopyIcon, LinkIcon, Loader } from "../Icons";
import { TOKEN_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { getAssociatedTokenAddressSync } from "@solana/spl-token";
import { findMasterEditionPda, findMetadataPda, mplTokenMetadata, MPL_TOKEN_METADATA_PROGRAM_ID } from "@metaplex-foundation/mpl-token-metadata";


const programId = new PublicKey(idl.metadata.address);

const opts: { preflightCommitment: Commitment } = {
    preflightCommitment: "processed",
};

export const CreateMintForm = () => {
    const [txSig, setTxSig] = useState("");
    const [mint, setMint] = useState("");

    const [loading, setLoading] = useState(false);

    const { connection } = useConnection();
    const wallet = useWallet();
    const { publicKey, sendTransaction } = useWallet();

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

    const mintKeypair = anchor.web3.Keypair.generate();

    const tokenTitle = "logo Token";
    const tokenSymbol = "crab";
    const tokenUri = "https://res.cloudinary.com/ddwkxn8ak/image/upload/v1698823073/solangsol/Course1_mhz1c1.png";

    const createMint = async (event) => {
        event.preventDefault();

        setLoading(true);

        if (!publicKey) {
            notify({ type: "error", message: `Wallet not connected!` });
            console.log("error", `Send Transaction: Wallet not connected!`);
            return;
        }

        // const createDataAccountTransaction = await program.methods
        //     .new()
        //     .accounts({ dataAccount: dataAccount.publicKey })
        //     .signers([dataAccount])
        //     .rpc();
        // console.log("Your transaction signature", createDataAccountTransaction);
        // console.log("Your transaction dataAccount", dataAccount.publicKey.toBase58());

        // creating metadata address
        const metaplex = Metaplex.make(connection);
        const metadataAddress = await metaplex.nfts().pdas().metadata({ mint: mintKeypair.publicKey });

        const associatedTokenAccount = wallet.publicKey !== null &&  getAssociatedTokenAddressSync(
            mintKeypair.publicKey,
            wallet.publicKey
        );

        // create mint transaction
        try {
            const createMintTransaction = await program.methods
                .mintToken(
                    3, // 0 decimals for NFT
                    tokenTitle, // NFT name
                    tokenSymbol, // NFT symbol
                    tokenUri, // NFT URI
                    new anchor.BN(9999999999999)
                )
                .accounts({
                    signer: wallet.publicKey,
                    mint: mintKeypair.publicKey,
                    associatedTokenAccount,
                    metadataAccount: metadataAddress,
                    tokenMetadataProgram: MPL_TOKEN_METADATA_PROGRAM_ID,
                    tokenProgram: TOKEN_PROGRAM_ID,
                    rent: anchor.web3.SYSVAR_RENT_PUBKEY,
                    associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
                    systemProgram: anchor.web3.SystemProgram.programId,
                })
                .signers([mintKeypair])
                .rpc();
            console.log("Your transaction signature", createMintTransaction);

            let mintAccount = await getMint(connection, mintKeypair.publicKey);

            console.info("mintAccount", mintAccount.address.toString());

            setMint(mintAccount.address.toString());
            setTxSig(createMintTransaction);
        } catch (error) {
            notify({ type: "error", message: `Transaction failed!`, description: error?.message });
            console.log("error", `Transaction failed! ${error?.message}`);
            return;
        }

        setLoading(false);
    };

    return (
        <div>
            {publicKey ? (
                <form onSubmit={createMint} className="text-center">
                    <button type="submit" className="btn px-8">
                        {loading && <Loader />} Create Mint
                    </button>
                </form>
            ) : (
                <span>Connect Your Wallet</span>
            )}
            {txSig ? (
                <div className="flex flex-col gap-y-2 mt-4">
                    <p className="flex items-center gap-x-2">
                        Token Mint Address:
                        <button
                            onClick={() => navigator.clipboard.writeText(mint)}
                            className="btn p-1 min-h-0 h-fit bg-transparent normal-case gap-x-2"
                        >
                            {mint} <CopyIcon />
                        </button>
                    </p>
                    <p className="flex items-center gap-x-2">
                        View your transaction on
                        <a className="link flex gap-x-2 items-center" href={link()}>
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
