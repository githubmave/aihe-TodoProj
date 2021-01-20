
exports.up = function(knex) {
  return knex.schema.createTable('todos', function (table) {
    table.increments('id').primary()
    table.string('todoName')
    table.string('priority')
    table.boolean('completed')
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('todos')
  
};
