
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {todoName: 'set up todos table', priority:'high', completed:false},
        {todoName: 'create functions in db.js', priority:'media',completed:true},
        {todoName: 'create routes to get data',priority:'low',completed:false}
      ]);
    });
};
