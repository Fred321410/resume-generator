const { knex } = require('../../knex/knex');

const Query = {
  resumes: getResumes
}

module.exports = { Query }

export {};

async function getResumes(_: any, data: any) {
  console.log('Hello');
  const resumes = await knex('resumes').select().where({userId: data.userId});
  console.log(resumes);
  return resumes;
}