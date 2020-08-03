<template>
  <v-app dark>
    <v-content>
      <v-container>
        <v-layout row>
            <v-col cols="7">
              <v-card id="mask">
                <input type="text" v-model="mask" @keyup.enter="generateNumber" placeholder="+7900XXXXXXX">
                <input type="text" v-model="amount" @keyup.enter="generateNumber" placeholder="10">
                <button class="green darken-4" @click="generateNumber">Generate</button>
              </v-card>
              <v-card class="pa-2 mt-4">
                <span class="caption grey--text darken-4">Last used masks</span>
                <v-card-text>
                  <v-chip class="ma-1" v-for="(lmask, key) in latest" :key="key" @click="mask = lmask">{{lmask}}</v-chip>
                </v-card-text>
              </v-card>
              <v-card class="mt-4">
                <v-card-text>
                  <div v-if="!generated.length" class="empty grey--text darken-4">
                    <span class="caption">There will be placed generated numbers</span>
                  </div>
                  <div refs="gen" v-else>
                    <div v-for="(number, key) in generated" :key="key">{{number}}</div>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="5">
              <MasksTab v-on:fire="onFire" />
            </v-col>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import MasksTab from "./components/MasksTab";
export default {
  name: 'App',

  components: {
    MasksTab
  },

  data: () => ({
    mask: "",
    amount: 1,
    generated: [],
    latest: []
  }),
  computed: {
    replacedMask() {
      return this.mask.toLowerCase().replace(/[xх]/, 'x');
    },
    isMaskValid() {
      return this.replacedMask.indexOf("x") > 0
    }
  },
  methods: {
    _getRandomNumber() {
      return Math.floor(Math.random() * 10);
    },
    generateNumber() {
      const amount = Number.parseInt(this.amount);
      if (!this.mask || !this.isMaskValid || Number.isNaN(amount))
        return this.generated = []; 
      
      if (!this.latest.length || this.latest[0] !== this.mask)
        this.latest.unshift(this.mask);
      if (this.latest.length > 5)
        this.latest.pop();

      this.generated = [];
      if (this.$refs.gen)
        this.$refs.gen.innerHTML = '';
      for (let i = 0; i < amount; i++) 
        this.generated.push(this.replacedMask.split('').map(s => (s === "x") ? this._getRandomNumber() : s).join(''));
    },
    onFire(mask) {
      this.mask = mask;
    }
  }
};
</script>

<style lang="scss" scoped>
  .caption {
    display: block;
    text-align: center;
  }
  .empty {
    text-align: center;
  }
  #mask {
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    input, button {
      color: white;
      padding: 10px;
      padding-left: 20px;
      outline: none;
      &:first-child {
        flex-grow: 1;
      }
    }
    button {
      border-bottom-left-radius: 0;
    }
  }
</style>