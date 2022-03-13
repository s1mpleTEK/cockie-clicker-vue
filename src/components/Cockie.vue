<script setup>
import cockie from "../assets/biscuit-svgrepo-com.svg";
import { useCockieStore } from "../stores/cockie";
const cockieStore = useCockieStore();
</script>

<template>
  <div class="grid place-content-center">
    <img :src="cockie" @click="cockieStore.ClickIncrement(1)" />
    <div class="grid justify-center">
      <h1>Number of cockies:</h1>
      <h2 class="grid justify-items-center">{{ cockieStore.actualCount }}</h2>
    </div>
  </div>
</template>

<style></style>
