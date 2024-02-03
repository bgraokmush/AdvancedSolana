import {
  Connection,
  Keypair,
  Transaction,
  SystemProgram,
  PublicKey,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";

export const transfer = async (
  feePayer: Keypair,
  recipient: PublicKey,
  amount: number
) => {
  const connection = new Connection("https://api.devnet.solana.com");
  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: feePayer.publicKey,
      toPubkey: recipient,
      lamports: amount * LAMPORTS_PER_SOL,
    })
  );
  const signature = await connection.sendTransaction(transaction, [feePayer]);
  console.log("Transaction has been completed ✅", signature);
};
