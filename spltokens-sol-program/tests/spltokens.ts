import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";

import { publicKey } from "@metaplex-foundation/umi";
import { getOrCreateAssociatedTokenAccount, getAssociatedTokenAddress } from "@solana/spl-token";

import { loadKeypairFromFile } from "../utils/loadPair";


import { Spltokens } from "../target/types/spltokens";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { TOKEN_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";
import { findMasterEditionPda, findMetadataPda, mplTokenMetadata, MPL_TOKEN_METADATA_PROGRAM_ID } from "@metaplex-foundation/mpl-token-metadata";
import { BN } from "bn.js";
import { Keypair } from "@solana/web3.js";
import fs from "fs";


describe("spltokens",async () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env();
	anchor.setProvider(provider);

  const program = anchor.workspace.Spltokens as Program<Spltokens>;

  it("Is initialized!", async () => {
    // Add your test here.
    console.log("Your test are starting");
  });

    const signer = provider.wallet;
	const umi = createUmi("https://api.devnet.solana.com").use(walletAdapterIdentity(signer)).use(mplTokenMetadata());
	const mint = anchor.web3.Keypair.generate();

	const associatedTokenAccount = await getAssociatedTokenAddress(
		mint.publicKey,
		signer.publicKey
	);

	let metadataAccount = findMetadataPda(umi, {
		mint: publicKey(mint.publicKey),
	})[0];

	let masterEditionAccount = findMasterEditionPda(umi, {
		mint: publicKey(mint.publicKey),
	})[0];


	const metadata = {
		name: "Nft or Crypto",
		symbol: "yolo",
		uri: "https://arweave.net/ISef3HUc9oSsOHfOudiDIPl7X3zD48Gw32K4JJUo_DE",
	};


	// it("Mint Token!", async () =>
	// {
	// 	const tx = await program.methods
	// 			.mintToken(9, metadata.name, metadata.symbol, metadata.uri, new BN(10 * 1000000000))
	// 			.accounts({
	// 				signer: provider.publicKey,
	// 				mint: mint.publicKey,
	// 				associatedTokenAccount,
	// 				metadataAccount,
	// 				tokenProgram: TOKEN_PROGRAM_ID,
	// 				associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
	// 				tokenMetadataProgram: MPL_TOKEN_METADATA_PROGRAM_ID,
	// 				systemProgram: anchor.web3.SystemProgram.programId,
	// 				rent: anchor.web3.SYSVAR_RENT_PUBKEY,
	// 			})
	// 			.signers([mint])
	// 			.rpc();

	// 	console.log(`mint token tx: https://explorer.solana.com/tx/${tx}?cluster=devnet`);
	// 	console.log(`minted token: https://explorer.solana.com/address/${mint.publicKey}?cluster=devnet`);
	// });


	it("Transfer Token!", async () =>
	{
		var mint = new anchor.web3.PublicKey("9Rph2jmwCWztFNW7BeFzz8HFo4oPstWcy5q8WNnNNE3B");
		var toUserAddress = new anchor.web3.PublicKey("BYxyCb5bEXzwtpCzGs7XnvD29TmyMumU3KJjiDu4G2jX");
		var fromWallet = loadKeypairFromFile("/Users/shivamsoni/.config/solana/id.json");
		
		const fromAta = await getAssociatedTokenAddress(
			mint,
			signer.publicKey
		);

		const toAta = await getOrCreateAssociatedTokenAccount(
			provider.connection,
			fromWallet,
			mint,
			toUserAddress
		);

		const tx = await program.methods
				.transferTokens(new BN(3 * 100000000))
				.accounts({
					from: fromWallet.publicKey,
					fromAta: fromAta,
					toAta: toAta.address,
					tokenProgram: TOKEN_PROGRAM_ID
				}).
				signers([fromWallet])
				.rpc();

		console.log(`transfer token tx: https://explorer.solana.com/tx/${tx}?cluster=devnet`);
	});


	console.log("metdata:",metadata);


	// it("Mint NFT!", async () =>
	// {
	// 	const tx = await program.methods
	// 			.mintNft(metadata.name, metadata.symbol, metadata.uri)
	// 			.accounts({
	// 				signer: provider.publicKey,
	// 				mint: mint.publicKey,
	// 				associatedTokenAccount,
	// 				metadataAccount,
	// 				masterEditionAccount,
	// 				tokenProgram: TOKEN_PROGRAM_ID,
	// 				associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
	// 				tokenMetadataProgram: MPL_TOKEN_METADATA_PROGRAM_ID,
	// 				systemProgram: anchor.web3.SystemProgram.programId,
	// 				rent: anchor.web3.SYSVAR_RENT_PUBKEY,
	// 			})
	// 			.signers([mint])
	// 			.rpc();

	// 	console.log(`mint nft tx: https://explorer.solana.com/tx/${tx}?cluster=devnet`);
	// 	console.log(`minted nft: https://explorer.solana.com/address/${mint.publicKey}?cluster=devnet`);
	// });



//   it("Transfer NFT!", async () =>
// 	{
// 		var mint = new anchor.web3.PublicKey("8W4fNLgurLxaahwWcLxje1eSmaW8RrEsMyZgiT1pZqwh");
// 		var toUserAddress = new anchor.web3.PublicKey("BYxyCb5bEXzwtpCzGs7XnvD29TmyMumU3KJjiDu4G2jX");
// 		var fromWallet = loadKeypairFromFile("/Users/shivamsoni/.config/solana/id.json");
		
// 		const fromAta = await getAssociatedTokenAddress(
// 			mint,
// 			signer.publicKey
// 		);

// 		const toAta = await getOrCreateAssociatedTokenAccount(
// 			provider.connection,
// 			fromWallet,
// 			mint,
// 			toUserAddress
// 		);

// 		const tx = await program.methods
// 				.transferTokens(new BN(1))
// 				.accounts({
// 					from: fromWallet.publicKey,
// 					fromAta: fromAta,
// 					toAta: toAta.address,
// 					tokenProgram: TOKEN_PROGRAM_ID
// 				}).
// 				signers([fromWallet])
// 				.rpc();

// 		console.log(`transfer nft tx: https://explorer.solana.com/tx/${tx}?cluster=devnet`);
// 	});


});
