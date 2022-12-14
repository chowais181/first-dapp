//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
contract MOC {
uint256[3] items;

constructor() public
{
// setting up the items with their values
   for (uint256 i = 0; i < 3; i++)
       items[i] = 0;
}
function vote(uint256 x) public returns (uint256) 
{
   if (x < 3 && x >= 0) {
      items[x]++;
      return 1;
    }
    return 0;
  }
function getItem(uint256 x) public view returns (uint256) 
{
     return items[x];
}
}