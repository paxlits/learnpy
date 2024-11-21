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
@import 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css';
@import '../public/static/css/style.css';
</style>
