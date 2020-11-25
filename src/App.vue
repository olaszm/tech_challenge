<template>
  <div>
    <Header />
    <div class="main">
      <div class="main__inner wrapper">
        <h1>Find out your income with ease</h1>

        <Calculater />
        <ResultDisplay />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Header from "@/components/Header";
import Calculater from "./components/Calculater.vue";
import ResultDisplay from "./components/ResultDisplay.vue";

export default {
  name: "App",
  data() {
    return {
      error: "",
      userInput: "",
    };
  },
  methods: {
    ...mapActions(["calculateIncome"]),
    submitInput() {
      if (this.userInput) {
        this.calculateIncome(this.userInput);
        this.userInput = "";
      } else {
        this.error = "Please enter your salary!";
      }
    },
  },

  components: { Header, Calculater, ResultDisplay },
};
</script>

<style lang="scss" >
@import "./styles/main.scss";

.main {
  padding: 5rem 0;
}
</style>
