const KoaRouter = require('koa-router');
const JSONAPISerializer = require('jsonapi-serializer').Serializer;

const ExpeditionSerializer = new JSONAPISerializer('expeditions', {
  attributes: ['name', 'startDate', 'endDate', 'patch'],
  keyForAttribute: 'camelCase',
});

const ExpeditionDetailSerializer = new JSONAPISerializer('expeditions', {
  attributes: ['name', 'startDate', 'endDate', 'patch', 'description'],
  keyForAttribute: 'camelCase',
});

const router = new KoaRouter();

router.param('id', async (id, ctx, next) => {
  const expedition = await ctx.orm.expedition.findByPk(id);
  if (!expedition) ctx.throw(404, "The expedition you are looking for doesn't exist");
  ctx.state.expedition = expedition;
  await next();
});

router.get('api.expeditions.index', '/', async (ctx) => {
  const expeditions = await ctx.orm.expedition.findAll();
  ctx.body = ExpeditionSerializer.serialize(expeditions);
});

router.get('api.candidates.show', '/:id', async (ctx) => {
  const { expedition } = ctx.state;
  ctx.body = ExpeditionDetailSerializer.serialize(expedition);
});

module.exports = router;
