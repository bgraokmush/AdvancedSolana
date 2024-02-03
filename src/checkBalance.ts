import { Connection, LAMPORTS_PER_SOL, Keypair } from "@solana/web3.js";

const connection = new Connection("https://api.devnet.solana.com");

export const checkBalance = async (wallet: Keypair): Promise<number> => {
  console.log("Checking the balance of the wallet...");

  let balance = await connection.getBalance(wallet.publicKey);
  balance = balance / LAMPORTS_PER_SOL;
  return balance;
};
