/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('formations', tbl => {
    tbl.increments();
    tbl.text('title', 128).notNullable();
    tbl.date('from').notNullable();
		tbl.date('to');
		tbl.text('description');
		tbl.text('order').notNullable();
		tbl.uuid('resume').notNullable().references('id').inTable('resumes').onDelete('CASCADE');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('formations');
};
