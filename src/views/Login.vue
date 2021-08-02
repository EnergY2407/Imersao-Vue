<template>
  <div class="user">
    <div>Usuario</div>
    <input ref="user" v-model="username" type="text" @keyup="userHandler" />
    <div style="margin-top: 10px">Senha</div>
    <input ref="pass" v-model="password" type="password" @keyup="passHandler" />
    <div style="margin-top: 10px"><button @click="login">Entrar</button></div>
    <div class="fix"></div>
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
      username: '1',
      password: '1',
    });
    const user: Ref<HTMLElement | null> = ref(null);
    const pass: Ref<HTMLElement | null> = ref(null);

    const login = () => {
      const res = auth.actions.login(state.username, state.password);

      if (res) {
        router.push({ name: 'Home' });
      }
    };
    const userHandler = (e: KeyboardEvent) => {
      console.log(e);
      if (state.username === '') {
        alert('NOME NÃO PODE SER VAZIO');
      } else if (e.key === 'Enter' && state.username && pass.value) {
        console.log('apertei enter');
        pass.value.focus();
      }
    };

    const passHandler = (e: KeyboardEvent) => {
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
input {
  border-radius: 15px 50px 30px;
  border: 2px solid #609;
  padding: 20px;
  width: 150px;
  font-size: 17px;
  height: 15px;
  outline: none;
  margin-top: 10px;
  margin-bottom: 10px;
}
button{
  cursor: pointer;
  border-radius: 15px;
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  font-size: 16px;
  transition-duration:1s;
}
button:hover{
  background-color: purple;
  transition-duration:1s;
}
.fix{
  background-color: #b3c4e0 ;
  height: 400px;
}
.user {
  padding: 100px;
  background: #b3c4e0;
  font-size: 20px;
}
</style>
