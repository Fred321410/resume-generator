/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('knowledge').del()
  await knex('knowledge').insert([
    {id: 1, title: 'Français: Maternelle', type: 'Langues', order: '1', resume: 5},
    {id: 2, title: 'Anglais: Courant', type: 'Langues', order: '2', resume: 5},
    {id: 3, title: 'Java/J2EE', type: 'Langages de programmation', order: '3', resume: 5},
    {id: 4, title: 'Javascript', type: 'Langages de programmation', order: '4', resume: 5},
    {id: 5, title: 'PL/SQL', type: 'Langages de programmation', order: '5', resume: 5},
    {id: 6, title: 'Javascript', type: 'Langages de programmation', order: '6', resume: 5},
    {id: 7, title: 'Vue.js', type: 'Frameworks', order: '7', resume: 5},
    {id: 8, title: 'Node.js', type: 'Frameworks', order: '8', resume: 5},
    {id: 9, title: 'Angular', type: 'Frameworks', order: '9', resume: 5},
    {id: 10, title: 'React', type: 'Frameworks', order: '10', resume: 5},
    {id: 11, title: 'AngularJs', type: 'Frameworks', order: '11', resume: 5},
    {id: 12, title: 'Redux', type: 'Frameworks', order: '12', resume: 5},
    {id: 13, title: 'Spring', type: 'Frameworks', order: '13', resume: 5},
    {id: 14, title: 'Hibernate', type: 'Frameworks', order: '14', resume: 5},
    {id: 15, title: 'MongoDB', type: 'Frameworks', order: '15', resume: 5},
    {id: 16, title: 'IntelliJ/Visual/Eclipse/Atom', type: 'Outils d\'aide à la programmation', order: '16', resume: 5},
    {id: 17, title: 'Git/Svn/Cvs', type: 'Outils d\'aide à la programmation', order: '17', resume: 5},
    {id: 18, title: 'Sonar/Jenkins', type: 'Outils d\'aide à la programmation', order: '18', resume: 5},
    {id: 19, title: 'Jira/Mantis', type: 'Outils d\'aide à la programmation', order: '19', resume: 5},
    {id: 20, title: 'Maven', type: 'Outils d\'aide à la programmation', order: '20', resume: 5},
    {id: 21, title: 'Agile', type: 'Typologie de gestion de projet', order: '21', resume: 5},
    {id: 22, title: 'Scrum', type: 'Typologie de gestion de projet', order: '22', resume: 5},
    {id: 23, title: 'Kanban', type: 'Typologie de gestion de projet', order: '23', resume: 5},
  ]);
};
