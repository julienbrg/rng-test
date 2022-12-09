import { ethers } from "hardhat";
const color = require("cli-color")
var msg = color.xterm(39).bgXterm(128);
const fs = require('fs');
import * as store from '../store.json'

async function main() {
  console.log(" ")  
  
  const [hacker] = await ethers.getSigners()

  const addr = store.contractAddress;

  const abiDir = __dirname + '/../artifacts/contracts';
  const randomContract = abiDir + "/" + "Random.sol" + "/" + "Random" + ".json" 

  let randomAbi;
  try {
    randomAbi = JSON.parse(fs.readFileSync(randomContract,{encoding:'utf8', flag:'r'}));
  } catch (error) {
    console.log(error)
    return;
  }

  const random = new ethers.Contract(addr, randomAbi.abi, hacker)
  const r = await random.getRandom();
  console.log("Random number:", msg(r))  

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});