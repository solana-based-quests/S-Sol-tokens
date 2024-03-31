# S-Sol-tokens
This repo contains learning content about Solana token related features and functionality

# Mint And Transfer Solana tokens with crab (🦀) like environment

[![artwork1-01.png](https://i.postimg.cc/vBrFS4hg/artwork1-01.png)](https://postimg.cc/MMpFnKhq)

## Introduction

This is a basic Quiz-Exapmle of how to mint and transfer Spl Tokens.

## Prerequisites

This is a Solana-D-app scaffold project, so you need to have nodejs installed. You can download it from [here](https://nodejs.org/en/download/).

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

anchor will build the project and update project with the target to deployed program on chain
give us feature to connect with two system backend and client then give a web3 simulation to the user

we will use it later 

first deploy the program 

for this 

run:

```bash
solana-test-validator
```

in parrallel terminal
run this (if you have enough sol on devnet(clusters) to deploye this program on chain)
run:

```bash
anchor deploy
```

you will get a id 
this is the program id 

```bash
C2eEY8eeediwD2YXvZZGQ74G9kPB5PeRNFGUzSiFadcW
```

for you deployed on chain program 
this is metadata address in our idl 

copy this id 

then paste this id into two files

1. [anchor.toml](https://vscode.dev/github/shivamSspirit/S-Sol-tokens/blob/main/spltokens-sol-program/Anchor.toml)
2. second we paste in our solana program lib.rs file

then again build and deploy the program to onchain 
(these solana programs are upgradable after deployement)

See here for some client - under standing 
