<template>
  <v-app-bar flat color="primary">
    <v-icon icon="mdi-ethereum" />
    <v-toolbar-title>小町-KOMACHI-</v-toolbar-title>
    <v-spacer />
    <v-btn v-if="accounts.length <= 0" color="secondary" variant="flat" @click="connect">
      Connect
    </v-btn>
    <v-select v-else label="Account" class="mt-2" :items="accounts" v-model="selectedAccount">
      <template v-slot:append-item>
        <v-divider class="mb-2"></v-divider>
        <div class="btn-wapper">
          <v-btn color="secondary" variant="flat" @click="reconnect">
            Reconnect
          </v-btn>
        </div>
      </template>
    </v-select>
  </v-app-bar>
</template>

<script setup>
import { useAccount } from '@/store/account'
import { storeToRefs } from "pinia";
const accountStore = useAccount();
const { accounts, selectedAccount } = storeToRefs(accountStore);
const { connect, reconnect, test } = accountStore;
</script>
<style scoped>
.btn-wapper {
  display: flex;
  justify-content: center;
}
</style>