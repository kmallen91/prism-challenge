
exports.up = function(knex) {
  return knex.schema.createTable('info', table => {
      table.increments()
      table
        .integer()
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('data_source')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('type', 255)
      table.string('category', 255)
      table.integer('count')
      table.string('location', 255)
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('info')
};
