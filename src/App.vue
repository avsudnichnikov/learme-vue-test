<template lang="pug">
  v-app
    v-content
      v-container.pt-0
        transition(name="fade" mode="out-in")
          router-view
</template>

<script>

export default {

  name: 'App',
  components: {
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="sass">
  .fade-enter-active,
  .fade-leave-active
    transition-duration: 0.15s
    transition-property: opacity
    transition-timing-function: ease
  .fade-enter,
  .fade-leave-active
    opacity: 0
</style>
