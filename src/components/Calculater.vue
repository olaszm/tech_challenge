<template>
  <div class="container">
    <p class="error" v-if="error">{{ error }}</p>
    <div class="inputs">
      <BaseInput
        type="number"
        placeHolder="Enter gross salary"
        v-model="userInput"
      />
      <BaseButton class="btn--primary" @click.native="submitInput">
        <slot>Calculate</slot>
      </BaseButton>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import BaseButton from "@/components/BaseButton";
import BaseInput from "@/components/BaseInput";
export default {
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
  computed: {
    ...mapState(["calculatedIncome"]),
  },
  components: { BaseButton, BaseInput },
};
</script>

<style lang='scss' scoped>
@import "../styles/_variables.scss";
.container {
  margin: 2rem 0;
}

.inputs {
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    margin-right: 1rem;
  }
  @media (max-width: $tablet) {
    flex-direction: column;
    input {
      margin-right: 0;
    }
  }
}

.error {
  color: red;
  font-weight: bold;
}
</style>