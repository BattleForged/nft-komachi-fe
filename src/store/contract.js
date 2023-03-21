import { defineStore } from 'pinia'
import { useWeb3 } from '@/store/web3'
import { address } from '@/store/const'
import { useAccount } from '@/store/account'
import { map, filter } from "lodash";

const account = useAccount();

const ABI = [{ "inputs": [{ "internalType": "uint256", "name": "maxSupply_", "type": "uint256" }, { "internalType": "uint256", "name": "batchSize_", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "ApprovalCallerNotOwnerNorApproved", "type": "error" }, { "inputs": [], "name": "ApprovalQueryForNonexistentToken", "type": "error" }, { "inputs": [], "name": "BalanceQueryForZeroAddress", "type": "error" }, { "inputs": [], "name": "MintERC2309QuantityExceedsLimit", "type": "error" }, { "inputs": [], "name": "MintToZeroAddress", "type": "error" }, { "inputs": [], "name": "MintZeroQuantity", "type": "error" }, { "inputs": [], "name": "OwnerQueryForNonexistentToken", "type": "error" }, { "inputs": [], "name": "OwnershipNotInitializedForExtraData", "type": "error" }, { "inputs": [], "name": "TransferCallerNotOwnerNorApproved", "type": "error" }, { "inputs": [], "name": "TransferFromIncorrectOwner", "type": "error" }, { "inputs": [], "name": "TransferToNonERC721ReceiverImplementer", "type": "error" }, { "inputs": [], "name": "TransferToZeroAddress", "type": "error" }, { "inputs": [], "name": "URIQueryForNonexistentToken", "type": "error" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "fromTokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "toTokenId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }], "name": "ConsecutiveTransfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "_receiver", "type": "address" }, { "internalType": "uint256", "name": "_percentage", "type": "uint256" }], "name": "_setRoyalties", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "batchSize", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getOwnershipData", "outputs": [{ "components": [{ "internalType": "address", "name": "addr", "type": "address" }, { "internalType": "uint64", "name": "startTimestamp", "type": "uint64" }, { "internalType": "bool", "name": "burned", "type": "bool" }, { "internalType": "uint24", "name": "extraData", "type": "uint24" }], "internalType": "struct IERC721A.TokenOwnership", "name": "", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "numberMinted", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "quantity", "type": "uint256" }], "name": "publicSaleMint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "_salePrice", "type": "uint256" }], "name": "royaltyInfo", "outputs": [{ "internalType": "address", "name": "receiver", "type": "address" }, { "internalType": "uint256", "name": "royaltyAmount", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "saleConfig", "outputs": [{ "internalType": "uint32", "name": "limitedSaleStartTime", "type": "uint32" }, { "internalType": "uint32", "name": "publicSaleStartTime", "type": "uint32" }, { "internalType": "uint64", "name": "whitelistPrice", "type": "uint64" }, { "internalType": "uint64", "name": "publicPrice", "type": "uint64" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "addresses", "type": "address[]" }, { "internalType": "uint256[]", "name": "numSlots", "type": "uint256[]" }], "name": "seedWhitelist", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "baseURI", "type": "string" }], "name": "setBaseURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint32", "name": "limitedSaleStartTime", "type": "uint32" }, { "internalType": "uint32", "name": "publicSaleStartTime", "type": "uint32" }, { "internalType": "uint64", "name": "whitelistPrice", "type": "uint64" }, { "internalType": "uint64", "name": "publicPrice", "type": "uint64" }], "name": "updateSaleInfo", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "whitelist", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "quantity", "type": "uint256" }], "name": "whitelistMint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "withdrawMoney", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]

const web3 = useWeb3();

export const useContract = defineStore('contract', {
  state: () => ({
    contract: null,
    maxSupply: 0,
    totalSupply: 1000,
    batchSize: 0,
    saleConfig: null,
    baseURI: '',
    owner: '',
    whitelistQuantity: 0
  }),
  getters: {
  },
  actions: {
    async getContract() {
      await web3.getWeb3();
      this.contract = new window.web3.eth.Contract(ABI, address);
      await this.getDetail();
    },
    async getDetail() {
      if (!this.contract) {
        return;
      }
      this.maxSupply = await this.contract.methods.maxSupply.call().call();
      this.totalSupply = await this.contract.methods.totalSupply.call().call();
      this.batchSize = parseInt(await this.contract.methods.batchSize.call().call());
      this.saleConfig = await this.contract.methods.saleConfig.call().call();
      this.owner = await this.contract.methods.owner.call().call();
    },
    async getWhitelistInfo(account) {
      if (!account || !this.contract) {
        this.whitelistQuantity = 0;
      } else {
        this.whitelistQuantity = parseInt(await this.contract.methods.whitelist(account).call());
      }
    },
    async setSaleConfig(
      limitedSaleStartTime,
      publicSaleStartTime,
      allowlistPrice,
      publicPrice
    ) {
      if (!account.selectedAccount) {
        return
      }
      await this.contract.methods.updateSaleInfo(
        limitedSaleStartTime.toString(),
        publicSaleStartTime.toString(),
        allowlistPrice.toString(),
        publicPrice.toString()
      ).send({ from: account.selectedAccount });
    },
    async withdrawMoney() {
      await this.contract.methods.withdrawMoney().send({ from: account.selectedAccount });
    },
    async seedWhitelist(newAllowlist) {
      const filteredAllowlist = filter(newAllowlist, (v) => v.address);
      if (filteredAllowlist.length <= 0) {
        return;
      }
      
      await this.contract.methods.seedWhitelist(
        map(filteredAllowlist, v => v.address),
        map(filteredAllowlist, v => v.numslots)
      ).send({ from: account.selectedAccount });
    },
    async allowlistMint(quantity) {
      if (!this.saleConfig) {
        return;
      }
      await this.contract.methods.whitelistMint(
        quantity
      ).send({
        from: account.selectedAccount, value: (quantity * this.saleConfig.whitelistPrice).toString() 
      });
    },
    async publicMint(quantity) {
      if (!this.saleConfig) {
        return;
      }
      await this.contract.methods.publicSaleMint(
        quantity
      ).send({
        from: account.selectedAccount, value: (quantity * this.saleConfig.publicPrice).toString() 
      });
    },
    async setBaseURI(uri) {
      await this.contract.methods.setBaseURI(
        uri
      ).send({
        from: account.selectedAccount.toString() 
      });
    }
  }
})
