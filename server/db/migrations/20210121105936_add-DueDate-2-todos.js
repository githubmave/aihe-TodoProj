
exports.up = function(knex, Promise) {
  return knex.schema.table('todos', function(table) {
          table.string('Due_Date')

  })
};

exports.down = function(knex,Promise) {
    return knex.schema.table('todos', function (table){
            table.dropColumn('Due_Date')

    })
  
};
