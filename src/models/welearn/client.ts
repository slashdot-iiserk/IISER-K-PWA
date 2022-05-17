import { defaultedStorage } from '@/utils';
import { appendSearchParams } from '@/utils/urllib';
import { WeLearnURLs } from './constants';

export const WeLearnClient = {
  _token: defaultedStorage('token', '') as string,
  async login(username: string, password: string) {
    const res = await fetch(
      appendSearchParams(WeLearnURLs.login, {
        username,
        password,
      }),
      { method: 'POST' },
    );
    const data = await res.json();
    if (data?.errorcode === 'invalidlogin') {
      console.error(data);
      return false;
    }
    this.saveAuthData(data.token, data.privatetoken, username, password);
    return true;
  },
  saveAuthData(token: string, pToken: string, usr: string, pwd: string) {
    this._token = token;
    localStorage.setItem('token', token);
    localStorage.setItem('privateToken', pToken);
    localStorage.setItem('username', usr);
    localStorage.setItem('password', pwd);
    localStorage.setItem('isLoggedIn', JSON.stringify(true));
  },
  async getData(site_function: string, params: Record<string, any> = {}) {
    const res = await fetch(
      appendSearchParams(WeLearnURLs.server, {
        wstoken: this._token,
        wsfunction: site_function,
        ...params,
      }),
    );
    return await res.json();
  },
};
