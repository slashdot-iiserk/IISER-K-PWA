import { defaultedStorage } from '@/utils';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: defaultedStorage('token', '') as string,
    privateToken: defaultedStorage('privateToken', '') as string,
    username: defaultedStorage('username', '') as string,
    password: defaultedStorage('password', '') as string,
    isLoggedIn: JSON.parse(defaultedStorage('isLoggedIn', false)) as boolean,
  }),
});
