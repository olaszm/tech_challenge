<template>
  <input
    class="input"
    :type="type"
    :placeholder="placeHolder"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    type: {
      required: true,
    },
    placeHolder: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang='scss' >
input {
  width: 100%;
  min-height: 45px;
  border-radius: 4px;
  border: 1px solid #ced4da;
  padding: 0.5em;
  margin: 1rem 0;
}
</style>