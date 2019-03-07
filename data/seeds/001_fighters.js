
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('fighters')
    .truncate()
    .then(function() {
      return knex('fighters').insert([
        { name: 'blanca' },
        { name: 'ken' },
        { name: 'ryu' },
        { name: 'eddie' },
      ]);
    });
};
