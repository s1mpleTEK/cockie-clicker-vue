import { defineStore } from "pinia"

const value = 1
const delay = 2000

export const useCounterStore = defineStore("counter", {
    state: () => {
        return {count:0};
    },
    actions: {
        increment(v = value) {
            this.count += v
        },
        async waitAndAdd(d = delay, v = value) {
            setTimeout(() => {
                this.increment(v)
            }, d);
        },
        reset() {
            this.count = 0
        },
    },
    getters: {
        doubleCount:(state) => state.count*2,
    }
})