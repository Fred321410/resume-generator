/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('resumes', tbl => {
    tbl.increments();
    tbl.text('title', 128).notNullable();
    tbl.text('subtitle', 128);
    tbl.text('goals', 128);
		tbl.uuid('userId').notNullable().references('id').inTable('users').onDelete('CASCADE');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('resumes');
};