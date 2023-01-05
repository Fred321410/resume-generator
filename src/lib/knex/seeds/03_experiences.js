/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('experiences').del()
  await knex('experiences').insert([
    {id: 1, poste: 'Lead Dev Fullstack', esn: '', enterprise: 'Bemyapp', from: '2020-11-01', to: '2022-12-01', stillInPost: false, logo: '', city: 'Nantes', country: '', description: 'This is a description', resume: 5},
    {id: 2, poste: 'Lead Dev Fullstack', esn: '', enterprise: 'SIAO', from: '2020-11-01', to: '2022-12-01', stillInPost: false, logo: '', city: 'Nantes', country: '', description: 'This is a description', resume: 5},
    {id: 3, poste: 'Lead Dev Fullstack', esn: '', enterprise: 'Icowsoft', from: '2020-11-01', to: '2022-12-01', stillInPost: false, logo: '', city: 'Nantes', country: '', description: 'This is a description', resume: 5},
    {id: 4, poste: 'Lead Dev Fullstack', esn: '', enterprise: 'Generali', from: '2020-11-01', to: '2022-12-01', stillInPost: false, logo: '', city: 'Nantes', country: '', description: 'This is a description', resume: 5},
  ]);
};