
<template>
    <div id="app">
        <ul class = "list-levels">
          <li v-for="level in levels" :key="level.id" class="in-future">
            <router-link :to="{ name: 'LevelContent', params: { id: level.id } }">
              <p>{{ level.id }}</p>
              <p>{{ level.name }}</p>
            </router-link>
          </li>
        </ul>
  </div>
  </template>
  <script>
  export default {
    computed: {
      levels() {
        return this.$store.getters.getLevels;
      }
    }
  }
  </script>

  <style scoped>
  a {
    color: white;
    text-decoration: none;
    width: 80vw;
    display: grid;
    grid-template-rows: 20vw;
    grid-template-columns: 10vw 70vw;
    align-items: center;
  }
  #app {
    padding-top: 10vh;
  }
</style>

