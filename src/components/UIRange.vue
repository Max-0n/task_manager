<template lang="pug">
input(
  v-model="value",
  type="range",
  min="1",
  max="4",
  :class=`{
    todo: value === '1',
    inprogress: value === '2',
    review: value === '3',
    done: value === '4'
  }`)
</template>

<script>
export default {
  name: 'Range',
  props: { val: String },
  data() { return { value: this.val }; },
};
</script>

<style scoped lang="scss">
$todo: #abc3d0;
$inProgress: #53bae0;
$review: #ebcc71;
$done: #16d99e;

input[type='range'] {
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  margin: 0;
  border-radius: 20px;
  background: $todo;
  outline: none;
  opacity: .75;
  -webkit-transition: .2s;
  transition: opacity .2s;
  transition: background .3s ease-in-out, filter 1s ease-in-out;

  &:hover { opacity: 1; }

  &.todo {
    background: $todo;
    &::-moz-range-thumb {
      background: $todo;
      filter: brightness(1.15) drop-shadow(0 0 1px rgba(0, 0, 0, .5));
    }
    &::-webkit-slider-thumb {
      background: $todo;
      filter: brightness(1.15) drop-shadow(0 0 1px rgba(0, 0, 0, .5));
    }
  }
  &.inprogress {
    background: $inProgress;
    &::-moz-range-thumb {
      background: $inProgress;
      filter: brightness(1.2) drop-shadow(0 0 1px rgba(0, 0, 0, .3));
    }
    &::-webkit-slider-thumb {
      background: $inProgress;
      filter: brightness(1.2) drop-shadow(0 0 1px rgba(0, 0, 0, .3));
    }
  }
  &.review {
    background: $review;
    &::-moz-range-thumb {
      background: $review;
      filter: brightness(1.2) drop-shadow(0 0 1px rgba(0, 0, 0, .3));
    }
    &::-webkit-slider-thumb {
      background: $review;
      filter: brightness(1.2) drop-shadow(0 0 1px rgba(0, 0, 0, .3));
    }
  }
  &.done {
    background: $done;
    &::-moz-range-thumb {
      background: $done;
      filter: brightness(1.15) drop-shadow(0 0 1px rgba(0, 0, 0, .25));
    }
    &::-webkit-slider-thumb {
      background: $done;
      filter: brightness(1.15) drop-shadow(0 0 1px rgba(0, 0, 0, .25));
    }
  }

  &::-webkit-slider-thumb {
    transition: background .3s ease-in-out, filter 1s ease-in-out;
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    transition: background .3s ease-in-out, filter 1s ease-in-out;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    cursor: pointer;
  }
}
</style>
