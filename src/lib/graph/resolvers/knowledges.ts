const { knex } = require('../../knex/knex');

const Query = {
  knowledges: getKnowledges
}

const Mutation = {
  updateKnowledge: postKnowledge,
  deleteKnowledge: deleteKnowledge
}


module.exports = { Query, Mutation }

export {};

async function getKnowledges(_: any, data: any) {
  const knowledges = await knex('knowledges').select().where({resume: data.resumeId}).orderBy('order');
  return knowledges;
}

async function postKnowledge(_: any, data: any) {
  console.log('data');
  let knowledges;
  if (!data.knowledge.id) {
    data.knowledge.resume = data.resumeId;
    knowledges = await knex('knowledges').insert(data.knowledge).returning('*');
  } else {
    knowledges = await knex('knowledges').where({id: data.knowledge.id}).update(data.knowledge).returning('*');
  }
  const knowledge = knowledges[0];
  return knowledge;
}

async function deleteKnowledge(_: any, data: any) {
  await knex('knowledges').where({id: data.id}).del();
}