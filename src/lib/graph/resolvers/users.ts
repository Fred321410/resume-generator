const { knex } = require('../../knex/knex');

const Query = {
  users: getUsers,
}

const Mutation = {
  addUser: postUser,
}

module.exports = { Query, Mutation }

export {};

async function getUsers() {
  const users = await knex('users').select();
  return users;
}

async function postUser(_: any, data: any) {
  const users = await knex('users').insert({username: data.username}).returning('*');
  const user = users[0];
  return user;
}