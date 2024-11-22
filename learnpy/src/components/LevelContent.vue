<template>
    <div class="levelContent">
      <div v-if="level">
        <h2>{{ level.name }}({{ level.id }})</h2>
        <div v-html="level.content"></div>
        <div class="btns-nav">
          <button id="btn-prev" @click="goToPreviousLevel"><img style="rotate: -90deg" src="/static/img/arrow.svg"></button>
          <button id="btn-next" @click="goToNextLevel"><img style="rotate: 90deg" src="/static/img/arrow.svg"></button>
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
    hljs.highlightAll();
    if (this.currentLevel==1) {
        document.getElementById("btn-prev").style.display = 'none'
      }

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
      const nextLevel = this.currentLevel + 1;
      location.replace(`/level/${nextLevel}`)
    },
    goToPreviousLevel() {
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
  code.hljs {
    padding: 0;
  }


  </style>

