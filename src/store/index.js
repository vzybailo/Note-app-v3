import { createStore } from 'vuex'

export const store = createStore({
  state: {
    title: 'hi',
    notes: [
        {
          title: 'Learn Vue 3',
          tags: ['work']
        },
        {
          title: 'Finish course',
          tags: ['work', 'home']
        }
      ],
    tags: ['home', 'work', 'travel'],
  },
  mutations: {},
  actions: {},
  getters: {
    getNotes (state) {
        return state.notes
    }
  }
})
