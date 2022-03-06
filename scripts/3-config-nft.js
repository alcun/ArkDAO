import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x438dBE859d2AFd1FEdbf67633d959FE99Cc33c92",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Ticket to the Ark",
        description: "This NFT will give you access to ArkDAO!",
        image: readFileSync("scripts/assets/ticket.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()