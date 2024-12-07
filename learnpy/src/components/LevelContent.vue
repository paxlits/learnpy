<template>
    <div id="app">
      <div v-if="level">
        <h2>{{ level.name }}({{ level.id }})</h2>
        <img v-if="level.img != null" :src="level.img">
        <p>{{ level.text }}</p>
        <pre v-if="level.code != null"><code class="python">{{ level.code }}</code></pre>
        <p>{{ level.text2 }}</p>
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
        <button style="margin-top:0vh;width: 100%;padding: 10px 0px;border-radius: 8px;margin-bottom: 15px;" @click="checkAnswer">Ответить</button>
        <p v-if="resultMessage">{{ resultMessage }}</p>
      </div>
        
    </div>
      <div v-else>
        <p>Level not found.</p>
      </div>
      <div class="btns-nav">
          <button id="btn-prev" @click="goToPreviousLevel"><img style="rotate: -90deg" src="/static/img/arrow.svg"></button>
          <button id="btn-next" @click="goToNextLevel"><img style="rotate: 90deg" src="/static/img/arrow.svg"></button>
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
    this.highlightCode();
    if (this.currentLevel === 1) {
        document.getElementById("btn-prev").style.display = 'none';
    } else {
        document.getElementById("btn-prev").style.display = 'block';
    }
  },
  updated() {
    this.highlightCode();
    if (this.currentLevel === 1) {
        document.getElementById("btn-prev").style.display = 'none';
    } else {
        document.getElementById("btn-prev").style.display = 'block';
    }
  },

    props: ['id'],  // Получаем id из маршрута
    computed: {
      currentLevel() {
        return parseInt(this.$route.params.id);
    },
      level() {
        return this.$store.getters.getLevelById;
      }
    },
    created() {
      const currentLevel = parseInt(this.id, 10);
      if (!this.level || this.level.id !== currentLevel) {
        this.$store.dispatch('setLevelById', currentLevel);
      }
    },
    watch: {
      '$route.params.id'(newId) {
       this.currentLevel = parseInt(newId);
       this.fetchLevelData();
      }
      
    },
    methods: {
    highlightCode() {
     this.$nextTick(() => {
     hljs.highlightAll();
       });
     },
    fetchLevelData() {
     const currentLevel = this.currentLevel;
     this.$store.dispatch('setLevelById', currentLevel);
    },
    goToNextLevel() {
      const nextLevel = this.currentLevel + 1;
      this.$router.push({ path: `/level/${nextLevel}`});
    },
    goToPreviousLevel() {
      const previousLevel = this.currentLevel - 1;
      this.$router.push({ path: `/level/${previousLevel}`});
    },
    updateSelectedAnswer(answer) {
        this.selectedAnswer = answer; // Обновляем выбранный ответ
    },
    checkAnswer() {
      if (this.selectedAnswer === true) {
        this.resultMessage = "верно"
        
      } else {
        this.resultMessage = 'Попробуйте снова.';
      }
    }
  },
};
  </script>
  <style scoped>
  #app {
    padding: 2vh;
    padding-top: 10vh;
  }
  </style>