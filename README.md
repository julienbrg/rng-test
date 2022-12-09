# RNG Test

Testing on-chain RNG.

Ethereum PoS introduces randomness using `block.difficulty`. Please check [EIP-4399](https://eips.ethereum.org/EIPS/eip-4399) to learn more about this. I got some inspiration [there](https://github.com/scaffold-eth/scaffold-eth/blob/dice-game-future-difficulty/packages/hardhat/contracts/DiceGame.sol).

The `getRandom()` function will return a random number between 1 and 100.

## Install

```shell
npm i
```

## Test

```shell
npx hardhat test
```

## Deploy

Create a `.env` file with the following variables:

```
GOERLI_URL=88888
PRIVATE_KEY_GOERLI=88888
```

Add your own RPC endpoint and private key.

Deploy to Goerli:

```shell
npx hardhat run scripts/deploy.ts --network goerli
```

Then, get your random number:

```shell
npx hardhat run scripts/getRandom.ts --network goerli
```

## Support

Feel free to contact me via [Element](https://matrix.to/#/@julienbrg:matrix.org), [Telegram](https://t.me/julienbrg), [Twitter](https://twitter.com/julienbrg), [Discord](https://discord.gg/xw9dCeQ94Y), or [LinkedIn](https://www.linkedin.com/in/julienberanger/).
