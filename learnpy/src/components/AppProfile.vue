<template>
    <div id="app">
        <div style="display:flex;justify-content: center;flex-flow: column;" v-if="userName">
            <img class="avatar_profile" src="/static/img/developer-avatar.png">
            <h2 class="username_profile">{{ userName }}</h2>
            <p class="info_profile"><span style="color:#999">bio: </span>i use arch btw</p>
            <p class="info_profile"><span style="color:#999">exp: </span>0/20</p>
            <p class="info_profile"><span style="color:#999">lvl: </span>1</p>
        </div>
        <div v-else>
            <form class="create-account">
                <h2>Для создания профиля укажите свое имя</h2>
                <input class="profile-input" v-model="inputName" placeholder="МегаПрограммистЙоуСамурай148Ԑ" />
                <button @click="saveName">Сохранить</button>
            </form>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            inputName: '',
            userName: localStorage.getItem('userName') || null
        };
    },
    props: {
      isVisible: {
        type: Boolean,
        required: true,
      }
    },
    methods: {
      saveName() {
        if (this.inputName) {
          localStorage.setItem('userName', this.inputName);
          this.userName = this.inputName;
          this.$emit('name-set', this.inputName);
          this.inputName = '';
        }
      },
    }
}
</script>

<style scoped>
    
    #app {
        padding-top: 10vh;
    }    
</style>