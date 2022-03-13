<script setup>
import Cockie from "../components/Cockie.vue";
import Store from "../components/Store.vue";
</script>

<template>
  <div class="grid grid-cols-3 gap-5 mx-2 overflow-hidden h-screen">
    <div class="grid bg-red-300 col-span-2">
      <Cockie />
    </div>
    <div class="bg-purple-300">
      <Store />
    </div>
  </div>
</template>

<style></style>
