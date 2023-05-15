/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('knowledge', tbl => {
    tbl.increments();
    tbl.text('type', 128).notNullable();
    tbl.text('title', 128).notNullable();
		tbl.text('order');
		tbl.uuid('resume').notNullable().references('id').inTable('resumes').onDelete('CASCADE');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('knowledge');
};
