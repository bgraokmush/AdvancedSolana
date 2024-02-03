import { Connection, Keypair } from "@solana/web3.js";

//Connect to the devnet
const connection = new Connection("https://api.devnet.solana.com");

export const airdrop = async (wallet: Keypair, amount: number = 1) => {
  //Airdrop some SOL to the wallet
  let txhash = await connection.requestAirdrop(wallet.publicKey, 1e9);
  console.log("Airdrop TX Hash:", txhash);
  console.log("Airdrop has been completed ✅");
};
