<template>
  <div id="nav">
    <ul>
      <li><router-link to="/">HOME</router-link></li>
      <li><router-link to="/about">ABOUT</router-link></li>
      <li><router-link to="/options">OPTIONS</router-link></li>
      <li style="float:right">
        <router-link v-if="!isLogedIn" to="/login">LOGIN</router-link>
        <a v-else href="#" @click="logout">LOGOUT</a>
      </li>
    <div class="loged" v-if="isLogedIn">
      Bem vindo <strong class="">{{ username }}</strong>
    </div>
    </ul>
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
  padding: 10px;
  overflow: hidden;
  background-color: #b3c4e0;
  font-family: 'Times New Roman', Times, serif;
}

li {
  float: left;

}

li a {
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #b2b2ff;
  border-radius: 20px;
}

  .loged {
    width: 85%;
    font-size: 30px;
    color: blue;
    padding: 10px;
  }

</style>
