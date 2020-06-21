<template lang="pug">
  div
    h1 {{error.code}} - {{error.title}}
</template>

<script>
  import consts from "../consts";

  export default {
    name: "Error",
    props: {
      error: {
        type: Object,
        default: () => consts.errors.unknown,
      },
    },
    data: () => ({
    }),
  }
</script>

<style scoped>

</style>
