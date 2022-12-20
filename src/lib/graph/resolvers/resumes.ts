const { knex } = require('../../knex/knex');

const Query = {
  resumes: getResumes
}

const Mutation = {
  updateResume: postResume,
}


module.exports = { Query, Mutation }

export {};

async function getResumes(_: any, data: any) {
  const resumes = await knex('resumes').select().where({userId: data.userId});
  return resumes;
}

async function postResume(_: any, data: any) {
  const resumes = await knex('resumes').where({id: data.resume.id}).update(data.resume).returning('*');
  const resume = resumes[0];
  return resume;
}