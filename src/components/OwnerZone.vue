<template>
    <v-col v-if="isOwner" :cols="12">
        <v-card>
            <v-card-actions>
                <h1>OwnerZone</h1>
                <v-spacer></v-spacer>
                <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
            </v-card-actions>
            <v-expand-transition>
                <div v-show="show">
                    <v-divider></v-divider>
                    <v-card-text class="pb-20">
                        <v-container>
                            <h3>limitedSale</h3>
                            <Datepicker v-model="limitedSaleStartTime" model-type="timestamp"
                                :alt-position="customPosition" />
                            <v-text-field label="whitelistPrice(eth)" v-model="whitelistPrice" />
                            <h3>publicSale</h3>
                            <Datepicker v-model="publicSaleStartTime" model-type="timestamp"
                                :alt-position="customPosition" />
                            <v-text-field label="publicPrice(eth)" v-model="publicPrice" />
                            <v-btn color="primary" variant="flat"
                                @click="setSaleConfig(limitedSaleStartTime / 1000, publicSaleStartTime / 1000, whitelistPrice * 1e18, publicPrice * 1e18)"
                                class="ma-2">
                                set Sale Config
                            </v-btn>
                            <v-divider></v-divider>
                            <h2 class="my-4">allowlist</h2>
                            <template v-for="(account) in newAllowlist">
                                <v-row>
                                    <v-col col = 5><v-text-field label="address" v-model="account.address" /></v-col>
                                    <v-col col = 5><v-text-field label="numslots" v-model="account.numslots" /></v-col>
                                </v-row>
                            </template>
                            <v-btn small color="primary" @click="newAllowlist.push({address: '', numslots: 1})">
                                <v-icon>mdi-plus-thick</v-icon>
                            </v-btn>
                            <v-btn color="primary" variant="flat" @click="seedWhitelist(newAllowlist)" class="ma-2">
                                update
                            </v-btn>
                            <v-divider></v-divider>
                            <h2 class="my-4">baseURI</h2>
                            <v-text-field label="baseURI" v-model="baseURI" />
                            <v-btn color="primary" variant="flat" @click="setBaseURI(baseURI)" class="ma-2">
                                set
                            </v-btn>
                            <v-divider></v-divider>
                            <h2 class="my-4">withdraw</h2>
                            <v-btn color="primary" variant="flat" @click="withdrawMoney()" class="ma-2">
                                withdraw
                            </v-btn>
                        </v-container>
                    </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>
    </v-col>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useContract } from '@/store/contract'
import { useAccount } from '@/store/account'
import { computed, ref, watchEffect } from "vue";
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const show = ref(true)
const customPosition = () => ({ top: 10, left: 0 });

const accountStore = useAccount();
const { selectedAccount } = storeToRefs(accountStore);

const contractStore = useContract();
const { owner, saleConfig } = storeToRefs(contractStore);
const { setSaleConfig, withdrawMoney, seedWhitelist, setBaseURI } = contractStore;

const isOwner = computed(
    () => owner.value && selectedAccount.value.toUpperCase() === owner.value.toUpperCase()
)

const limitedSaleStartTime = ref(0);
const publicSaleStartTime = ref(0);
const whitelistPrice = ref(0);
const publicPrice = ref(0);
watchEffect(() => {
    if (!saleConfig.value) {
        return
    }
    whitelistPrice.value = parseInt(saleConfig.value.whitelistPrice) / 1e18;
    publicPrice.value = parseInt(saleConfig.value.publicPrice) / 1e18;
    limitedSaleStartTime.value = parseInt(saleConfig.value.limitedSaleStartTime) * 1000;
    publicSaleStartTime.value = parseInt(saleConfig.value.publicSaleStartTime) * 1000;
});

const newAllowlist = ref([{address: '', numslots: 1}]);

const baseURI = ref('');
</script>