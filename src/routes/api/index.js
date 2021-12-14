const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.get('api.base', '/', async (ctx) => {
  const expeditionsCount = await ctx.orm.expedition.count();
  ctx.body = {
    expeditionsCount,
    message: 'Bienvenidos a la API del examen del curso IIC2513',
  };
});

module.exports = router;
