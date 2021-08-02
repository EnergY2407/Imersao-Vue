<template>
  <div>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/options">Options</router-link></li>
      <li style="float: right">
        <router-link v-if="!isLogedIn" to="/login">Login</router-link>
        <a v-else href="#" @click="logout">Logout</a>
      </li>

    </ul>
    <div class="loged" v-if="isLogedIn">
      Bem vindo <strong>{{ username }}</strong>
    </div>
  </div>
  <router-view />
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
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #b3c4e0;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

li {
  float: left;
}

li a {
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;transition-duration: 1s;
}

li a:hover:not(.active) {
  background-color: #c6d8f5;
  border-radius: 25px;
  transition-duration: 300ms;
}

.loged {
  padding: 10px;
  background-color: #b3c4e0;
  font-size: 25px;
}
</style>
