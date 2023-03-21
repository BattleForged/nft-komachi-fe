<template>
    <v-col :cols="12">
        <v-card>
            <v-card-actions>
                <h1>Intro</h1>
                <v-spacer></v-spacer>
                <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
            </v-card-actions>
            <v-expand-transition>
                <v-container v-show="show">
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-row dense>
                            <v-col :cols="smAndUp ? 3 : 12">
                                <v-avatar class="ma-3" size="125" rounded="20">
                                    <v-img src="@/assets/logo.jpg"></v-img>
                                </v-avatar>
                            </v-col>
                            <v-col :cols="smAndUp ? 9 : 12">
                                <p class="ml-3">
                                    <h2 class="my-6">小町-KOMACHI-</h2>
                                    KOMACHI is a collection of 1000 PFP NFTs featuring unique and charming Japanese town girls,
                                    showcasing the beauty and elegance of traditional Japanese culture.
                                </p>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-container>
            </v-expand-transition>
        </v-card>
    </v-col>
</template>

<script setup>
import { ref, computed } from "vue";
import { useDisplay } from 'vuetify'

const show = ref(true)
const { smAndUp } = useDisplay()
</script>