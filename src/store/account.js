import { defineStore } from 'pinia'
import { useWeb3 } from '@/store/web3'

const web3 = useWeb3();

export const useAccount = defineStore('account', {
  state: () => ({
    accounts: [],
    selectedAccount: ''
  }),
  getters: {
  },
  actions: {
    async connect() {
      await web3.getWeb3();
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts'
        })
        this.accounts = accounts;
        if (accounts.length > 0) {
          this.selectedAccount = accounts[0]
        }
      } catch (error) {
        console.error(error);
      }
      await web3.checkNetwork();
    },
    async reconnect() {
      await web3.getWeb3()
      try {
        const accounts = await window.ethereum.request({
          method: "wallet_requestPermissions",
          params: [{
            eth_accounts: {}
          }]
        }).then(() => window.ethereum.request({
          method: 'eth_requestAccounts'
        }))
        this.accounts = accounts;
        if (accounts.length > 0) {
          this.selectedAccount = accounts[0]
        }
        console.log(accounts)
      } catch (error) {
        console.error(error);
      }
      await web3.checkNetwork();
    }
  }
})
