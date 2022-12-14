const { knex } = require('../../knex/knex');

const Query = {
  users: getUsers,
}

const Mutation = {
  addUser: postUser,
  deleteUser: deleteUser,
}

module.exports = { Query, Mutation }

export {};

async function getUsers() {
  const users = await knex('users').select();
  return users;
}

async function postUser(_: any, data: any) {
  let users;
  if (data.user.id) {
    users = await knex('users').where({id: data.user.id}).update(data.user).returning('*');
  } else {
    users = await knex('users').insert(data.user).returning('*');
    await knex('resumes').insert({
      title: '',
      subtitle: '',
      goals: '',
      userId: users[0].id
    });
  }
  const user = users[0];
  return user;
}

async function deleteUser(_: any, data: any) {
  await knex('users').where({id: data.id}).del();
}