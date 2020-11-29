import { createStore } from 'vuex';

export default createStore({
  state: {
    cards: new Map(),
    tasks: new Map(),
  },
  actions: {
    getCards: ({ state }) => {
      const dataJson = localStorage.getItem('cards');
      state.cards = dataJson ? new Map(JSON.parse(dataJson)) : new Map();
    },
    setCard: ({ state }, { cardId, title }) => {
      if (cardId && state.cards.has(cardId)) {
        state.cards.get(cardId).title = title;
      } else {
        let newCardId;
        do { newCardId = `${Math.random()}`; }
        while (state.cards.has(newCardId));

        state.cards.set(newCardId, {
          id: newCardId,
          title: title || 'Empty',
          taskList: [],
        });
      }

      localStorage.setItem('cards', JSON.stringify([...state.cards]));
    },
    deleteCard: ({ state }, cardId) => {
      if (cardId && state.cards.has(cardId)) {
        state.cards.get(cardId).taskList.forEach((taskId) => state.tasks.delete(taskId));
        state.cards.delete(cardId);
      }

      localStorage.setItem('cards', JSON.stringify([...state.cards]));
      localStorage.setItem('tasks', JSON.stringify([...state.tasks]));
    },

    getTasks: ({ state }) => {
      const dataJson = localStorage.getItem('tasks');
      state.tasks = dataJson ? new Map(JSON.parse(dataJson)) : new Map();
    },
    setTask: ({ state }, {
      cardId,
      taskId,
      description,
      status,
    }) => {
      if (taskId && state.tasks.has(taskId)) {
        state.tasks.get(taskId).description = description;
        state.tasks.get(taskId).status = status;
      } else {
        let newId;
        do { newId = `${Math.random()}`; }
        while (state.tasks.has(newId));

        state.cards.get(cardId).taskList.push(newId);
        localStorage.setItem('cards', JSON.stringify([...state.cards]));
        state.tasks.set(newId, {
          id: newId,
          description,
          status,
        });
      }

      localStorage.setItem('tasks', JSON.stringify([...state.tasks]));
    },
    deleteTask: ({ state }, { cardId, taskId }) => {
      if (taskId && state.tasks.has(taskId)) {
        state.tasks.delete(taskId);
      }

      if (state.cards.has(cardId)) {
        const index = state.cards.get(cardId).taskList.indexOf(taskId);
        if (index >= 0) {
          state.cards.get(cardId).taskList.splice(index, 1);
        }
      }

      localStorage.setItem('cards', JSON.stringify([...state.cards]));
      localStorage.setItem('tasks', JSON.stringify([...state.tasks]));
    },
  },
});
