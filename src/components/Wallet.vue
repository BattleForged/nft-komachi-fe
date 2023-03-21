<script setup>
import { useAccount } from '@/store/account'
import { storeToRefs } from "pinia";
const accountStore = useAccount();
const { accounts, selectedAccount } = storeToRefs(accountStore);
const { connect, reconnect, test } = accountStore;
</script>

<template>
  <button @click="connect">connect</button>
  <button @click="reconnect">reconnect</button>
  <button @click="test">test</button>
  <div v-if="accounts">
    {{ selectedAccount }} {{ accounts }}
  </div>
</template>
