<template>
  <div v-if="calculatedIncome.bandName">
    <h2>Tax Calculation Results</h2>

    <p>Band: {{ calculatedIncome.bandName }}</p>
    <p>Rate: {{ calculatedIncome.rate }}%</p>
    <p>Income: £{{ calculatedIncome.netIncome }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["calculatedIncome"]),
  },
};
</script>

<style>
</style>