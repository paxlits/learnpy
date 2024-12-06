import { createStore } from 'vuex';

export default createStore({
  state: {
    levels: [
      {
        id: 1,
        name: 'Введение',
        img: "/static/img/python-logo.png",
        text: "Python это один из лучших языков программирования для начала, он имеет простой синтаксис, универсальность и много удобных библиотек. Для начала давайте попробуем вывести \"Hello world\"",
        code: 'print("Hello world")',
        text2: "print наверное самая популярная функция в python, она выводит на экран аргумент в скобках, будь это строка, число или выражение"

      },
      { id: 2,
        name: 'Числа и операции над ними',
        text: "В Python существуют различные типы данных, такие как строки, числа, списки и тд. Работа с числами в отличии от строк идёт без кавычек",
        code: 'print(1+3) #сложение\n\print(4-2) #вычитание\nprint(2*4) #умножение\nprint(16/4) #деление\nprint(13//2) #целочисленное деление\nprint(10%4) #процент от деления\nprint(2**2) #возведение в степень',
        text2: "Не стоит прямо сейчас заучивать каждый, мы разберём позже каждый подробно"
      },
      {
        id: 3,
        name: 'Первое задание',
        text: "Вам нужно выбрать вариант где на экран выведет результат 5+2 и слово йоу",
        options: [
              { label: 'print(5+2), print("йоу")', value: 'wrong' },
              { label: 'print(5+2), print(йоу)', value: 'wrong' },
              { label: 'print(5+2)\nprint("йоу")', value: 'correct' }, // Правильный ответ
              { label: 'print("5+2")\nprint("йоу")', value: 'wrong' }
        ],
      },
      {
        id: 4,
        name: 'penis',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmubOn7sfXN_YFy2aQlSO2X2pZKuOI-em9BA&s",
        text: "кирил чмо",
        options: [
          { label: "кирилл чмо", value: 'correct'},
          { label: "кирилл норм", value: 'wrong'}
        ]
      }
    ],
    currentLevel: null,
  },
  mutations: {
    setCurrentLevel(state, level) {
      state.currentLevel = level;
    }
  },
  actions: {
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
