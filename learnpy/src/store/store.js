import { createStore } from 'vuex';

export default createStore({
  state: {
    levels: [
      { id: 1, name: 'Введение'},
      { id: 2, name: 'Основы HTML: теги и элементы' },
      { id: 3, name: 'HTML-атрибуты' },
      { id: 4, name: 'HTML-заголовки' },
      { id: 5, name: 'HTML-параграфы' },
      { id: 6, name: 'Атрибут style и тег style' },
      { id: 7, name: 'Теги форматирования' },
      { id: 8, name: 'HTML-списки' },
      { id: 9, name: 'Ссылки' },
      { id: 10, name: 'Картинки' },
      { id: 11, name: 'Таблицы' },
      // Добавьте другие уровни
    ],
    currentLevel: null,
  },
  mutations: {
    setCurrentLevel(state, level) {
      state.currentLevel = level;
    }
  },
  actions: {
    // Действие для получения уровня по ID
    setLevelById({ commit, state }, id) {
      const level = state.levels.find(level => level.id === id);
      commit('setCurrentLevel', level);
    }
  },
  
  getters: {
    getLevels(state) {
      return state.levels;
    },
    getLevelById(state) {
      return state.currentLevel;
    },
  }
});
