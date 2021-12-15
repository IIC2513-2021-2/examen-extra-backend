const KoaRouter = require('koa-router');
const JSONAPISerializer = require('jsonapi-serializer').Serializer;

const PERMITTED_EXPEDITION_FIELDS = [
  'name',
  'startDate',
  'endDate',
  'patch',
  'description',
];

const ExpeditionSerializer = new JSONAPISerializer('expeditions', {
  attributes: ['name', 'startDate', 'endDate', 'patch'],
  keyForAttribute: 'camelCase',
});

const ExpeditionDetailSerializer = new JSONAPISerializer('expeditions', {
  attributes: ['name', 'startDate', 'endDate', 'patch', 'description'],
  keyForAttribute: 'camelCase',
});

const MemberSerializer = new JSONAPISerializer('members', {
  attributes: ['name', 'agency', 'nationality', 'bio', 'photo', 'role'],
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

router.get('api.expeditions.show', '/:id', async (ctx) => {
  const { expedition } = ctx.state;
  ctx.body = ExpeditionDetailSerializer.serialize(expedition);
});

router.get('api.expeditions.members', '/:id/members', async (ctx) => {
  const { expedition } = ctx.state;
  const members = await expedition.getMembers();
  ctx.body = MemberSerializer.serialize(members);
});

router.patch('api.expeditions.update', '/:id', async (ctx) => {
  const { expedition } = ctx.state;
  try {
    await expedition.update(ctx.request.body, { fields: PERMITTED_EXPEDITION_FIELDS });
  } catch (ValidationError) {
    ctx.throw(422, ValidationError.message);
  }

  ctx.body = ExpeditionDetailSerializer.serialize(expedition);
});

module.exports = router;
