import { createStore } from 'vuex';

export default createStore({
  state: {
    levels: [
      {
        id: 1,
        name: 'Введение',
        content: "<p>Программа - это набор инструкций, которые описывают определённую последовательность действий.<br>Например, ниже представлена программа из двух инструкций которые выводят на экран текст в скобках и кавычках</p><pre><code class=\"python\">print(\"hello world\")\nprint(\"Привет\")</code></pre><p>Инструкции всегда выполняются последовательно друг за другом сверху вниз.<br>В свою очередь каждая инструкция создает или обрабатывает объекты.<br>Понятие «объект» в принципе является ключевым в языке python, поскольку любое значение в нем является объектом.</br> </p>"
      },
      { id: 2,
        name: 'Числа и операции над ними',
        content: "<p>В python существуют различные типы данных, для начала я предлагаю рассмотреть работу чисел в той же инструкции print</p><h3>Сложение</h3><pre><code class=\"python\">print(1+3) #ответ 4</code></pre><h3>Вычитание</h3><pre><code class=\"python\">print(5-3) #ответ 2</code></pre><h3>Произведение</h3><pre><code class=\"python\">print(5*4) #ответ 20</code></pre><h3>Деление</h3><pre><code class=\"python\">print(13/4) #ответ 3.25</code></pre><h3>Целочисленное деление</h3><pre><code class=\"python\">print(13//4) #ответ 3</code></pre>"
      },
      {
        id: 3,
        name: 'Первое задание',
        content: "<p>Вам нужно выбрать правильный вариант, как сделать вывод операции 5+2 и слова йоу</p>",
        options: [
              { label: 'print(1+3), print("йоу")', value: 'wrong' },
              { label: 'print(1+3)\nprint("йоу")', value: 'correct' }, // Правильный ответ
              { label: 'print(1+3), print(йоу)', value: 'wrong' },
              { label: 'print("1+3")\nprint("йоу")', value: 'wrong' }
        ],
      selectedAnswer: null,
      resultMessage: ''
      }

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
