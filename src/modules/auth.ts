import axios from 'axios';
import { reactive, readonly } from 'vue';

interface AuthState {
id: string;
username: string;
password: string;
token: string;
}

interface AuthMutations {
  logout: () => boolean;
}

interface AuthActions {
  login: (username: string, password: string) => boolean;
}

interface useAuth{
    state: AuthState;
    mutations: AuthMutations;
    actions: AuthActions;
}
const state : AuthState = reactive({
  id: '',
  username: '',
  password: '',
  token: '',
});

const mutations = {
  login(id:string, username: string, token: string) {
    state.id = id;
    state.username = username;
    state.token = token;
  },

  logout() {
    console.log('logout');
    state.token = '';
    state.id = '';
    state.username = '';

    return true;
  },
};

const actions = {
  login(username: string, password: string) {
    console.log('Login', username, password);
    mutations.login('id', username, 'token');

    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      console.log('res', res);
    });

    return true;
  },
};

export default function useAuth(): Readonly<useAuth> {
  return readonly({
    state,
    mutations,
    actions,
  });
}
