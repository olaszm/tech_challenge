<template>
  <header class="header">
    <div class="header__inner wrapper">
      <h1>Tax Calculator</h1>
      <nav></nav>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped lang='scss'>
@import "../styles/_variables.scss";

.header {
  height: 100%;
  min-height: 60px;
  background-color: $primary;
  display: grid;
  place-items: center;
  &__inner {
    padding: 0.5em 0;
    h1 {
      margin: 0;
      color: $white;
    }
  }
}
</style>