export default defineEventHandler(async event => {
  const token = getCookie(event, 'token');
  return new Promise(res => {
    setTimeout(() => {
      res(token ? [{ id: 1, name: '' }] : null);
    }, 200);
  });
});
