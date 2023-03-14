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
    getNoties: state => state.notes
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  //   могу их использовать но так как приложение маленькое не стал
  }
})
