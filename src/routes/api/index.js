const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.get('api.base', '/', async (ctx) => {
  ctx.body = {
    message: 'Bienvenidos a la API del examen del curso IIC2513',
  };
});

module.exports = router;
