const { knex } = require('../../knex/knex');

const Query = {
  formations: getFormations
}

const Mutation = {
  updateFormation: postFormation,
  deleteFormation: deleteFormation
}


module.exports = { Query, Mutation }

export {};

async function getFormations(_: any, data: any) {
  const formations = await knex('formations').select().where({resume: data.resumeId}).orderBy('order');
  return formations;
}

async function postFormation(_: any, data: any) {
  console.log('data');
  let formations;
  if (!data.formation.id) {
    data.formation.resume = data.resumeId;
    formations = await knex('formations').insert(data.formation).returning('*');
  } else {
    formations = await knex('formations').where({id: data.formation.id}).update(data.formation).returning('*');
  }
  const formation = formations[0];
  return formation;
}

async function deleteFormation(_: any, data: any) {
  await knex('formations').where({id: data.id}).del();
}