const KoaRouter = require('koa-router');
const JSONAPISerializer = require('jsonapi-serializer').Serializer;

const ExpeditionSerializer = new JSONAPISerializer('expeditions', {
  attributes: ['name', 'startDate', 'endDate', 'patch'],
  keyForAttribute: 'camelCase',
});

const router = new KoaRouter();

router.get('api.expeditions.index', '/', async (ctx) => {
  const expeditions = await ctx.orm.expedition.findAll();
  ctx.body = ExpeditionSerializer.serialize(expeditions);
});

module.exports = router;
