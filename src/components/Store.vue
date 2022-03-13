<script setup>
import storeList from "../data/store.json";
import { useCockieStore } from "../stores/cockie";

const cockieStore = useCockieStore();
</script>

<template>
  <div class="grid-rows-4 gap-5">
    <div v-for="store in storeList">
      <div v-if="cockieStore.globalCount >= store.hind">
        <div class="grid-rows-3">
          <h3>{{ store.name }}</h3>
          <p>{{ store.description }}</p>
          <div class="grid grid-cols-2 gap-8 px-5">
            <button type="button" @click="cockieStore.Buy(store.price[0])">Buy</button>
            <p>Price {{ store.price[0] }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
