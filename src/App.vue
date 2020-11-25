<template>
  <div id="app">
    <h1>Tax Calculator</h1>
    <div>
      <input
        type="number"
        v-model.number="userInput"
        @submit.prevent="submitInput"
        @keydown.enter="submitInput"
      />
    </div>
    <BaseButton class="btn--primary" @click.native="submitInput">
      <slot>Calculate</slot>
    </BaseButton>
    <div v-if="calculatedIncome.bandName">
      <p>Band: {{ calculatedIncome.bandName }}</p>
      <p>Rate: {{ calculatedIncome.rate }}%</p>
      <p>Income: £{{ calculatedIncome.netIncome }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import BaseButton from "@/components/BaseButton";
export default {
  name: "App",
  data() {
    return {
      userInput: "",
    };
  },
  methods: {
    ...mapActions(["calculateIncome"]),
    submitInput() {
      if (this.userInput) {
        this.calculateIncome(this.userInput);
      }
      this.userInput = "";
    },
  },
  computed: {
    ...mapState(["calculatedIncome"]),
  },
  components: { BaseButton },
};
</script>

<style lang="scss" scoped>
@import "./styles/main.scss";
</style>
