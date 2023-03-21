import { defineStore } from 'pinia'
import Web3 from 'web3'
import { network, networkVersion, chainId } from '@/store/const'

export const useWeb3 = defineStore('web3', {
  state: () => ({
    inited: false,
  }),
  getters: {
  },
  actions: {
    async getWeb3() {
      if (this.inited) {
        return
      }
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        window.web3.eth.defaultChain = network;
        this.inited = true;
      }
      else {
        console.error('No web3 detected.');
      }
      await this.checkNetwork()
    },
    async checkNetwork() {
      if (window.ethereum.networkVersion != networkVersion) {
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{
              chainId: chainId
            }]
          })
        } catch (error) {
          console.error(error);
        }
      }
    }
  }
})
