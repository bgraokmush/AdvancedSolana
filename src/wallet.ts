import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { insertData } from "./insertData";
import { airdrop } from "./airdrop";
import { checkBalance } from "./checkBalance";

//Connect to the devnet
const connection = new Connection("https://api.devnet.solana.com");

//Create a new wallet
const key = Keypair.generate();

//Balance
let balance = await checkBalance(key);

key["walletBalance"] = balance;

//Preapere the data to be written to the file
let jsonData = JSON.stringify(key, null, 2);
insertData(jsonData);

console.log("Wallet has been created ✅");

//Airdrop some SOL to the wallet
airdrop(key);
balance = await checkBalance(key);
key["walletBalance"] = balance;
jsonData = JSON.stringify(key, null, 2);
insertData(jsonData);
