<template>
  <div>
    <AppHeader/>
    <RouterView></RouterView>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; 
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
