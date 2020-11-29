<template lang="pug">
TheHeader
section
  .wrapper(v-for="card in cards", :key="card.id")
    Card(:card="card")
  .banner(v-if="cards.length == 0") &uarr;#[br]Add first card.
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

  .wrapper {
    padding: 60px 7px 14px 0px;
    &:first-child { padding-left: 7px; }
  }

  .banner {
    position: absolute;
    top: 60px;
    left: 14px;
    color: #fff;
    font-size: 2.8rem;
    font-weight: 700;
    opacity: .9;
    animation: shake 1s infinite ease-in-out;
  }
}

@keyframes shake {
  0% { transform: translateY(30px); }
  50% { transform: translateY(0px); }
  100% { transform: translateY(30px); }
}
</style>
