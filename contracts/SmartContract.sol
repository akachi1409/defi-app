// SPDX-License-Identifier: GPL-3.0

// Created by Doodlenauts


pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// Contract: Boo Crew NFT
// Author: Sean Pentiboyina
// ---- CONTRACT BEGINS HERE ----

pragma solidity ^0.8.0;

contract BooCrewNFT is ERC721Enumerable, Ownable {
  using Strings for uint256;

  string public baseURI;
  string public baseExtension = "";
  uint256 public cost = 0.05 ether;
  uint256 public maxSupply = 10000;
  uint256 public maxMintAmount = 100;
  bool public paused = false;
  uint256 public walletLimit = 100;
  mapping(address => bool) public whitelisted;

  constructor(
    string memory _name,
    string memory _symbol,
    string memory _initBaseURI
  ) ERC721(_name, _symbol) {
    setBaseURI(_initBaseURI);
    // To change the amount of Reserved Owner Tokens,
    // change the number in the mint(msg.sender, 100) method below
    // to any other number you want. The default is
    // 100 reserve tokens for the owner.
    mint(msg.sender, 100);
    maxMintAmount = 20;
    walletLimit = 3;
  }

  // internal
  function _baseURI() internal view virtual override returns (string memory) {
    return baseURI;
  }

  // public
  function mint(address _to, uint256 _mintAmount) public payable {
    uint256 supply = totalSupply();
    require(!paused);
    require(_mintAmount > 0);
    require(_mintAmount <= maxMintAmount);
    require(supply + _mintAmount <= maxSupply);
    require((balanceOf(msg.sender) + _mintAmount) <= walletLimit, 'Wallet limit is reached.');

    if (msg.sender != owner()) {
        if(whitelisted[msg.sender] != true) {
          require(msg.value >= cost * _mintAmount);
        }
    }

    for (uint256 i = 1; i <= _mintAmount; i++) {
      _safeMint(_to, supply + i);
    }
  }
  
  function whiteListMint(address _to, uint256 _mintAmount) public payable {
    uint256 supply = totalSupply();
    require(_mintAmount > 0);
    require(_mintAmount <= maxMintAmount);
    require(supply + _mintAmount <= maxSupply);
    require(whitelisted[msg.sender] == true, 'Address is not whitelisted.');
    require((balanceOf(msg.sender) + _mintAmount) <= walletLimit, 'Wallet limit is reached.');

    for (uint256 i = 1; i <= _mintAmount; i++) {
      _safeMint(_to, supply + i);
    }
  }
  
  

  function walletOfOwner(address _owner)
    public
    view
    returns (uint256[] memory)
  {
    uint256 ownerTokenCount = balanceOf(_owner);
    uint256[] memory tokenIds = new uint256[](ownerTokenCount);
    for (uint256 i; i < ownerTokenCount; i++) {
      tokenIds[i] = tokenOfOwnerByIndex(_owner, i);
    }
    return tokenIds;
  }

  function tokenURI(uint256 tokenId)
    public
    view
    virtual
    override
    returns (string memory)
  {
    require(
      _exists(tokenId),
      "ERC721Metadata: URI query for nonexistent Boo Crew NFT"
    );

    string memory currentBaseURI = _baseURI();
    return bytes(currentBaseURI).length > 0
        ? string(abi.encodePacked(currentBaseURI, tokenId.toString(), baseExtension))
        : "";
  }

 //
 // ONLY THE OWNER CAN CALL THE FUNCTIONS BELOW.
 //
  
 // This sets the minting price of each NFT.
 // Example: If you pass in 0.1, then you will need to pay 0.1 ETH + gas to mint 1 NFT.
  function setCost(uint256 _newCost) public onlyOwner() {
    cost = _newCost;
  }

 // This sets the amount users can mint at once.
 // Example: If you want your users to be able to mint 20 NFTs at once,
 // then you can set the setMaxMintAmount to 20.
 //
 // *THIS IS NOT A WALLET LIMIT. THERE IS ANOTHER FUNCTION FOR THAT BELOW*
  function setMaxMintAmount(uint256 _newmaxMintAmount) public onlyOwner() {
    maxMintAmount = _newmaxMintAmount;
  }
  
 // This sets the wallet limit.
 // Example: If you set the setWalletLimit function to 5, then users can have AT MOST 5 NFTs in their wallet.
 // You can change this to adjust the pre-mint wallet limit vs. the main minting phase's wallet limit.
  function setWalletLimit(uint256 _newWalletLimit) public onlyOwner() {
    walletLimit = _newWalletLimit;
  }
  
 // If you want to save gas by setting the maxMintAmount and walletLimit
 // at the same time, you can use this function.
 // Simply pass in the new maxMintAmount first, and the newWalletLimit second.
 // Example:
 // If you want to set a pre-mint phase where users can only mint 3 NFTs at a time,
 // and have a wallet limit of 9 NFTs, you can pass in the arguments
 // 3 and 9 respectively. 
 // Then, to activate full minting for your official launch phase,
 // simply pass in new arguments to change the maxMintAmount and walletLimit.
 // Example:
 // Now that you're fully launching, you can pass in 10 to the newMaxMintAmount argument
 // which would allow users to mint up to 10 at a time, and pass in 20 to the
 // newWalletLimit argument which would create a wallet limit of 20 NFTs.
  function setMaxMintAmountAndWalletLimit(uint256 _newmaxMintAmount, uint256 _newWalletLimit) public onlyOwner() {
    maxMintAmount = _newmaxMintAmount;
    walletLimit = _newWalletLimit;
  }

 // This sets the max supply. This will be set to 10,000 by default, although it is changable.
  function setMaxSupply(uint256 _newSupply) public onlyOwner() {
    maxSupply = _newSupply;
  }
  
 // This changes the baseURI.
 // Example: If you pass in "https://google.com/", then every new NFT that is minted
 // will have a URI corresponding to the baseURI you passed in.
 // The first NFT you mint would have a URI of "https://google.com/1",
 // The second NFT you mint would have a URI of "https://google.com/2", etc.
  function setBaseURI(string memory _newBaseURI) public onlyOwner {
    baseURI = _newBaseURI;
  }

 // This sets the baseURI extension.
 // Example: If your database requires that the URI of each NFT
 // must have a .json at the end of the URI 
 // (like https://google.com/1.json instead of just https://google.com/1)
 // then you can use this function to set the base extension.
 // For the above example, you would pass in ".json" to add the .json extension.
  function setBaseExtension(string memory _newBaseExtension) public onlyOwner {
    baseExtension = _newBaseExtension;
  }

 // This pauses or unpauses sales.
  function pause(bool _state) public onlyOwner {
    paused = _state;
  }
 
 // This whitelists users.
 // You MUST use an array for this function, and put quotes around the addresses you would like to whitelist.
 // Example:
 // If you want to whitelist 0x000000000000000000000000000000000000,
 // then pass in the argument:
 // ["0x000000000000000000000000000000000000"]
 //
 // If you want to whitelist multiple users, then pass in the argument with commas
 // seperating the user's addresses.
 // Example:
 // ["0x000000000000000000000000000000000000","0x111111111111111111111111111111111", "0x222222222222222222222222222222222"]
 function whitelistUser(address[] memory _user) public onlyOwner {
     uint256 x = 0;
     for (x = 0; x < _user.length; x++) {
         whitelisted[_user[x]] = true;
     }
  }
 
 // This removes whitelisted users.
 // It's arguments are the same as for whitelisting users.
 // You MUST use an array, and put quotes around the addresses you would like to remove from the whitelist.
  function removeWhitelistUser(address[] memory _user) public onlyOwner {
     uint256 x = 0;
     for (x = 0; x < _user.length; x++) {
         whitelisted[_user[x]] = false;
     }
  }
  
 // This withdraws the contract's balance of ETH to the Owner's (whoever launched the contract) address.
  function withdraw() public payable onlyOwner {
    require(payable(msg.sender).send(address(this).balance));
  }
  

}