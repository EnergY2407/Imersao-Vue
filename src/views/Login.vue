<template>
  <div class="user">
    <p>Faça seu login para ter acesso</p>
    <div>Usuario</div>
    <input ref="user" v-model="username" type="text" @keyup="userHandler" />
    <div style="margin-top: 10px">Senha</div>
    <input ref="pass" v-model="password" type="password" @keyup="passHandler" />
    <div style="margin-top: 10px"><button @click="login">Entrar</button></div>
    <div class="r"></div>
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
.r {
  height: 512px;
}
p {
  font-size: 20px;
}
input{
  border-radius: 15px 50px 30px;
    border: 2px solid #609;
    padding: 15px;
    width: 200px;
    height: 1px;
    margin-top: 5px;
}
input:focus{
  outline:none;
}
button {
  padding: 5px;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  cursor: pointer;
  height: 10%;
  width: 100px;
  transition-duration: 1ms;
  margin-top: 10px;
}
button:hover {
  background: rgb(255, 255, 255);
  color: black;
}
.user {
  padding: 50px;
  background: #b3c4e0;
}
</style>
