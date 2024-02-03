import { writeFileSync } from "fs";

export const insertData = async (data: string) => {
  try {
    writeFileSync("wallet.json", data, "utf8");
    console.log("Data has been written to the file");
  } catch (err) {
    console.error(err);
  }
};
