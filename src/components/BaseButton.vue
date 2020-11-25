<template>
  <button>
    <slot> </slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped lang='scss'>
@import "../styles/_variables.scss";

button {
  width: 100%;
  border: none;
  min-height: 45px;
  color: white;
  border-radius: 4px;
  font-weight: bold;
  transition: background 300ms ease;
  cursor: pointer;
  //   margin: 1rem 0;
  padding: 0.5em;
}

.btn {
  &--primary {
    background-color: $primary;
    &:hover,
    &:focus {
      background-color: $dark-primary;
    }
  }
  &--secondary {
    background-color: $white;
    color: $primary;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 0 4px rgba(0, 0, 0, 0.06),
      0 4px 10px rgba(0, 0, 0, 0.05);
  }
}
</style>