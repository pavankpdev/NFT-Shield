// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol"; // Importing the Counters library

contract NFTShield is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter; // A counter to keep track of token ids

    mapping(address => bool) private _whitelist;
    mapping(address => bool) private _blacklist;
    mapping(uint256 => string) private _tokenURIs;

    // For tracking all minted tokens
    uint256[] private _allTokens;

    constructor(string memory name, string memory symbol) ERC721(name, symbol) {}

    modifier onlyWhitelisted() {
        require(_whitelist[msg.sender], "Caller is not whitelisted");
        _;
    }

    function addToWhitelist(address user) public onlyOwner {
        require(!_blacklist[user], "User is blacklisted");
        _whitelist[user] = true;
    }

    function removeFromWhitelist(address user) public onlyOwner {
        _whitelist[user] = false;
    }

    function addToBlacklist(address user) public onlyOwner {
        require(!_whitelist[user], "User is whitelisted");
        _blacklist[user] = true;
    }

    function removeFromBlacklist(address user) public onlyOwner {
        _blacklist[user] = false;
    }

    function mintNFT(address recipient, string memory uri) public onlyOwner {
        require(!_blacklist[recipient], "Recipient is blacklisted");
        _tokenIdCounter.increment();
        uint256 newTokenId = _tokenIdCounter.current();
        _mint(recipient, newTokenId);
        _setTokenURI(newTokenId, uri);
        _tokenURIs[newTokenId] = uri;
        _allTokens.push(newTokenId);
    }

    function updateTokenURI(uint256 tokenId, string memory uri) public onlyOwner {
        require(_exists(tokenId), "ERC721URIStorage: URI set of nonexistent token");
        _setTokenURI(tokenId, uri);
        _tokenURIs[tokenId] = uri;
    }

    function getAllTokens() public view onlyOwnerOrWhitelisted returns (uint256[] memory, string[] memory) {
        string[] memory uris = new string[](_allTokens.length);
        for (uint i = 0; i < _allTokens.length; i++) {
            uris[i] = _tokenURIs[_allTokens[i]];
        }
        return (_allTokens, uris);
    }

    modifier onlyOwnerOrWhitelisted() {
        require(owner() == msg.sender || _whitelist[msg.sender], "Not owner or whitelisted");
        _;
    }
}
