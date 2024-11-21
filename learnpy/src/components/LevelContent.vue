<template>
    <div class="levelContent">
      <div v-if="level">
        <h2>{{ level.name }}</h2>
        <div v-html="level.content"></div>
        <div>
          <button @click="goToPreviousLevel">prev</button>
          <button @click="goToNextLevel">next</button>
        </div>
    </div>
      <div v-else>
        <p>Level not found.</p>
      </div>
    </div>
  </template>

  <script>
  export default {
    data() {
    return {
      currentLevel: parseInt(this.$route.params.id),
    };
  },
  mounted() {
    Prism.highlightAll();

  },

    props: ['id'],  // Получаем id из маршрута
    computed: {
      currentLevel() {
        return parseInt(this.$route.params.id);

    },
      level() {
        return this.$store.getters.getLevelById;

         // Получаем уровень по ID
      }
    },
    created() {
      // Преобразуем id в число, если он передан как строка в маршруте
      const currentLevel = parseInt(this.id, 10);

      // Если уровень еще не загружен в Vuex или не совпадает с переданным ID, загружаем его
      if (!this.level || this.level.id !== currentLevel) {
        this.$store.dispatch('setLevelById', currentLevel);
      }

    },
    watch: {
      // Следим за изменением параметра уровня в URL
      '$route.params.id'(newId) {
        this.currentLevel = parseInt(newId);// Обновляем данные при изменении пути
      },
    },
    methods: {
    goToNextLevel() {
      // Переходим на следующий уровень
      const nextLevel = this.currentLevel + 1;
      location.replace(`/level/${nextLevel}`)
    },
    goToPreviousLevel() {
      // Переходим на следующий уровень
      const previousLevel = this.currentLevel - 1;
      location.replace(`/level/${previousLevel}`)
    }
  },

};
  </script>
  <style scoped>
  .levelContent {
    padding: 2vh;
    padding-top: 10vh;
  }


  </style>

