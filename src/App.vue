<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/options">Options</router-link> |
    <router-link v-if="!isLogedIn" to="/login">Login</router-link>
    <a v-else href="#" @click="logout">Logout</a>

    <div class="loged" v-if="isLogedIn">
      Bem vindo <strong>{{username}}</strong>
    </div>
  </div>
  <router-view/>
</template>
<script lang="ts">
import { computed, defineComponent, watch } from 'vue';
import useAuth from '@/modules/auth';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const router = useRouter();
    const route = useRoute();
    const auth = useAuth();

    watch(
      () => route.path,
      () => {
        if (!auth.state.token) {
          router.push({ name: 'Login' });
        }
      },
    );

    const isLogedIn = computed(() => auth.state.token);
    const username = computed(() => auth.state.username);

    const logout = () => {
      auth.mutations.logout();
    };
    if (!auth.state.token) {
      router.push({ name: 'Login' });
    }
    return {
      isLogedIn,
      logout,
      username,
    };
  },
});
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

#nav {
  padding: 20px;
  background-color: #b3c4e0;
  a {
    font-weight: bold;
    color: #907FA4;
    &.router-link-exact-active {
      color: #CE97B0;
    }
  }
  .loged{
    padding: 10px;
  }
}
</style>
