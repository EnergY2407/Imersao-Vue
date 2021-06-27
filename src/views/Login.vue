<template>
<div  class="user">
  <div>Usuario</div>
    <input ref="user" v-model="username" type="text" @keyup="userHandler">
    <div style="margin-top: 10px">Senha</div>
    <input ref="pass" v-model="password" type="password" @keyup="passHandler">
    <div style="margin-top: 10px"><button @click="login">Entrar</button>
   </div>
  </div>
</template>

<script lang="ts">
import useAuth from '@/modules/auth';
import { useRouter } from 'vue-router';
import {
  defineComponent, reactive, Ref, ref, toRefs,
} from 'vue';

export default defineComponent({
  setup() {
    const auth = useAuth();
    const router = useRouter();
    const state = reactive({
      username: '',
      password: '',
    });
    const user: Ref<HTMLElement|null> = ref(null);
    const pass: Ref<HTMLElement|null> = ref(null);

    const login = () => {
      const res = auth.actions.login(state.username, state.password);

      if (res) {
        router.push({ name: 'Home' });
      }
    };
    const userHandler = (e:KeyboardEvent) => {
      console.log(e);
      if (state.username === '') {
        alert('NOME NÃO PODE SER VAZIO');
      } else if (e.key === 'Enter' && state.username && pass.value) {
        console.log('apertei enter');
        pass.value.focus();
      }
    };

    const passHandler = (e:KeyboardEvent) => {
      console.log(e);
      if (state.password === '') {
        alert('SENHA NÃO PODE SER VAZIO');
      } else if (e.key === 'Enter' && state.username && state.password) {
        console.log('apertei enter');
      }
    };
    return {
      ...toRefs(state),
      login,
      userHandler,
      passHandler,
      user,
      pass,
    };
  },
});
</script>
<style scoped>
.user{
  border: 1px solid;
  background: aqua;
}
</style>
