/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('resumes').del()
  await knex('resumes').insert([
    {id: 1, title: 'Default1', subtitle: 'Default', goals: 'Default', userId: 1},
    {id: 2, title: 'Default2', subtitle: 'Default', goals: 'Default', userId: 2},
    {id: 3, title: 'Default3', subtitle: 'Default', goals: 'Default', userId: 3},
    {id: 4, title: 'Default4', subtitle: 'Default', goals: 'Default', userId: 4},
  ]);
};
