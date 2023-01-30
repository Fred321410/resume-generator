/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('experiences').del()
  await knex('experiences').insert([
    {id: 1, poste: 'Lead Dev Fullstack', esn: '', enterprise: 'Bemyapp', from: '2020-11-01', to: '2022-12-01', stillInPost: false, logo: 'bemyapp.png', city: 'Nantes', country: '', description: 'Développement et maintenance de l\'application (code, infra). Participation aux choix techniques structurants et à leur intégration dans la roadmap. Conception technique, accompagnement de la réalisation et de la mise en production d\'une fonctionnalité majeure. 4 Personnes sur un an. Développement, en binôme avec un architecte AWS, de l\'agrégation des  données fonctionnelles et de leurs mises à disposition aux clients dans un dashboard. Restructuration et optimisation de la gamification sur la plateforme', resume: 5},
    {id: 2, poste: 'Lead Dev Fullstack', esn: '', enterprise: 'SIAO', from: '2020-11-01', to: '2022-12-01', stillInPost: false, logo: '', city: 'Nantes', country: '', description: 'This is a description', resume: 5},
    {id: 3, poste: 'Lead Dev Fullstack', esn: '', enterprise: 'Icowsoft', from: '2020-11-01', to: '2022-12-01', stillInPost: false, logo: '', city: 'Nantes', country: '', description: 'This is a description', resume: 5},
    {id: 4, poste: 'Lead Dev Fullstack', esn: '', enterprise: 'Generali', from: '2020-11-01', to: '2022-12-01', stillInPost: false, logo: '', city: 'Nantes', country: '', description: 'This is a description', resume: 5},
  ]);
};