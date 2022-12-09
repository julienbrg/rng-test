import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
const color = require("cli-color")
var msg = color.xterm(39).bgXterm(128);

describe("Random", function () {

  async function deployContracts() {
    
    const [deployer, alice, bob] = await ethers.getSigners();

    const Random = await ethers.getContractFactory("Random")
    const random = await Random.deploy()

    return { random, deployer, alice, bob };
  }

  describe("Deployment", function () {
    // it("Should deploy", async function () {
    //   // ...
    // });
  });

  describe("Interactions", function () {
    it("Should get a random number", async function () {
      const { random, alice } = await loadFixture(deployContracts);

      const r = await random.getRandom()
      console.log("      Random number:", msg(r))
      expect(r).to.be.gt(0)
      expect(r).to.be.lt(101)
    });
  });

  describe("Events", function () {
    // it("Should emit an event on withdrawals", async function () {
    //   const { lock, unlockTime, lockedAmount } = await loadFixture(
    //     deployContracts
    //   );

    //   await time.increaseTo(unlockTime);

    //   await expect(lock.withdraw())
    //     .to.emit(lock, "Withdrawal")
    //     .withArgs(lockedAmount, anyValue); // We accept any value as `when` arg
    // });
  });

  describe("Transfers", function () {
    // it("Should transfer the funds to the owner", async function () {
    //   const { lock, unlockTime, lockedAmount, owner } = await loadFixture(
    //     deployContracts
    //   );

    //   await time.increaseTo(unlockTime);

    //   await expect(lock.withdraw()).to.changeEtherBalances(
    //     [owner, lock],
    //     [lockedAmount, -lockedAmount]
    //   );
    // });
  });
});
