<script setup>
import Error from '@/components/Error.vue'
import Intro from '@/components/Intro.vue'
import Contract from '@/components/Contract.vue'
import OwnerZone from '@/components/OwnerZone.vue'
import { useContract } from '@/store/contract'
import { useAccount } from '@/store/account'
import { storeToRefs } from "pinia"

const contractStore = useContract();
const { contract } = storeToRefs(contractStore);

const accountStore = useAccount();
const { selectedAccount } = storeToRefs(accountStore);
</script>

<template>
  <main>
    <v-container>
      <v-row dense>
        <Intro />
        <Error v-if="!contract||!selectedAccount" />
        <template v-else>
          <OwnerZone />
          <Contract />
        </template>
      </v-row>
    </v-container>
  </main>
</template>
