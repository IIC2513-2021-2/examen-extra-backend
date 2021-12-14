const KoaRouter = require('koa-router');
const expeditions = require('./expeditions');

const router = new KoaRouter();

router.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    if (err.status) {
      const { status, message } = err;
      ctx.app.emit('error', err, ctx);
      ctx.status = status;
      ctx.body = {
        status,
        message,
      };
    } else {
      throw err;
    }
  }
});

router.get('api.base', '/', async (ctx) => {
  const expeditionsCount = await ctx.orm.expedition.count();
  ctx.body = {
    expeditionsCount,
    message: 'Bienvenidos a la API del examen del curso IIC2513',
  };
});

router.use('/expeditions', expeditions.routes());

module.exports = router;
