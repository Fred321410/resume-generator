const { knex } = require('../../knex/knex');

const Query = {
  experiences: getExperiences
}

const Mutation = {
  updateExperience: postExperience,
}


module.exports = { Query, Mutation }

export {};

async function getExperiences(_: any, data: any) {
  const experiences = await knex('experiences').select().where({resume: data.resumeId});
  return experiences;
}

async function postExperience(_: any, data: any) {
  const experiences = await knex('experiences').where({id: data.experience.id}).update(data.experience).returning('*');
  const experience = experiences[0];
  return experience;
}