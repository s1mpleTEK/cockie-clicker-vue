import { defineStore } from "pinia"

export const useCockieStore = defineStore("cockie", {
    state: () => {
        return {
            actualCount:0,
            globalCount:0,
            lvl: 1 
        };
    },
    actions: {
        ClickIncrement(v = 1) {
            this.actualCount += v *this.lvl
            this.globalCount += v*this.lvl
        },
        Buy(price) {
            this.actualCount -= price
            this.lvl += 1
        },
        async waitAndAdd(d = 1000, v = 1) {
            setTimeout(() => {
                    this.ClickIncrement(v)
            }, d);
        }
    },
    getters: {
    }
})