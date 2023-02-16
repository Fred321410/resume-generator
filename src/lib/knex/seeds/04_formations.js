/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('formations').del()
  await knex('formations').insert([
    {id: 1, title: 'ESEO', from: '2008', to: '2013', description: 'Obtention d\'un diplôme d\'ingénieur généraliste avec une spécialisation en Système d\'information', order: '1', resume: 5},
    {id: 2, title: 'Obtention du TOEIC', from: '2012', description: 'Test of English for International Communication', order: '2', resume: 5},
    {id: 3, title: 'Obtention du FCE', from: '2012', description: 'First Certificate in English', order: '3', resume: 5},
    {id: 4, title: 'Obtention du Baccalauréat', from: '2008', description: 'Obtention du baccalauréat générale scientifiques', order: '4', resume: 5},
    {id: 5, title: 'Obtention du Permis de conduire', from: '2008', order: '5', resume: 5},
  ]);
};
