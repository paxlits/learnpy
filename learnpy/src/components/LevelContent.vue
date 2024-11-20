<template>
    <div>
      <h1 v-if="level">урок {{ level.name }}</h1>
      <div v-else>
        <p>Level not found.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['id'],  // Получаем id из маршрута
    computed: {
      level() {
        return this.$store.getters.getLevelById;  // Получаем уровень по ID
      }
    },
    created() {
      // Преобразуем id в число, если он передан как строка в маршруте
      const levelId = parseInt(this.id, 10);
  
      // Если уровень еще не загружен в Vuex или не совпадает с переданным ID, загружаем его
      if (!this.level || this.level.id !== levelId) {
        this.$store.dispatch('setLevelById', levelId);
      }
    }
  }
  </script>
  