<template>
  <div class="app">
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
import Header from "@/components/Header";
import Calculater from "./components/Calculater.vue";
import ResultDisplay from "./components/ResultDisplay.vue";

export default {
  name: "App",
  data() {
    return {};
  },

  components: { Header, Calculater, ResultDisplay },
};
</script>

<style lang="scss" >
@import "./styles/main.scss";

.main {
  padding: 3rem 0;
}
</style>
