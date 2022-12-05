/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, username: 'LeBaguettes'},
    {id: 2, username: 'Fred'},
    {id: 3, username: 'Test'},
    {id: 4, username: 'Florentin'}
  ]);
};
