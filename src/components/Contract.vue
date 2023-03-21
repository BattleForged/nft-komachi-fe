<script setup>
import { watch } from 'vue'
import { useContract } from '@/store/contract'
import { useAccount } from '@/store/account'
import { useDisplay } from 'vuetify'
import { storeToRefs } from "pinia";
import { ref, computed } from "vue";
import { range, map } from "lodash";
import dayjs from "dayjs";

const { smAndUp } = useDisplay()

const show = ref(true)

const accountStore = useAccount();
const { selectedAccount } = storeToRefs(accountStore);
const { connect } = accountStore;

const contractStore = useContract();
const { maxSupply, totalSupply, batchSize, whitelistQuantity, saleConfig, contract } = storeToRefs(contractStore);
const { publicMint, allowlistMint } = contractStore;

const allowlistMintStart = computed(
    () => {
        if (!saleConfig.value) {
            return null
        }
        const startTime = parseInt(saleConfig.value.limitedSaleStartTime) * 1000
        return startTime ? dayjs(startTime) : null
    }
)

const allowlistMintStartText = computed(
    () => allowlistMintStart.value ? allowlistMintStart.value.format('YYYY-MM-DD HH:mm:ssZ[Z]') + "~" : "allowlist sale has not been set"
)

const allowlistMintAmountItems = computed(
    () => map(range(1, whitelistQuantity.value + 1), (v) => ({
        value: v,
        title: `${v}(${v * parseInt(saleConfig.value ? saleConfig.value.whitelistPrice : 0) / 1e18} eth)`
    }))
)

const allowlistMintAmount = ref(1)

const allowlistMintValidate = computed(
    () => {
        if (!allowlistMintStart.value) {
            return "Allowlist sale has not been set."
        }
        if (allowlistMintStart.value > dayjs()) {
            return "Allowlist sale has not begun yet."
        }
        if (whitelistQuantity.value == 0) {
            return "Not eligible for allowlist mint."
        }
        if (whitelistQuantity.value < allowlistMintAmount.value) {
            return "Can't apply that much."
        }
        return true
    }
)

const publicMintStart = computed(
    () => {
        if (!saleConfig.value) {
            return null
        }
        const startTime = parseInt(saleConfig.value.publicSaleStartTime) * 1000
        return startTime ? dayjs(startTime) : null
    }
)

const publicMintStartText = computed(
    () => publicMintStart.value ? publicMintStart.value.format('YYYY-MM-DD HH:mm:ssZ[Z]') + "~" : "allowlist sale has not been set"
)

const publicMintAmountItems = computed(
    () => map(range(1, batchSize.value + 1), (v) => ({
        value: v,
        title: `${v}(${v * parseInt(saleConfig.value ? saleConfig.value.publicPrice : 0) / 1e18} eth)`
    }))
)

const publicMintAmount = ref(1)

const publicMintValidate = computed(
    () => {
        if (!publicMintStart.value) {
            return "Public sale has not been set."
        }
        if (publicMintStart.value > dayjs()) {
            return "Public sale has not begun yet."
        }
        if (batchSize.value < publicMintAmount.value) {
            return "Can't apply that much."
        }
        return true
    }
)
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
                            <div>
                                <h2 class="text-center">
                                    supply: {{ totalSupply || '-' }}/ {{ maxSupply || 1000 }}
                                </h2>

                                <v-divider class="my-4"></v-divider>
                                <h3>
                                    allowlistMint ({{ allowlistMintStartText }})
                                </h3>
                                <v-row class="my-2" justify="end">
                                    <v-col :cols="smAndUp ? 3 : 6">
                                        <v-select label="Amount" :items="allowlistMintAmountItems"
                                            v-model="allowlistMintAmount"></v-select>
                                    </v-col>
                                    <v-col :cols="smAndUp ? 3 : 6">
                                        <v-btn variant="flat" @click="allowlistMint(allowlistMintAmount)" class="my-2"
                                            color="primary" :disabled="allowlistMintValidate !== true">
                                            Mint
                                        </v-btn>
                                    </v-col>
                                </v-row>
                                <span v-if="allowlistMintValidate !== true" class="text-error">{{ allowlistMintValidate
                                }}</span>

                                <v-divider class="my-4"></v-divider>
                                <h3>
                                    publicMint ({{ publicMintStartText }})
                                </h3>
                                <v-row class="my-2" justify="end">
                                    <v-col :cols="smAndUp ? 3 : 6">
                                        <v-select label="Amount" :items="publicMintAmountItems"
                                            v-model="publicMintAmount"></v-select>
                                    </v-col>
                                    <v-col :cols="smAndUp ? 3 : 6">
                                        <v-btn color="primary" variant="flat" @click="publicMint(publicMintAmount)"
                                            class="ma-2" :disabled="publicMintValidate !== true">
                                            Mint
                                        </v-btn>
                                    </v-col>
                                </v-row>
                                <span v-if="publicMintValidate !== true" class="text-error">{{ publicMintValidate
                                }}</span>
                            </div>
                        </v-container>
                    </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>
    </v-col>
</template>
