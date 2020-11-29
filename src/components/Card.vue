<template lang="pug">
.card(:class=`{
    card_inprogress: inProgress != '0%' && todo == '0%',
    card_review: review != '0%' && todo == '0%' && inProgress == '0%',
    card_done: done != '0%' && review == '0%' && todo == '0%' && inProgress == '0%',
  }`)
  .card__menu(v-if="!showEditor")
    button.sm(@click="showEditor = true") Edit
    button.sm.cancel(@click="delete") Delete

  .card__title(v-if="!showEditor", @click="showEditor = true") {{ card.title }}
  .card__editor(v-else)
    input(
      ref="title",
      type="text",
      v-model="title",
      placeholder="Title of card")
    button.save(@click="save") Save
    button.cancel(@click="close") Cancel

  .card__progress(@click="showEditor = true")
    .card__progress__done(:style="{ width: done }")
    .card__progress__review(:style="{ width: review }")
    .card__progress__inprogress(:style="{ width: inProgress }")
    .card__progress__todo(:style="{ width: todo }")

  .card__tasks
    Task(
      v-for="(taskId, index) in card.taskList",
      :key="taskId",
      :taskId="taskId",
      :card="card")
    Task(v-if="newTask", :card="card", v-on:save="newTask = false")
    button(v-else, @click="newTask = true") Add subtask
</template>

<script>
import UIRange from './UIRange.vue';
import Task from './Task.vue';

export default {
  name: 'Card',
  components: { UIRange, Task },
  props: { card: Object },
  mounted() {
    if (this.card.title === null) {
      this.showEditor = true;
      this.$nextTick(() => { this.$refs.title.focus(); });
    }
  },
  data() {
    return {
      showEditor: false,
      newTask: false,
      title: this.card.title,
    };
  },
  methods: {
    save() {
      this.$store.dispatch('setCard', { title: this.title, cardId: this.card.id });
      this.showEditor = false;
    },
    close() {
      this.showEditor = false;
      this.title = this.card.title;
    },
    delete() {
      this.$store.dispatch('deleteCard', this.card.id);
    },
    countHandler(status) {
      let count = 0;
      this.card.taskList.forEach((taskID) => {
        if (this.$store.state.tasks.get(taskID).status === status) {
          count += 1;
        }
      });

      if (this.card.taskList.length === 0 || count === 0) return '0%';
      return `${(100 / this.card.taskList.length) * count}%`;
    },
  },
  computed: {
    todo() { return this.countHandler('1'); },
    inProgress() { return this.countHandler('2'); },
    review() { return this.countHandler('3'); },
    done() { return this.countHandler('4'); },
  },
};
</script>

<style scoped lang="scss">
$todo: #abc3d0;
$todoBg: #e0eef6;
$inProgress: #53bae0;
$inProgressBg: #d7f4ff;
$review: #ebcc71;
$reviewBg: #ffedb8;
$done: #16d99e;
$doneBg: #a4ffe3;

.card {
  flex: 0 0 auto;
  flex-direction: column;
  max-width: 300px;
  min-width: 300px;
  box-sizing: border-box;
  background: white;
  margin: auto;
  border-radius: 7px;
  background-color: rgba(255,255,255,.85);
  border: 3px solid rgba(0,0,0,.1);
  backdrop-filter: blur(5px) brightness(150%);

  &_inprogress {
    background-color: $inProgressBg;
    .card__tasks > button { background-color: $inProgress; }
  }
  &_review {
    background-color: $reviewBg;
    .card__tasks > button { background-color: $review; }
  }
  &_done {
    background-color: $doneBg;
    .card__tasks > button { background-color: $done; }
    opacity: .3;
    transition: opacity .3s ease-in-out;
    &:hover { opacity: 1; }
  }

  &__menu {
    position: absolute;
    top: 0;
    right: 0;
    opacity: .1;
    transition: opacity .3s ease-in-out;
    &:hover { opacity: 1; }
  }

  &__title {
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: 900;
    color: rgb(39,99,148);
    padding: 14px;
  }

  &__progress {
    display: flex;
    height: 14px;
    width: calc(100% - 14px);
    margin: 7px 7px 14px;
    background: $todoBg;
    border-radius: 10px;
    overflow: hidden;
    transition: all .3s ease-in-out;

    & > * { width: calc(100%); }

    &__todo { background-color: $todo; }
    &__inprogress { background-color: $inProgress; }
    &__review { background-color: $review; }
    &__done { background-color: $done; }
  }

  &__editor {
    padding: 7px;

    input[type=text] {
      font-size: 1.3rem;
      font-weight: 900;
      color: rgb(39,99,148);
      width: 100%;
      box-sizing: border-box;
    }

    button { margin-top: 7px; }
  }

  &__tasks {
    & > .task {
      padding: 12px 6px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    & > button { margin: 14px; }
  }
}
</style>
