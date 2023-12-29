// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract RealEstateToken is ERC721, ERC721URIStorage, Ownable {
    using Strings for uint256;
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    event ListingCreated(address to, uint256 tokenId);

    mapping(uint256 => address) ownershipStructure;

    constructor(
        string memory name,
        string memory symbol
    ) ERC721("EstateToken", "REN") Ownable(msg.sender) {}

    // tokenURI can be a link to a json file
    // and the json file will store the metadata, owner, percentageShare etc...

    function safeMintNFT(
        string memory tokenURI
    ) internal onlyOwner returns (uint256) {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _safeMint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);

        emit ListingCreated(msg.sender, newItemId);

        return newItemId;
    }

    // function tokenURI(
    //     uint256 tokenId
    // ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
    //     return super.tokenURI(tokenId);
    // }
}
