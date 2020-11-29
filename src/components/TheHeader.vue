<template lang="pug">
nav
  button(@click="addCard") Add card
</template>

<script>
export default {
  name: 'TheHeader',
  methods: {
    addCard() { this.$store.dispatch('setCard', { title: 'Title of Card' }); },
  },
};
</script>

<style scoped lang="scss">
nav {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 10px;
  background: rgba(255,255,255,.2);
  backdrop-filter: blur(7px) brightness(120%);
  z-index: 2;

  button {
    box-shadow: 0 0px 5px rgba(8,98,95,.3);
  }
}
</style>
