<template lang="pug">
.task(
  :class=`{
    task_edit: showEditor,
    task_todo: status === '1',
    task_inprogress: status === '2',
    task_review: status === '3',
    task_done: status === '4',
  }`)
  .task__menu(v-if="!showEditor")
    button.sm(@click="showEditor = true") Edit
    button.sm.cancel(@click="delete") Delete
  .task__title(v-if="!showEditor", @click="showEditor = true", v-html="description")
  .task__actions(v-else)
    textarea(ref="description", v-model="description")
    .task__actions__status
      label {{ statusName }}
      UIRange(v-model="status", :val="status")
    button.save(@click="save") Save
    button.cancel(@click="cancel") Cancel
</template>

<script>
import UIRange from './UIRange.vue';

export default {
  name: 'Task',
  components: { UIRange },
  props: {
    taskId: String,
    card: Object,
  },
  mounted() {
    if (this.taskId) {
      this.description = this.$store.state.tasks.get(this.taskId).description;
      this.status = this.$store.state.tasks.get(this.taskId).status;
    } else {
      this.showEditor = true;
    }
  },
  data() {
    return {
      showEditor: false,
      description: '',
      status: '1',
    };
  },
  methods: {
    save() {
      const payload = {
        cardId: this.card.id,
        description: this.description,
        taskId: this.taskId || null,
        status: this.status,
      };
      this.$store.dispatch('setTask', payload);
      this.$emit('save');
      this.showEditor = false;
    },
    cancel() {
      this.$emit('save');
      this.description = this.$store.state.tasks.get(this.taskId).description;
      this.showEditor = false;
    },
    delete() {
      const payload = {
        cardId: this.card.id,
        taskId: this.taskId,
      };

      this.$store.dispatch('deleteTask', payload);
      this.$emit('save');
      this.showEditor = false;
    },
  },
  computed: {
    desc() {
      const result = this.$store.state.tasks.get(this.taskId);
      return result && result.description ? result.description : '';
    },
    task() {
      return this.taskId ? this.$store.state.tasks.get(this.taskId) : undefined;
    },
    statusName() {
      switch (this.status) {
        case '2': return 'In progress';
        case '3': return 'Review';
        case '4': return 'Done';
        default: return 'Todo';
      }
    },
  },
  watch: {
    showEditor(val) {
      if (val) {
        this.$nextTick(() => { this.$refs.description.focus(); });
      }
    },
  },
};
</script>

<style scoped lang="scss">
$todo: #abc3d0;
$inProgress: #53bae0;
$inProgressBg: #d7f4ff;
$review: #ebcc71;
$reviewBg: #ffedb8;
$done: #16d99e;
$doneBg: #a4ffe3;

.task {
  position: relative;
  cursor: pointer;
  transition: all .3s ease-in-out;

  &_todo { color: $todo; }
  &_inprogress {
    color: $inProgress;
    background-color: $inProgressBg;
  }
  &_review {
    color: $review;
    background-color: $reviewBg;
  }
  &_done {
    color: $done;
    background-color: $doneBg;
  }

  &_edit { cursor: default; }
  &__menu {
    position: absolute;
    top: 0;
    right: 0;
    opacity: .075;
    filter: grayscale(1) brightness(110%);
    transition: all .3s ease-in-out;
  }
  &:hover &__menu {
    opacity: 1;
    filter: grayscale(0) brightness(100%);
  }

  &__title {
    white-space: pre-line;
    padding-left: 18px;
    min-height: 8px;
  }

  &__actions {
    textarea {
      outline: none;
      box-sizing: border-box;
      width: 100%;
      min-width: 100%;
      max-width: 100%;
      min-height: 90px;
      margin-bottom: 7px;
      padding: 5px;
    }

    &__status {
      label {
        display: block;
        margin: 6px auto;
        font-size: 2rem;
        font-weight: 600;
      }

      input[type="range"] { margin-bottom: 16px; }
    }
  }
}
</style>
