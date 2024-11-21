import { createStore } from 'vuex';

export default createStore({
  state: {
    levels: [
      { 
        id: 1,
        name: 'Введение',
        content: "<p>Программа - это набор инструкций, которые описывают определённую последовательность действий.<br>Например, ниже представлена программа из двух инструкций</p><pre><code class=\"language-javascript\">print(\"hello world\")\nprint(\"Привет\")</code></pre><p>Инструкции всегда выполняются последовательно друг за другом сверху вниз.<br>В свою очередь каждая инструкция создает или обрабатывает объекты.<br>Понятие «объект» в принципе является ключевым в языке python, поскольку любое значение в нем является объектом.</br> </p>"
      },
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
