import {clusterApiUrl, Keypair, PublicKey} from "@solana/web3.js"
import { Wallet } from "@project-serum/anchor"
import dexterityTs from "@hxronetwork/dexterity-ts"
import bs58 from "bs58"

const dexterity  = dexterityTs
const CLUSTER_NAME = "testnet"
const rpc = clusterApiUrl(CLUSTER_NAME)


