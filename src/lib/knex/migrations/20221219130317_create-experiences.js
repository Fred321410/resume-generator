/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('experiences', tbl => {
    tbl.increments();
    tbl.text('poste', 128).notNullable();
    tbl.text('esn', 128);
    tbl.text('enterprise', 128).notNullable();
    tbl.date('from').notNullable();
		tbl.date('to');
		tbl.boolean('stillInPost').defaultTo(false);
		tbl.text('logo');
		tbl.text('city');
		tbl.text('country');
		tbl.text('description');
		tbl.uuid('resume').notNullable().references('id').inTable('resumes').onDelete('CASCADE');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('experiences');
};