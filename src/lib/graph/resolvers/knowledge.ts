const { knex } = require('../../knex/knex');

const Query = {
  knowledge: getKnowledge
}

const Mutation = {
  updateKnowledge: postKnowledge,
  deleteKnowledge: deleteKnowledge
}


module.exports = { Query, Mutation }

export {};

async function getKnowledge(_: any, data: any) {
  const knowledge = await knex('knowledge').select().where({resume: data.resumeId}).orderBy('order');
  return knowledge;
}

async function postKnowledge(_: any, data: any) {
  console.log('data');
  let knowledge;
  if (!data.knowledge.id) {
    data.knowledge.resume = data.resumeId;
    knowledge = await knex('knowledge').insert(data.knowledge).returning('*');
  } else {
    knowledge = await knex('knowledge').where({id: data.knowledge.id}).update(data.knowledge).returning('*');
  }
  return knowledge[0];
}

async function deleteKnowledge(_: any, data: any) {
  await knex('knowledge').where({id: data.id}).del();
}