import { createStore } from 'vuex'

export default createStore({
  state: {
    notes: [
      {
        title: 'Первая заметка',
        list: [
          {
            text: 'заметка',
            ready: true
          },
          {
            text: 'заметка',
            ready: false
          },
          {
            text: 'заметка',
            ready: false
          },
          {
            text: 'заметка',
            ready: false
          },
          {
            text: 'заметка',
            ready: false
          }
        ]
      },
      {
        title: 'Вторая заметка',
        list: [
          {
            text: 'заметка',
            ready: false
          },
          {
            text: 'заметка',
            ready: false
          },
          {
            text: 'заметка',
            ready: false
          },
          {
            text: 'заметка',
            ready: false
          },
          {
            text: 'заметка',
            ready: false
          }
        ]
      }
    ],
    currentNote: null
  },
  getters: {
    getNotes: state => state.notes,
    getCurrentNote: state => state.currentNote
  },
  mutations: {
    initialNotes(state, payload) {
      state.notes = payload
    },
    deleteNote(state, index) {
      state.notes.splice(index, 1)
      localStorage.setItem('notes', JSON.stringify(state.notes));
    },
    addNote(state) {
      state.notes.push({
        title: null,
        list: [
          {
            text: null,
            ready: false,
            update: true
          },
        ]
      })
      localStorage.setItem('notes', JSON.stringify(state.notes));
    },
    openNote(state, index) {
      state.currentNote = JSON.parse(JSON.stringify(state.notes[index]))
    },
    updateNoteTitle(state, title) {
      state.currentNote.title = title
    },
    updateNoteList(state, list) {
      state.currentNote.list = list
    },
    addNewNoteItem(state) {
      state.currentNote.list.push({
        text: null,
        ready: false,
        update: true
      })
    },
    deleteListItem(state, index) {
      state.currentNote.list.splice(index, 1)
    },
    saveNote(state, index) {
      state.currentNote.list.map(item => {
        item.update = false
        return item
      })
      state.notes[index] = JSON.parse(JSON.stringify(state.currentNote))
      localStorage.setItem('notes', JSON.stringify(state.notes));
    }
  },
  actions: {
    getLocalNotes({ commit }) {
      if (localStorage.getItem('notes') !== null) {
        const localNotes = JSON.parse(localStorage.getItem('notes'))
        commit('initialNotes', localNotes)
      }
    }
  },
  modules: {
  //   могу их использовать но так как приложение маленькое не стал
  }
})
