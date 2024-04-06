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
- NFTs (Non-Fungible Tokens): They are unique digital items like artwork or game items. When you "mint" an NFT, you create it, and when you transfer it, you change its ownership.
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
