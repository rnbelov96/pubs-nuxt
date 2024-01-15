const AUTH_KEY = 'vue-work-auth-key';

export function getToken() {
  return useCookie('token').value;
}

export function setToken(token) {
  return localStorage?.setItem(AUTH_KEY, token);
}

export function removeToken() {
  const token = useCookie('token');
  token.value = '';
}
