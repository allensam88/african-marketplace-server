exports.seed = function(knex) {
  return knex('locations').truncate()
    .then(function () {
      return knex('locations').insert([
        {id: 1, location: 'Northern Uganda'},
        {id: 2, location: 'Eastern Uganda'},
        {id: 3, location: 'Western Uganda'},
        {id: 4, location: 'Southern Uganda'},
        {id: 5, location: 'Kampala, Uganda'},
        {id: 6, location: 'Northern Kenya'},
        {id: 7, location: 'Eastern Kenya'},
        {id: 8, location: 'Western Kenya'},
        {id: 9, location: 'Southern Kenya'},
        {id: 10, location: 'Nairobi, Kenya'},
        {id: 11, location: 'Mombasa, Kenya'},
        {id: 12, location: 'Northern Tanzania'},
        {id: 13, location: 'Eastern Tanzania'},
        {id: 14, location: 'Western Tanzania'},
        {id: 15, location: 'Southern Tanzania'},
        {id: 16, location: 'Dodoma, Tanzania'},
        {id: 17, location: 'Dar es Salaam, Tanzania'},
        {id: 18, location: 'Zanzibar, Tanzania'},
        {id: 19, location: 'South Sudan'},
        {id: 20, location: 'Rwanda'},
        {id: 21, location: 'Burundi'},
      ]);
    });
};