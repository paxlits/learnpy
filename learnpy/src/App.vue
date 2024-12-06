<template>
  <div>
    <AppHeader/>
    <RouterView></RouterView>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style>
@import '../public/static/css/reset.css';
@import '../public/static/css/style.css';
</style>