export default defineEventHandler(async event => {
  deleteCookie(event, 'token');
  return new Promise(res => {
    setTimeout(() => {
      res('success');
    }, 200);
  });
});
