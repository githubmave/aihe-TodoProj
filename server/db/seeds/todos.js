
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {todoName: 'set up todos table', priority:'high', completed:false,Due_Date:'march'},
        {todoName: 'create functions in db.js', priority:'media',completed:false,Due_Date:'march'},
        {todoName: 'create routes to get data',priority:'low',completed:false,Due_Date:'march'}
      ]);
    });
};
