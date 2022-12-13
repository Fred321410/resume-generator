
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments();
    tbl.text('username', 128).unique().notNullable();
    tbl.text('email', 128).notNullable();
    tbl.date('birthdate', 128).notNullable();
    tbl.text('telephone', 128).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.dropTableIfExists('users');
};
