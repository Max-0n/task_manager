<template lang="pug">
TheHeader
section
  .card_wrapper(v-for="card in cards", :key="card.id")
    Card(:card="card")
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import Card from './components/Card.vue';

export default {
  name: 'App',
  components: { TheHeader, Card },
  mounted() {
    this.$store.dispatch('getCards');
    this.$store.dispatch('getTasks');
  },
  computed: {
    cards() {
      return Object.values(Object.fromEntries([...this.$store.state.cards]));
    },
  },
};
</script>

<style scoped lang="scss">
section {
  display: flex;
  overflow-x: auto;
  padding: 0;
  min-height: 100vh;
  box-sizing: content-box;

  .card_wrapper {
    padding: 60px 7px 14px 0px;
    &:first-child { padding-left: 7px; }
  }
}
</style>
