// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

abstract contract BaseTrader {
    address trader;
    uint256 amount;
    uint256 tokenId;
    string tokenURI;
    uint256 timestamp;
}

contract Exchange {
    enum TradeType {
        Buy,
        Sell
    }
    event RENPurchased(
        address renAddress,
        address buyer,
        uint256 amount,
        uint256 tokenId
    );
    event RENSold(
        address renAddress,
        address buyer,
        uint256 amount,
        uint256 tokenId
    );

    struct Buyers {
        BaseTrader base;
    }

    struct Sellers {
        BaseTrader base;
    }

    function tradeREN(
        TradeType tt,
        address trader
    ) public payable returns (bool) {
        if (tt == TradeType.Buy) {} else {}
    }
}
