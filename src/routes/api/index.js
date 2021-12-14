const KoaRouter = require('koa-router');
const expeditions = require('./expeditions');

const router = new KoaRouter();

router.get('api.base', '/', async (ctx) => {
  const expeditionsCount = await ctx.orm.expedition.count();
  ctx.body = {
    expeditionsCount,
    message: 'Bienvenidos a la API del examen del curso IIC2513',
  };
});

router.use('/expeditions', expeditions.routes());

module.exports = router;
