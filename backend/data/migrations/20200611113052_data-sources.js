
exports.up = function(knex) {
  return knex.schema.createTable('data-source', table => {
      table.increments()
      table.string('name, 255').unique().notNullable()
      table.integer('total_db')
      table.integer('db_coverage')
      table.integer('total_table')
      table.integer('table_coverage')
      table.integer('total_file')
      table.integer('file_coverage')
      table.integer('resolved')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('data-source')
};
