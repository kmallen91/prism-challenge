
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('data-source').del()
    .then(function () {
      // Inserts seed entries
      return knex('data-source').insert([
        {id: 1, name: 'ds1', total_db: 15, db_coverage: 5, total_table: 15, table_coverage: 5, total_file: 1500, file_coverage: 100, resolved: 3},
        {id: 2, name: 'ds2', total_db: 15, db_coverage: 5, total_table: 15, table_coverage: 5, total_file: 1500, file_coverage: 100, resolved: 3},
        {id: 3, name: 'ds3', total_db: 15, db_coverage: 5, total_table: 15, table_coverage: 5, total_file: 1500, file_coverage: 100, resolved: 3},
        {id: 4, name: 'ds4', total_db: 15, db_coverage: 5, total_table: 15, table_coverage: 5, total_file: 1500, file_coverage: 100, resolved: 3},
        {id: 5, name: 'ds5', total_db: 15, db_coverage: 5, total_table: 15, table_coverage: 5, total_file: 1500, file_coverage: 100, resolved: 3},
        {id: 6, name: 'ds6', total_db: 15, db_coverage: 5, total_table: 15, table_coverage: 5, total_file: 1500, file_coverage: 100, resolved: 3}
      ]);
    });
};
