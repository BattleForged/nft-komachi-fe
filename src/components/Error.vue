<script setup>
import { useContract } from '@/store/contract'
import { useAccount } from '@/store/account'
import { useWeb3 } from '@/store/web3'
import { storeToRefs } from "pinia";
import { ref } from "vue";

const show = ref(true)

const accountStore = useAccount();
const { selectedAccount } = storeToRefs(accountStore);
const { connect } = accountStore;

const contractStore = useContract();
const { contract } = storeToRefs(contractStore);

const web3Store = useWeb3();
const { inited } = storeToRefs(web3Store);
const { getWeb3 } = web3Store;

getWeb3();
</script>
<template>
    <v-col :cols="12">
        <v-card>
            <v-card-actions>
                <h1>Mint</h1>
                <v-spacer></v-spacer>
                <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
            </v-card-actions>
            <v-expand-transition>
                <div v-show="show">
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-container>
                            <div class="text-center" v-if="!inited">
                                Use <a href="https://metamask.io/">metamask</a> to try more functions
                            </div>
                            <div class="text-center" v-else-if="!selectedAccount">
                                <v-col>
                                    <v-btn color="secondary" variant="flat" @click="connect">
                                        Connect
                                    </v-btn>
                                    your wallet for more info.
                                </v-col>
                            </div>
                            <div v-else-if="!contract" class="text-center" >
                                Refresh page to get contract infomation.
                            </div>
                        </v-container>
                    </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>
    </v-col>
</template>
