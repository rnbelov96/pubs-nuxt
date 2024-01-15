export default defineEventHandler(async event => {
  const data = await readBody(event);
  setCookie(event, 'token', '123');
  return new Promise(res => {
    setTimeout(() => {
      res(data);
    }, 200);
  });
});
