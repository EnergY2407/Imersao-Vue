import { reactive, readonly } from 'vue';

interface AuthState {
id: string;
username: string;
password: string;
token: string;
}

interface useAuth{
    state: AuthState;
}
const state : AuthState = reactive({
  id: '',
  username: '',
  password: '',
  token: '',
});

const mutations = {};

const actions = {};

export default function useAuth(): Readonly<useAuth> {
  return readonly({
    state,
    mutations,
    actions,
  });
}
