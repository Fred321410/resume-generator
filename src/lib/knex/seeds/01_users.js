/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, username: 'LeBaguettes', email: 'LeBaguettes@yopmail.com', birthdate: '1990-08-18', telephone: '0123456789'},
    {id: 2, username: 'Fred', email: 'Fred@yopmail.com', birthdate: '1990-08-18', telephone: '0123456789'},
    {id: 3, username: 'Test', email: 'Test@yopmail.com', birthdate: '1990-08-18', telephone: '0123456789'},
    {id: 4, username: 'Florentin', email: 'Florentin@yopmail.com', birthdate: '1990-08-18', telephone: '0123456789'}
  ]);
};
