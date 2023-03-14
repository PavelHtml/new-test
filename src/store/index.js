import { createStore } from 'vuex'

export default createStore({
  state: {
    notes: [
      {
        title: 'Первая заметка',
        list: ['заметка', 'заметка', 'заметка', 'заметка']
      },
      {
        title: 'Вторая заметка',
        list: ['заметка', 'заметка', 'заметка', 'заметка']
      }
    ]
  },
  getters: {
    getNotes: state => state.notes
  },
  mutations: {
    deleteNote(state, index) {
      state.notes.splice(index, 1)
    },
    addNote(state) {
      state.notes.push({
        title: null,
        list: null
      })
    }
  },
  actions: {
  },
  modules: {
  //   могу их использовать но так как приложение маленькое не стал
  }
})
