import { ethers } from "hardhat";
const color = require("cli-color")
var msg = color.xterm(39).bgXterm(128);
const fs = require('fs');

async function main() {
  console.log("Deployment in progress...")  
  const Random = await ethers.getContractFactory("Random")
  const random = await Random.deploy()
  await random.deployed();
  console.log("Random contract deployed at", msg(random.address), "✅")  

  fs.writeFileSync(
    "store.json",
    JSON.stringify({contractAddress: random.address}, undefined, 2)
  );

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});