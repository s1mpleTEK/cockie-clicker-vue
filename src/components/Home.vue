<script setup>
import { useCounterStore } from "../stores/counter";
const counterStore = useCounterStore();
const value = 1;
const delay = 2000;
</script>

<template>
  <div class="flex justify-center">
    <h1>
      H<span class="text-red-600 italic">o</span>m<span class="italic text-green-600"
        >e</span
      >
    </h1>
  </div>
  <div class="flex-column">
    <div class="flex justify-around">
      <h2>
        Count is
        <span class="text-red-600 italic">{{ counterStore.count }}</span>
      </h2>
      <h2>
        Double count
        <span class="text-green-600 italic">{{ counterStore.doubleCount }}</span>
      </h2>
    </div>

    <div class="flex justify-center">
      <button
        type="button"
        @click="counterStore.increment(value)"
        class="self-center mr-4 h-10"
      >
        +{{ value }}
      </button>
      <button
        type="button"
        @click="counterStore.waitAndAdd(delay, value)"
        class="self-center mr-4 h-10"
      >
        +{{ value }} with {{ delay }}ms
      </button>
      <button type="button" @click="counterStore.reset" class="h-10 self-center">
        Reset
      </button>
    </div>
  </div>
</template>

<style></style>
