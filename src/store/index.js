import { createStore } from 'vuex'

const DEFAULT_NOTES = [
  {
    title: 'Learn Vue 3',
    tags: ['work']
  },
  {
    title: 'Finish course',
    tags: ['work', 'home']
  }
]

const DEFAULT_NOTES_TAGS = ['home', 'work', 'travel']

export const store = createStore({
  state: {
    notes: DEFAULT_NOTES,
    tags: DEFAULT_NOTES_TAGS,
    tag: null
  },
  mutations: {
    setNotes (state, note) {
      state.notes.push(note)
    }
  },
  getters: {
    getNotes (state) {
      return state.notes
    }
  }
})
