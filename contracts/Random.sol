// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.15;

contract Random {

    constructor() {}

    function getRandom() public view returns (uint8) {
        bytes32 hash = keccak256(abi.encodePacked(block.difficulty, address(this), block.number));
        uint8 roll = uint8(uint256(hash) % 101);
        return roll;
    }
}