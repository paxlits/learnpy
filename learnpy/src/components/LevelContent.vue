<template>
    <div class="levelContent">
      <div v-if="level">
        <h2>{{ level.name }}({{ level.id }})</h2>
        <div v-html="level.content"></div>
        <div v-if="level.options">
        <h2>Выберите правильный ответ:</h2>
        <div v-for="(option, index) in level.options" :key="index">
            <input
                @change="updateSelectedAnswer(option.value)"
                type="radio"
                :value="option.value"
                :id="'option' + index"
                name="quiz_option"
              
                />
            <label :for="'option' + index"><pre><code class="python">{{ option.label }}</code></pre></label>
        </div>
        <button style="margin-top:0vh;width: 100%;padding: 10px 0px;border-radius: 8px;transform: translateX(-50%);margin-left: calc(50vw - 2vh);margin-bottom: 15px;" @click="checkAnswer">Проверить ответ</button>
      </div>
        <p v-if="resultMessage">{{ resultMessage }}</p>
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
      selectedAnswer: null,
      resultMessage: '',
    
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
    },
    updateSelectedAnswer(answer) {
        this.selectedAnswer = answer; // Обновляем выбранный ответ
    },
    checkAnswer() {
      if (this.selectedAnswer === 'correct') {
        this.resultMessage = 'Правильный ответ!';
        
      } else {
        this.resultMessage = 'Попробуйте снова.';
      }
        }
  },

};
  </script>
  <style scoped>
  input:focus + label > pre > code {
    transition: background-color 0.5s ease;
    background-color: #999;
  }
  input {
    position: absolute;
    opacity: 0;
  }
  .levelContent {
    padding: 2vh;
    padding-top: 10vh;
  }


  </style>

