# S-Sol-tokens
This repo contains learning content about Solana token related features and functionality

# SPL TOKEN

[![artwork1-01.png](https://i.postimg.cc/vBrFS4hg/artwork1-01.png)](https://postimg.cc/MMpFnKhq)

# Introduction

This quest is designed to introduce you to building on Solana. We provide complete code samples that you can modify, copy, and run directly on your machine. 

**Purpose** :- This program is designed to help you understand and work with Solana's SPL Token program.

Dapp-state → The current state of the decentralized application (DApp) includes four transactions.

> Now what is solana tx you will learn here more about it [here](https://medium.com/@asmiller1989/solana-transactions-in-depth-1f7f7fe06ac2).
> 

1. ***First two for nft mint and transfer***
- NFTs (Non-Fungible Tokens): They are unique digital items like artwork or game items. When           you "mint" an NFT, you create it, and when you transfer it, you change its ownership.
2. ***Second two for fungible token mint and transfer*** 
- Fungible Tokens: These tokens work like digital coins. When you "mint" them, you create new ones, and when you transfer them, you can send or receive them.

### Prerequisites for this are suitable for:

- Web developers familiar with JavaScript/TypeScript.
- Individuals enthusiastic about learning new things within the solana ecosystem.
- Those who already understand basic Solana programming models.

## Code repositories for this quest

1. [full-stake](https://github.com/shivamSspirit/S-Sol-tokens)

This is backend plus client code

2. [backend-specific](https://github.com/shivamSspirit/Solana-tokens-backend)

This is rust solana token program code 

3. [client-specific](https://github.com/shivamSspirit/solana-tokens-frontend)

this is solana tokens frontend code

## Technological Requirements for This Quest

**FullStake Dapp**→
(frontend + backend)

**Backend:-** Rust, typescript, anchor, solana(clusters and cli and frameworks, wallet accounts, rust packages and crates),metaplex ,cpi,pda,anchor spl token program

**Frontend:-** Nextjs ,npm, yarn, solana dapp-scaffold, IDL (interface description language), typescript, jsx, tailwind

## Motivation

[Spl token program and token 2022 + compresssed nfts]

The current state of example is contain repos, example-d-app and content about spl token-mint and transfer to another wallet  

Deployed link on vercel of this quest 

[spl_quest](https://solana-tokens-frontend.vercel.app/)

## SPl Library

- A collection of on-chain programs that target the Solana Sealevel runtime.
- These programs are tested against Solana's implementation of Sealevel.

## Eth Contracts

In Ethereum, for ERC-20 tokens, each fungible token has its smart contract. For ERC-721 (or ERC-1155), each non-fungible token collection has its own contract.

## Solana program

Just like Ethereum contracts, Solana has [programs](https://solana.com/docs/core/programs). These programs contain executable codes that interpret instructions and send them to each transaction on the chain.

## Acc/ Blocks

- The program account owns the state storage account, and programs themselves are stateless.
- Accounts collect [rent](https://solana.com/docs/core/rent), which is a term used by validators. Behind the scenes, it involves mathematical calculations.

## Some things about solana program

- Programs are executable accounts.
- Programs can only change the data and debit accounts they own.
- Programs have two types: native and executable. Native programs are built into the core system, while executable programs are custom-made by other devs. Both types run in parallel 
  in the [Sealevel](https://medium.com/solana-labs/sealevel-parallel-processing-thousands-of-smart-contracts-d814b378192) runtime.
- Stateless programs are compiled by SBF and BPF code.
- There are native and on-chain programs.
- Data accounts are used for state storage.
- Program accounts are stateless.
- Executable programs are loaded by the [BPF loader](https://docs.rs/solana-program/latest/solana_program/bpf_loader_upgradeable/index.html) program and are also upgradable after deployment to the network.

## Spl Token program

A Rust crate(crab) acts as an interface for SPL tokens, working like an ERC-20 token interface.

The crab(rust) crate type is a library, which means it's reusable functionality. Think of it like Lego bricks that fit together to build a package, and we store these in modules.

The [Solana Token Program](https://spl.solana.com/token) is your go-to solution! It's like a magic toolkit that equips you with all the tools necessary to create your own customized tokens and release them on the Solana blockchain.

Here's the exciting part: you don't have to be a coding expert. The Token Program offers both the fundamental code (like a [blueprint](https://github.com/solana-labs/solana-program-library/tree/master/token/program)) and a user-friendly interface. Picture it as a Lego set with easy-to-follow instructions – you can utilize it to craft your own special solana tokens.

This program defines a common implementation for Fungible and Non Fungible tokens.

The Solana Token Program is like a Lego set for making tokens. To  build Solana tokens, you'll need [JS helpers](https://github.com/solana-labs/solana-program-library/tree/master/token/js) or js binding methods and APIs etc...

## How to work with SPL token program

**JS helpers**: These are like time-saving mini-tools that handle common tasks for you.

**Binding methods**: They connect your JavaScript code with the Solana Token Program, making it easy to interact with your tokens.

**APIs**: These are instructions for telling the program what to do, like creating tokens or transferring ownership.

By engaging with these tools you will level up your token-building skills and let you create even cooler Solana tokens.


## Solana ATA

Solana provides an [ATA](https://spl.solana.com/associated-token-account) ([Associated Token Account](https://solidityonsolana.one/CourseContent/module-4/module-4-a/transferspltokens#:~:text=Associated%20Token%20Account.-,Associated%20Token%20Accounts,-ATAs%20offer%20an)) structure for mapping(or can be tracking) token(crypto tokens) accounts(solana lego block), similar to Ethereum's solidity(mapping) structure.

User Wallet address + specific token mint === generate a pda (mapped acc) for a specific token

![ataTopda](/ChallangeViews/quiz-0/ataTopda.jpeg)

## SPL Rust Crates

The spl token program crab crates provides functionalities like this 

- It imports modules.
- It has a constant ID for the token program.
- It operating like creating token mints and sending tokens to other wallets etc…. by crates types methods.

Here you can learn more about [[spl crates](https://docs.rs/spl-token/latest/spl_token/)]

## For Working With Spl token program 

[[SPl tokens](https://spl.solana.com/token)]

SPl token program provides features like Token mint , transfer and burn
To work with this, we just need to send instructions to the spl token program.

To do this, we interact with the Solana token program using tools like SPL Token CLI, JS client, and CPI(cross-program invocation) to Crab program(cpi for composability of programs).

We'll use JS client([Dapp-scaffold](https://github.com/solana-labs/dapp-scaffold)) for the frontend and CPI to [crab](https://docs.rs/spl-token/latest/spl_token/) for the backend to work with SPL tokens.

## How to configure systems

Blockchain systems run on cryptographically secure numbers.

The solana-anchor-rust backend [[The repo for backend is here](https://github.com/shivamSspirit/S-Sol-tokens/tree/main/spltokens-sol-program)] 
solana d-app-scaffold[[The repo for frontend is here](https://github.com/shivamSspirit/S-Sol-tokens/tree/main/solana-client)] provide us frontend utilities, like how user interact with on chain program (by sending transaction to solana blockchain)

The blockchain program runs on hardware operating systems compiled using Rust language. For client interaction we just use javascript,so, providing browser UI and UX, with helpers-tools across the solana ecosystem.

**Now how to connect with frontend**→

[Idl](https://en.wikipedia.org/wiki/Interface_description_language) (interface description language) is used for connecting deployed on chain solana program with client side Code(UI+UX).

Generally we did not need to manage all configuration

solana’s anchor frameworks provide us set of tools and features to building around solana’s d-apps

you can learn about anchor setup and installation [here](https://www.anchor-lang.com/docs/installation).

## The composability of d-app architecture

We use [Solana Web3.js](https://solana.com/docs/clients/javascript) to interact with user interfaces and enhance user experience.

Solana web3 provides us Js helpers methods and Connection object(JS like Object) to interact with solana native deployed smart contract on Solana blockchain

We need a blockchain cluster(block state replication on internet(can be Devnet,Mainnet, Testnet))
you can learn more about Solana cluster’s [here](https://docs.solanalabs.com/clusters).

we will use Devnet.

Or a wallet(user public key(web3 native passport) (can be general keypair , wallet adapter, or filesystem wallet etc…)).

This Create an environment where user(public) can interact with blockchain system  using a new, secure identity in Web3(web3 wallets or public key of user(public)). This involves using wallets and key pairs based on the [ed2115 elliptic curve](https://twitter.com/Tristan0x/status/1614671092815368193), which provide strong security. It lets you interact on-chain with others securely.

These all are build a cohesive environment for public(let user) to interact with blockchain 
ecosystem.

Now Enough theory , let’s move to d-app

## *Checkpoint For Dependencies*

***First Setup your local system requirement*** 

[solana-local-setup](https://solana.com/hi/developers/guides/getstarted/setup-local-development)

Now let’s move to…. the tech repo(dapp working)

## Clone repositories

(Code Processing and Visualization)

## Prerequisites For running program

- Ensure you have Node.js installed, which you can download from [here](https://nodejs.org/en/download/).
- solana tools for local development environment [here](https://solana.com/developers/guides/getstarted/setup-local-development).
- anchor framework [here](https://www.anchor-lang.com/docs/installation).

## Installation

Clone the repository and install the dependencies:

```bash
git clone git@github.com:shivamSspirit/S-Sol-tokens.git
cd spltokens-sol-program
npm i update
npm install
```

## Usage

Build the project:

```bash
anchor build
```

Anchor will build the project and update it with the target to deploy the program on chain, providing a feature to connect with two systems together backend and a client, then giving a web3 simulation to the user. This will be utilized later.

First, deploy the program. For this, run:

```bash
solana-test-validator
```

In a parallel terminal, if you have enough SOL on devnet (clusters) to deploy this program on chain, run:

```bash
anchor deploy
```

You will receive an ID, which is the program ID:

```bash
C2eEY8eeediwD2YXvZZGQ74G9kPB5PeRNFGUzSiFadcW
```

This is the metadata address in our IDL. Copy this ID, then paste it into two files:

1. [anchor.toml](https://vscode.dev/github/shivamSspirit/S-Sol-tokens/blob/main/spltokens-sol-program/Anchor.toml)
2. Paste it in our Solana program [lib.rs](https://vscode.dev/github/shivamSspirit/S-Sol-tokens/blob/main/spltokens-sol-program/programs/spltokens/src/lib.rs) file.

Then rebuild and deploy the program to on chain (these Solana programs are upgradable after deployment).

## Transaction from client view

From the frontend code, we only need to send four transactions to our deployed Solana program for SPL token minting and transfer.

We will understand those transactions and related concepts together for frontend and backend code.

1. **Fungible token transactions:**
    - Create token mint and mint tokens to minter wallet.
    - Transfer some tokens to another user’s wallet.
2. **NFT token transactions:**
    - Create NFT token mint and mint NFT to minter wallet.
    - Transfer NFT to another user’s wallet.

For a better understanding of the client-side, refer to the section below.

## File Architecture Overview

Fullstack 
(backend+client) 

[Spl-sol-tokens](https://vscode.dev/github/shivamSspirit/S-Sol-tokens)

***Two directories***

- [solana-client](https://vscode.dev/github/shivamSspirit/S-Sol-tokens/tree/main/solana-client)
- [spltokens-sol-program](https://vscode.dev/github/shivamSspirit/S-Sol-tokens/tree/main/spltokens-sol-program)

## Proccess of codes and files

The parent repository which contains the full-stack code.

First, we are moving to the processes and roles of backend-related tasks.

**Go to backend repo**:

You will see an anchor project structure. Yes, this is an anchor template to build Solana DApps easily.

## Here is the process about codes and visuals

 - Starting full-stack.
 - First, take a look.
 - After deployment from the backend, go to the Solana client.
 - These are the current dependency states for a runnable Solana program.
 - Resolve dependencies as task and setup before running any thing.

```bash
solana --version
solana-cli 1.17.13 
anchor -V
anchor-cli 0.29.0
rustc --version
rustc 1.77.1 (7cf61ebde 2024-03-27)
node --version
v18.18.0
yarn --version
1.22.19
```

## *Anchor backend runner dependencies*

open this file

[anchor-setup](https://github.com/shivamSspirit/S-Sol-tokens/blob/main/spltokens-sol-program/Anchor.toml)

From this anchor.toml

you can learn more about [[anchor.toml](https://www.anchor-lang.com/docs/manifest)] here

- This is our deployed Solana program ID on Devnet.

```toml
[programs.devnet]
spltokens = "C2eEY8eeediwD2YXvZZGQ74G9kPB5PeRNFGUzSiFadcW"
```

- Anchor Provider

Anchor Programs utilize a blockchain cluster and a Web3 wallet provider, alongside Solana programs (which manage and facilitate transactions). They can create various Solana program types and establish an API (Dapp Programming Interface) for sending Rpc requests to a cluster (block node) by utilizing defined wallets or multiple wallets.

```toml
[provider]
cluster = "Devnet"
wallet = "/Users/shivamsoni/.config/solana/id.json"
```

- In these scripts, we can provide test and other configurations to run test scripts.

```toml
[scripts]
test = "yarn run ts-mocha -p ./tsconfig.json -t 1000000 tests/**/*.ts"
```

Next, move to the Solana program source directory:
In the **program/spl-tokens** directory, we have Rust native configurations, such as Cargo package manager dependencies, and xargo for third-party package handling to deal with Solana Rust programs.
Then, the src directory contains the Solana program. The lib file within it contains our Solana program's entry point.

[lib-rs](https://github.com/shivamSspirit/S-Sol-tokens/blob/main/spltokens-sol-program/programs/spltokens/src/lib.rs)

- This anchor program contains 3 parts:
    - First, program ID
    - Second, validating accounts
    - Third, program business logic

Importing predefined imports for the Anchor language and building instructions for our Solana program that we will send with each transaction. We will discuss transactions further later.

```rust

use anchor_lang::prelude::*;
pub mod instructions;
pub use instructions::*;
```

This is our program id 

```rust

declare_id!("C2eEY8eeediwD2YXvZZGQ74G9kPB5PeRNFGUzSiFadcW");
```

This attribute defines all entry-level instructions for Solana transactions through program modules.

```rust

#[program]
pub mod spltokens {
    use super::*;

    pub fn mint_nft(ctx: Context<MintNFT>, name: String, symbol: String, uri: String) -> Result<()> 
    {
        mint_nft::mint_nft(ctx, name, symbol, uri)
    }

    pub fn mint_token(ctx: Context<MintToken>, _decimals:u8, name: String, symbol: String, uri: String, amount: u64) -> Result<()>
    {
        mint_token::mint_token(ctx, _decimals, name, symbol, uri, amount)
    }

    pub fn transfer_tokens(ctx: Context<TransferToken>, amount: u64) -> Result<()> 
    {
        transfer_token::transfer_tokens(ctx, amount)
    }
}
```

Now we need to delve deeper into the instructions to understand how to build and manage accounts.

**First to mint_nft instructions**

```rust

pub fn mint_nft(ctx: Context<MintNFT>, name: String, symbol: String, uri: String) -> Result<()> 
    {
        mint_nft::mint_nft(ctx, name, symbol, uri)
    }
```

This is the parent wrapper function which takes Account Context (validates accounts in an object-like structure) and general parameters.
In the function body, we are calling our first instruction by providing parameters to the `mint_nft` instruction. 
We are minting a non fungible token

> GO to Instruction folder and pull out [mint-instruction](https://vscode.dev/github/shivamSspirit/S-Sol-tokens/blob/main/spltokens-sol-program/programs/spltokens/src/instructions/mint_nft.rs)

Here, we import some configurations to handle the NFT minting process.

```rust

use anchor_lang::prelude::*;
use anchor_spl::{ associated_token::AssociatedToken, metadata::
    {create_master_edition_v3, create_metadata_accounts_v3, CreateMasterEditionV3, CreateMetadataAccountsV3, Metadata}, token::{mint_to, Mint, MintTo, Token, TokenAccount }};
use mpl_token_metadata::{ pda::{ find_master_edition_account, find_metadata_account}, state::DataV2 };

```

Anchor lang is a general Anchor language provider.
Anchor_spl is a general reference for SPL program library methods.
MPL token metadata follows the Metaplex token metadata standards.

The main business logic of the Solana program.

```rust
pub fn mint_nft(ctx: Context<MintNFT>, name: String, symbol: String, uri: String) -> Result<()> 
{
    let cpi_context = CpiContext::new(
        ctx.accounts.token_program.to_account_info(),
        MintTo {
            mint: ctx.accounts.mint.to_account_info(),
            to: ctx.accounts.associated_token_account.to_account_info(),
            authority: ctx.accounts.signer.to_account_info(),
        },
    );

    mint_to(cpi_context, 1)?;

    let cpi_context = CpiContext::new(
        ctx.accounts.token_metadata_program.to_account_info(),
        CreateMetadataAccountsV3 {
            metadata: ctx.accounts.metadata_account.to_account_info(),
            mint: ctx.accounts.mint.to_account_info(),
            mint_authority: ctx.accounts.signer.to_account_info(),
            update_authority: ctx.accounts.signer.to_account_info(),
            payer: ctx.accounts.signer.to_account_info(),
            system_program: ctx.accounts.system_program.to_account_info(),
            rent: ctx.accounts.rent.to_account_info(),
        },
    );

    let data_v2 = DataV2 {
        name,
        symbol,
        uri,
        seller_fee_basis_points: 0,
        creators: None,
        collection: None,
        uses: None,
    };

    create_metadata_accounts_v3(cpi_context, data_v2, false, true, None)?;

    let cpi_context = CpiContext::new(
        ctx.accounts.token_metadata_program.to_account_info(),
        CreateMasterEditionV3 {
            edition: ctx.accounts.master_edition_account.to_account_info(),
            mint: ctx.accounts.mint.to_account_info(),
            update_authority: ctx.accounts.signer.to_account_info(),
            mint_authority: ctx.accounts.signer.to_account_info(),
            payer: ctx.accounts.signer.to_account_info(),
            metadata: ctx.accounts.metadata_account.to_account_info(),
            token_program: ctx.accounts.token_program.to_account_info(),
            system_program: ctx.accounts.system_program.to_account_info(),
            rent: ctx.accounts.rent.to_account_info(),
        },
    );

    create_master_edition_v3(cpi_context, None)?;

    Ok(())
}
```

First, we are creating a CPI context to call the `mint_to` method of the SPL Token program and provide the required accounts and authority to mint tokens.

```rust
let cpi_context = CpiContext::new(
        ctx.accounts.token_program.to_account_info(),
        MintTo {
            mint: ctx.accounts.mint.to_account_info(),
            to: ctx.accounts.associated_token_account.to_account_info(),
            authority: ctx.accounts.signer.to_account_info(),
        },
    );
```

Calling the `mint_to` method from the SPL Token program and providing the CPI context and a token amount (one in the case of NFT).

```rust
mint_to(cpi_context, 1)?;
```

Then we move to build a context around CPI and provide account/reference for the creation of metadata account.

This is a Metaplex standard to store token references in token mint accounts.

```rust
let cpi_context = CpiContext::new(
        ctx.accounts.token_metadata_program.to_account_info(),
        CreateMetadataAccountsV3 {
            metadata: ctx.accounts.metadata_account.to_account_info(),
            mint: ctx.accounts.mint.to_account_info(),
            mint_authority: ctx.accounts.signer.to_account_info(),
            update_authority: ctx.accounts.signer.to_account_info(),
            payer: ctx.accounts.signer.to_account_info(),
            system_program: ctx.accounts.system_program.to_account_info(),
            rent: ctx.accounts.rent.to_account_info(),
        },
    );
```

Next, we set custom data-provided data structure and call CPI.

```rust
let data_v2 = DataV2 {
        name,
        symbol,
        uri,
        seller_fee_basis_points: 0,
        creators: None,
        collection: None,
        uses: None,
    };

    create_metadata_accounts_v3(cpi_context, data_v2, false, true, None)?;
```

Next, we create a CPI for NFT Metaplex master addition account and call CPI to Metaplex program. and return the function result.

```rust
let cpi_context = CpiContext::new(
        ctx.accounts.token_metadata_program.to_account_info(),
        CreateMasterEditionV3 {
            edition: ctx.accounts.master_edition_account.to_account_info(),
            mint: ctx.accounts.mint.to_account_info(),
            update_authority: ctx.accounts.signer.to_account_info(),
            mint_authority: ctx.accounts.signer.to_account_info(),
            payer: ctx.accounts.signer.to_account_info(),
            metadata: ctx.accounts.metadata_account.to_account_info(),
            token_program: ctx.accounts.token_program.to_account_info(),
            system_program: ctx.accounts.system_program.to_account_info(),
            rent: ctx.accounts.rent.to_account_info(),
        },
    );

    create_master_edition_v3(cpi_context, None)?;

    Ok(())
```

Now, the main goal of the program is to handle the accounts. We need to understand how to build accounts for an instruction and consider how accounts are used in this program.

Here, we are constructing and validating accounts that we will use for the mint_nft instruction.

```rust
#[derive(Accounts)]
pub struct MintNFT<'info> 
{
    /// CHECK: signer check
    #[account(mut, signer)]
    signer: AccountInfo<'info>,

    #[account(
        init,
        payer = signer,
        mint::decimals = 0,
        mint::authority = signer.key(),
        mint::freeze_authority = signer.key()
    )]
    mint: Account<'info, Mint>,

    #[account(
        init_if_needed,
        payer = signer,
        associated_token::mint = mint,
        associated_token::authority = signer
    )]
    pub associated_token_account: Account<'info, TokenAccount>,

    /// CHECK:
    #[account(mut, address = find_metadata_account(&mint.key()).0)]
    pub metadata_account: AccountInfo<'info>,

    /// CHECK:
    #[account(mut, address = find_master_edition_account(&mint.key()).0)]
    pub master_edition_account: AccountInfo<'info>,

    pub token_program: Program<'info, Token>,
    pub rent: Sysvar<'info, Rent>,
    pub associated_token_program: Program<'info, AssociatedToken>,
    pub token_metadata_program: Program<'info, Metadata>,
    pub system_program: Program<'info, System>,
}
```

That’s all about creating and building the Anchor Solana program. Now, we are moving on to the test script for the mint_nft instruction.

This test script can also be used in the frontend when we make transactions from there.

## The test process looks as follows

Go to the test directory and click on the TypeScript file.

[spl-tests](https://vscode.dev/github/shivamSspirit/S-Sol-tokens/tree/main/spltokens-sol-program/tests)

```ts

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

```

- This will import our built and deployed program.
- Anchor provider from the framework or JS client.
- Some RPC configurations from Solana Web3.js and clusters.
- Metaplex JS client to interact with Metaplex programs.
- Some third-party configurations to initialize the program for testing.

This test file run from this script 
from anchor.toml file 

```tsx
[scripts]
test = "yarn run ts-mocha -p ./tsconfig.json -t 1000000 tests/**/*.ts"
```

Now describe our test

```ts

describe("spltokens",async () => {
// overall configuration setup for this spl token program.

// Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env();
	anchor.setProvider(provider);

  // fetch program and refrence as anchor types to build (API like structure)
  const program = anchor.workspace.Spltokens as Program<Spltokens>;

  it("Is initialized!", async () => {
    // Add your test here.
    console.log("Your test are starting");
  });

// signer for transactions
// Create umi instance for a devnet cluster (using singer and mpl token metadata program for building transaction instrctions).
  const signer = provider.wallet;
	const umi = createUmi("https://api.devnet.solana.com").use(walletAdapterIdentity(signer)).use(mplTokenMetadata());
	const mint = anchor.web3.Keypair.generate();

// building or fetching ata for signer
	const associatedTokenAccount = await getAssociatedTokenAddress(
		mint.publicKey,
		signer.publicKey
	);

// fetching metadata account pda using mint key
	let metadataAccount = findMetadataPda(umi, {
		mint: publicKey(mint.publicKey),
	})[0];

// fetching masterEditionAccount pda using mint key 
	let masterEditionAccount = findMasterEditionPda(umi, {
		mint: publicKey(mint.publicKey),
	})[0];

// creating custom metdata (you can create also for your token)
	const metadata = {
		name: "Nft or Crypto",
		symbol: "yolo",
		uri: "https://arweave.net/ISef3HUc9oSsOHfOudiDIPl7X3zD48Gw32K4JJUo_DE",
	};
	
	// tests are here
	
	// it can mint nft 
	
	 it("Mint NFT!", async () =>
	 {
	 // calling the anchor Program API Methods
	 	const tx = await program.methods
	 			.mintNft(metadata.name, metadata.symbol, metadata.uri)
	 			.accounts({
	 				signer: provider.publicKey,
	 				mint: mint.publicKey,
	 				associatedTokenAccount,
					metadataAccount,
	 				masterEditionAccount,
 				    tokenProgram: TOKEN_PROGRAM_ID,
	 				associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
	 				tokenMetadataProgram: MPL_TOKEN_METADATA_PROGRAM_ID,
					systemProgram: anchor.web3.SystemProgram.programId,
 				  rent: anchor.web3.SYSVAR_RENT_PUBKEY,
	 			})
				.signers([mint])
				.rpc();

		console.log(`mint nft tx: https://explorer.solana.com/tx/${tx}?cluster=devnet`);
		console.log(`minted nft: https://explorer.solana.com/address/${mint.publicKey}?cluster=devnet`);
 });
	
	});
```

In this case, we are describing our test and other configuration setup, like the wallet and Anchor provider, and a transaction-sending interface from Anchor Program types.

Now, in this mint NFT transaction, we need to build our transaction instruction using the contract program methods `MintNFT`. We discussed building and validating accounts.

In this transaction, we need to set up all accounts in a step-by-step (ordered) way, just as we do in Rust Anchor Solana programs.

Providing data from the client side to the Anchor Program involves serializing or deserializing data of accounts (accounts are data blocks, i.e., buffered data).

Next we put acccounts 

```ts
                    signer: provider.publicKey,
	 				mint: mint.publicKey,
	 				associatedTokenAccount,
					metadataAccount,
	 				masterEditionAccount,
 				    tokenProgram: TOKEN_PROGRAM_ID,
	 				associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
	 				tokenMetadataProgram: MPL_TOKEN_METADATA_PROGRAM_ID,
					systemProgram: anchor.web3.SystemProgram.programId,
 				    rent: anchor.web3.SYSVAR_RENT_PUBKEY,
```

We need these accounts to build the NFT minting process.

```ts

                    signer: provider.publicKey,(signer for tx)
	 				mint: mint.publicKey,(token mint acocunt pub key)
	 				associatedTokenAccount,(ata mapping for tracking tokens)
					metadataAccount,(token metadata account)
	 				masterEditionAccount,(token master editdion account)
```

These accounts are helper accounts used to compose and make this instruction functional.

```ts
                    tokenProgram: TOKEN_PROGRAM_ID,
	 				associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
	 				tokenMetadataProgram: MPL_TOKEN_METADATA_PROGRAM_ID,
					systemProgram: anchor.web3.SystemProgram.programId,
 				    rent: anchor.web3.SYSVAR_RENT_PUBKEY,
```

Next, we provide a signer for this mint and make an RPC call from this transaction.

```ts

.signers([mint])
.rpc();

```

That is all about anchor solana programs

## Now we are moving to front(end) and client side of solana program 

like how to send tx from client side to solana program

How this same tx looks like on front end 

```tsx

 const mintNft = async (e) => {
        setLoading(true);
        try {
            e.preventDefault();

            const metaplex = Metaplex.make(connection);
           // const metadataAddress = await metaplex.nfts().pdas().metadata({ mint: mintKeypair.publicKey });

            const tx = await program.methods
            .mintNft(MetaData.name, MetaData.symbol, MetaData.uri)
            .accounts({
                signer: wallet.publicKey,
                mint: mintKeypair.publicKey,
                associatedTokenAccount,
                metadataAccount,
                masterEditionAccount,
                tokenProgram: TOKEN_PROGRAM_ID,
                associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
                tokenMetadataProgram: MPL_TOKEN_METADATA_PROGRAM_ID,
                systemProgram: anchor.web3.SystemProgram.programId,
                rent: anchor.web3.SYSVAR_RENT_PUBKEY,
            })
            .signers([mintKeypair])
            .rpc();

          console.log(`mint nft tx: https://explorer.solana.com/tx/${tx}?cluster=devnet`);
          console.log(`minted nft: https://explorer.solana.com/address/${mintKeypair.publicKey}?cluster=devnet`)

            setTxSig(tx);
            
            let metadata = await metaplex
                .nfts()
                .findByMint({ mintAddress: mintKeypair.publicKey, tokenOwner: wallet.publicKey });
            setNftDetails(metadata);
            notify({ message: "NFT Minted" });

            const userNfts = await metaplex.nfts().findAllByOwner({
                owner: wallet.publicKey
            });

            console.log("myNfts:",userNfts);

            setAllNftByWallet(userNfts)
        } catch (err) {
            console.log(err);
            notify({ message: err.message });
        }
        setLoading(false);
    };

```

The same methods call from idl (solana-client root)

The difference lies in wallets and public keys of signers(anchor or other wallet adapters)

```tsx
 const tx = await program.methods
            .mintNft(MetaData.name, MetaData.symbol, MetaData.uri)
            .accounts({
                signer: wallet.publicKey,
                mint: mintKeypair.publicKey,
                associatedTokenAccount,
                metadataAccount,
                masterEditionAccount,
                tokenProgram: TOKEN_PROGRAM_ID,
                associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
                tokenMetadataProgram: MPL_TOKEN_METADATA_PROGRAM_ID,
                systemProgram: anchor.web3.SystemProgram.programId,
                rent: anchor.web3.SYSVAR_RENT_PUBKEY,
            })
            .signers([mintKeypair])
            .rpc();

```

## Now understand the analogy of frontend client side
***and walkthrough the dapp tx’s.***

This is nextjs repo 

[solana-client](https://github.com/shivamSspirit/S-Sol-tokens/tree/main/solana-client)

This contain idl and frontend config with solana-dapp-scaffold

[solana-dapp-scaffold](https://github.com/solana-labs/dapp-scaffold)

This idl contains deployed program methods and accounts and address of program

[idl](https://github.com/shivamSspirit/S-Sol-tokens/blob/main/solana-client/idl.json)

This is the src dir

[client-src](https://github.com/shivamSspirit/S-Sol-tokens/tree/main/solana-client/src)

this contains 

filling ui ux(through , state **orchestrate** form context level to components (treee bricks))

some process about filling ui and ux:

All things about how data and ui process

- **From contexts  (network(cluster) provider to web3 wallet adapters)**
- **From views to pages to components(bricks)**
- **routes management**
- **state management at components tx’s levels**
- **tailwind classes for styles**
- **public assets for content visuals**

Now you have understanding about how to build a program interface and send transaction to program from our tests scripts**

**Now we will make our four tx’s**

**Now run the frontend locally change dir to solana client and run** 

```bash
npm install
```

**Then run** 

```bash
npm run dev
```

Go to local host in browser
you will see something like this

**Front-end interaction and process**

![landpage](/ChallangeViews/quiz-0/landpage.jpeg)

Connect to solana-native web3 wallet and change network to devnet 

airdrop some sol 

then click on mint-nft button

here you will create your first tx for mint a nft in your connected wallet

![nftmint](/ChallangeViews/quiz-0/nftmint.jpeg)

How this tx works

Process:

[Mint-Nft-Button](https://github.com/shivamSspirit/S-Sol-tokens/blob/main/solana-client/src/components/MintNFTButton.tsx)

go to this component

understand code processs

importing required tools and dependenices for mint nft

```tsx
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useState,useEffect } from "react";
import { getAssociatedTokenAddressSync } from "@solana/spl-token";

import * as anchor from "@coral-xyz/anchor";
import { Program, Idl, AnchorProvider, BN, utils, web3 } from "@coral-xyz/anchor";
import { Metaplex, Nft, Sft, Metadata } from "@metaplex-foundation/js";

import idl from "../../idl.json";
import { Commitment, Keypair, PublicKey, SYSVAR_RENT_PUBKEY } from "@solana/web3.js";

import { notify } from "utils/notifications";
import { LinkIcon, Loader } from "./Icons";
import { NFTCard } from "./nft/NFTCard";

import { publicKey } from "@metaplex-foundation/umi";
import { getOrCreateAssociatedTokenAccount, getAssociatedTokenAddress } from "@solana/spl-token";

import { loadKeypairFromFile } from "../utils/loadPair";

import { Spltokens } from "../../contracttypes";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { TOKEN_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";
import { findMasterEditionPda, findMetadataPda, mplTokenMetadata, MPL_TOKEN_METADATA_PROGRAM_ID } from "@metaplex-foundation/mpl-token-metadata";

```

fetching metadata address of program from IDL

```tsx

const programId = new PublicKey(idl.metadata.address);

```

Setup Component structure

> React component structure(react level tools and functions which export as compoents , raw javascript to manage and handle state and data of compoents, jsx style ui views)
> 

First we setup our program API and some usefull states to store nft data 

```tsx

    export const MintNFTButton = ({ mint: mintKeypair , ifNftTransfered:ifNftTransfered, setifNftTransfered:setifNftTransfered } : { mint: Keypair ,ifNftTransfered: boolean; setifNftTransfered: any;  }) => {
    const [txSig, setTxSig] = useState("");
    const [loading, setLoading] = useState(false);
    const [nftDetails, setNftDetails] = useState<Sft | Nft | null>(null);
    // new stats
    const [allNftByWallet, setAllNftByWallet] = useState<any>();

    const { connection } = useConnection();
    const wallet = useWallet();

    console.log("mint:", mintKeypair);

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

	const umi = createUmi("https://api.devnet.solana.com").use(walletAdapterIdentity(wallet)).use(mplTokenMetadata());
	
	const associatedTokenAccount = wallet.publicKey !== null &&  getAssociatedTokenAddressSync(
		mintKeypair.publicKey,
		wallet.publicKey
	);

	let metadataAccount = findMetadataPda(umi, {
		mint: publicKey(mintKeypair.publicKey),
	})[0];

	let masterEditionAccount = findMasterEditionPda(umi, {
		mint: publicKey(mintKeypair.publicKey),
	})[0];

	const MetaData = {
		name: "oggggg",
		symbol: "Oggy",
		uri: "https://raw.githubusercontent.com/solana-developers/program-examples/new-examples/tokens/tokens/.assets/nft.json",
	};

};

```

- Here setting usefull states to preserve tx and data states
- fetching collection and wallets
- getting a program api from anchor provider(coral)
- creating an umi instance to use mpl token metadata
- fetching and creating an ata for minter to store nft in minter’s associated token account
- creating metdata and masteredition account for nft token
- last setup metadata name, symbol and uri(stored somewhere)

Next we just writing nft minting process

```tsx

 const mintNft = async (e) => {
        setLoading(true);
        try {
            e.preventDefault();

            const metaplex = Metaplex.make(connection);
          
            const tx = await program.methods
            .mintNft(MetaData.name, MetaData.symbol, MetaData.uri)
            .accounts({
                signer: wallet.publicKey,
                mint: mintKeypair.publicKey,
                associatedTokenAccount,
                metadataAccount,
                masterEditionAccount,
                tokenProgram: TOKEN_PROGRAM_ID,
                associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
                tokenMetadataProgram: MPL_TOKEN_METADATA_PROGRAM_ID,
                systemProgram: anchor.web3.SystemProgram.programId,
                rent: anchor.web3.SYSVAR_RENT_PUBKEY,
            })
            .signers([mintKeypair])
            .rpc();

          console.log(`mint nft tx: https://explorer.solana.com/tx/${tx}?cluster=devnet`);
          console.log(`minted nft: https://explorer.solana.com/address/${mintKeypair.publicKey}?cluster=devnet`);

            setTxSig(tx);

            let metadata = await metaplex
                .nfts()
                .findByMint({ mintAddress: mintKeypair.publicKey, tokenOwner: wallet.publicKey });
            setNftDetails(metadata);
            notify({ message: "NFT Minted" });

            const userNfts = await metaplex.nfts().findAllByOwner({
                owner: wallet.publicKey
            });

            console.log("myNfts:",userNfts);

            setAllNftByWallet(userNfts)
        } catch (err) {
            console.log(err);
            notify({ message: err.message });
        }
        setLoading(false);
    };

```

The minting process

- This tx we discusssed before in rust, typescript(wallet adapters and file systems wallets)
- in this function we are creating a nft mint , mint nft to minter wallet(the signer/author or connected wallet’s ata).
- creating a connection with metaplex and sending a tx to program’s mint nft method
- fetching metadata for minted nft

In last of component we return jsx to show(UI) tx and values of wallets.

in next transaction 

we can transfer our minted nft to other user

![nftsender](/ChallangeViews/quiz-0/nftsender.jpeg)

for this just only paste user wallet pub key and send nft to user wallets address

how it is does→

code process

## The frontend tx

Go to this file

[Nft-card](https://github.com/shivamSspirit/S-Sol-tokens/blob/main/solana-client/src/components/nft/NFTCard.tsx)

```tsx

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
```

process-:

- imports tools and third party libraries
- Setting program to compose a transaction
- Next, in transferNFT call..
- creating new tx instance
- create and fetch seller token ata (sender’s(minter) walllet)
- fetch buyer public key from form(UI forms) and create an ata for buyer to hold this nft.
- then create a tx for creating an ata for buyer

```tsx

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

```

- then call transferTokens on rpc or send one token to buyer

```tsx

               const tx = await program.methods
                .transferTokens(new BN(1))
                .accounts({
                    from: publicKey,
					          fromAta: sellerTokenAccount,
					          toAta: buyerTokenAccount,
					          tokenProgram: TOKEN_PROGRAM_ID
                })
                .rpc({ skipPreflight: true });

```

You will see wallet screen like this when you are sending in transfer nft tx 

![nftsend](/ChallangeViews/quiz-0/nftsend.png)

## The solana program accounts validation

Goto this file 

[transfertokens](https://github.com/shivamSspirit/S-Sol-tokens/blob/main/spltokens-sol-program/programs/spltokens/src/instructions/transfer_token.rs)

you will see (what solana program looks like)

- This transfer_tokens methods is take transfer token account context and token amount.
- Create a program ix for token program’s transfer method (for this create a cpi context and make a cpi to to token program)

```rust

pub fn transfer_tokens(ctx: Context<TransferToken>, amount: u64) -> Result<()> 
{
    let cpi_accounts = Transfer 
    {
        from: ctx.accounts.from_ata.to_account_info(),
        to: ctx.accounts.to_ata.to_account_info(),
        authority: ctx.accounts.from.to_account_info(),
    };
    let cpi_program = ctx.accounts.token_program.to_account_info();
    
    token::transfer(CpiContext::new(cpi_program, cpi_accounts), amount)?;

    Ok(())
}

```

- Account structures (that we are sending from frontend tx)

```rust

#[derive(Accounts)]
pub struct TransferToken<'info> 
{
    pub from: Signer<'info>,

    #[account(mut)]
    pub from_ata: Account<'info, TokenAccount>,

    #[account(mut)]
    pub to_ata: Account<'info, TokenAccount>,

    pub token_program: Program<'info, Token>
}

```

## Now we move to third transaction

 
That is mint fungible token transaction

land to home page again

![landpage](/ChallangeViews/quiz-0/landpage.jpeg)

Click on mint fungilble token button 

you will land here ,when you land 
you will need
to click on create mint to initaite mint tx and and this will mint 10B tokens to minter’s wallet

![minttinginwallet](/ChallangeViews/quiz-0/minttinginwallet.png)

after token mint the mint address is shows on screen like this 

![createfungmint](/ChallangeViews/quiz-0/createfungmint.jpeg)

client view of transaction

goto this file 

[fungible-token-mint](https://github.com/shivamSspirit/S-Sol-tokens/blob/main/solana-client/src/components/fungible/FungibleTokenMint.tsx)

Some difference from nft tx:

- decimal values
- supply of tokens

```tsx

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

```

backend view of tx:

Go to this file 

[mint-token-ix](https://github.com/shivamSspirit/S-Sol-tokens/blob/main/spltokens-sol-program/programs/spltokens/src/instructions/mint_token.rs)

This is instruction to fungible token mint

Now we are moving to our fourth transaction in a raw

Transfer fungible tokens to another user, the process is same we saw in nft 

so..  

after you will get fungible token address on screen 

scroll under to this 

This is token sender form 

in this -: 

- add your fungible token mint
- add recipient public key
- amount of tokens you want to send

![tokensender](/ChallangeViews/quiz-0/tokensender.jpeg)

Then click on transfer tokens button 

you will see wallet screen like this 

![sendingtokens](/ChallangeViews/quiz-0/sendingtokens.png)

That’s it how you create, manage and send transaction to solana blockchain
